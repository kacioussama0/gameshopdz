import { defineEventHandler, createError } from 'h3'

type Zone = { id: number; name: string; order?: number }
type Location = { code: string; type: 'country' | 'state' | 'postcode' | 'continent' }
type Method = {
    id: number
    method_id: string
    title: string
    enabled: boolean
    settings?: Record<string, any>
}

function getWilayaNumber(code: string): string | null {
    const match = code.match(/-(\d+)$/)
    return match ? match[1] : null
}


function getBasicAuth() {

    const base = 'https://gameshopdz.com/wp-json/wc/v3' // https://example.com/wp-json/wc/v3
    const key = 'ck_72b4dc376adad9c2bd355b1b9cf448393d83b4e6'
    const secret = 'cs_0b640d5a089e7d9b3b0d7b031b78411a16b68efe'
    if (!base || !key || !secret) {
        throw createError({ statusCode: 500, statusMessage: 'WC env vars missing' })
    }
    return {
        base,
        headers: {
            Authorization: 'Basic ' + Buffer.from(`${key}:${secret}`).toString('base64')
        }
    }
}

function extractCost(method: Method): number | null {
    const raw = method?.settings?.cost?.value ?? method?.settings?.cost ?? null
    if (raw !== null && raw !== undefined && raw !== '') {
        const n = Number(String(raw).replace(',', '.'))
        if (!Number.isNaN(n)) return n
    }
    if (method.method_id === 'free_shipping') return 0
    if (method.method_id === 'local_pickup') return 0
    return null
}

export default defineEventHandler(async () => {
    const { base, headers } = getBasicAuth()

    // Zones
    const zones = await $fetch<Zone[]>(`${base}/shipping/zones`, { headers })

    const out = await Promise.all(
        zones.map(async (z) => {
            // Regions (Zone Locations)
            const locations = await $fetch<Location[]>(
                `${base}/shipping/zones/${z.id}/locations`,
                { headers }
            )

            // Methods (enabled + cost only)
            const methods = await $fetch<Method[]>(
                `${base}/shipping/zones/${z.id}/methods`,
                { headers }
            )

            const simplifiedMethods = methods
                .filter(m => m.enabled)
                .map(m => ({
                    id: m.id,
                    type: m.method_id,   // flat_rate / free_shipping / local_pickup ...
                    name: m.title,
                    cost: extractCost(m)
                }))
                .filter(m => m.cost !== null) // “only costs”

            return {
                zone_id: z.id,
                zone_name: z.name,
                regions: locations.map(l => ({
                    type: l.type,
                    code: getWilayaNumber(l.code)
                })),
                methods: simplifiedMethods
            }
        })
    )

    return out
})
