export default defineEventHandler(async (event) => {
    const cookie = getHeader(event, "cookie") || ""
    const cartToken = getCookie(event, "wc_cart_token") || ""

    const res = await $fetch.raw("https://woo.gameshopdz.com/wp-json/wc/store/cart", {
        headers: {
            cookie,
            ...(cartToken ? { "Cart-Token": cartToken } : {}),
        },
        credentials: "include",
    })

    // خزّن token/nonce اللي يرجعهم السيرفر (يتبدلو)
    const newToken = res.headers.get("cart-token")
    const newNonce = res.headers.get("nonce")

    if (newToken) setCookie(event, "wc_cart_token", newToken, { path: "/" })
    if (newNonce) setCookie(event, "wc_cart_nonce", newNonce, { path: "/" })

    return res._data
})
