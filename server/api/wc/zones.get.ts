export default defineEventHandler(async () => {
    const config = useRuntimeConfig()
    const ck = 'ck_72b4dc376adad9c2bd355b1b9cf448393d83b4e6'
    const cs = 'cs_0b640d5a089e7d9b3b0d7b031b78411a16b68efe'

    const auth =
        'Basic ' +
        Buffer.from(`${ck}:${cs}`).toString('base64')

    const base = 'https://gameshopdz.com/wp-json/wc/v3' // مثال: https://gameshopdz.com/wp-json/wc/v3

    // 1) zones
    const zones: Array<{ id: number; name: string; order: number }> = await $fetch(
        `${base}/shipping/zones`,
        { headers: { Authorization: auth } }
    )

    // 2) methods + locations لكل zone
    const zonesFull = await Promise.all(
        zones.map(async (z) => {
            const [locations] = await Promise.all([

                $fetch(`${base}/shipping/zones/${z.id}/locations`, {
                    headers: { Authorization: auth }
                })
            ])

            return { ...z, locations }
        })
    )

    // 3) “Rest of the world” (zone id = 0) optional
    // بعض المتاجر تحتاج تعالجها وحدها:
    // const restMethods = await $fetch(`${base}/shipping/zones/0/methods`, { headers: { Authorization: auth } })
    // zonesFull.unshift({ id: 0, name: "Rest of the world", order: 0, locations: [], methods: restMethods })

    return zonesFull
})