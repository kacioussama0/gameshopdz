export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const storeUrl = config.public.wcStoreUrl
    const ck = 'ck_72b4dc376adad9c2bd355b1b9cf448393d83b4e6'
    const cs = 'cs_0b640d5a089e7d9b3b0d7b031b78411a16b68efe'

    const path = getRouterParam(event, "path") || ""
    const query = getQuery(event)

    const url = new URL(`/wp-json/wc/v3/${path}`, 'https://gameshopdz.com')
    for (const [k, v] of Object.entries(query)) {
        if (v !== undefined) url.searchParams.set(k, String(v))
    }

    const auth = Buffer.from(`${ck}:${cs}`).toString("base64")


    return await $fetch(url.toString(), {
        headers: { Authorization: `Basic ${auth}` },
    })
})
