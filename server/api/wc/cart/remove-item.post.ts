export default defineEventHandler(async (event) => {
    const body = await readBody(event) // { key }
    const cookie = getHeader(event, "cookie") || ""

    const cartToken = getCookie(event, "wc_cart_token") || ""
    const nonce = getCookie(event, "wc_cart_nonce") || ""

    const res = await $fetch.raw("https://gameshopdz.com/wp-json/wc/store/cart/remove-item", {
        method: "POST",
        headers: {
            cookie,
            "content-type": "application/json",
            ...(cartToken ? { "Cart-Token": cartToken } : {}),
            ...(nonce ? { "Nonce": nonce } : {}),
        },
        body,
        credentials: "include",
    })

    // ✅ حدّث token/nonce إذا تبدلو
    const newToken = res.headers.get("cart-token")
    const newNonce = res.headers.get("nonce")
    if (newToken) setCookie(event, "wc_cart_token", newToken, { path: "/" })
    if (newNonce) setCookie(event, "wc_cart_nonce", newNonce, { path: "/" })

    return res._data
})
