export default defineEventHandler(async (event) => {
    const cookie = getHeader(event, "cookie") || ""

    const res = await $fetch.raw("https://gameshopdz.com/wp-json/wc/store/cart", {
        method: "GET",
        headers: { cookie },
        credentials: "include",
    })

    // ✅ رجّع set-cookie للمتصفح (باش session تثبت)
    const setCookie = res.headers.getSetCookie?.()
    if (setCookie?.length) setHeader(event, "set-cookie", setCookie)

    const nonce =
        res.headers.get("x-wc-store-api-nonce") ||
        res.headers.get("X-WC-Store-API-Nonce") ||
        null

    return { nonce }
})
