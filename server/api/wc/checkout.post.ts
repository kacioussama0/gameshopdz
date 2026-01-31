export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const cookie = getHeader(event, "cookie") || ""

    const cartToken = getCookie(event, "wc_cart_token") || ""
    const nonce = getCookie(event, "wc_cart_nonce") || ""

    /**
     * body مثال:
     * {
     *   billing_address: { first_name,last_name,address_1,city,state,postcode,country,email,phone },
     *   shipping_address: { ... } // أو نفس billing
     *   payment_method: "cod",
     *   payment_data: [] // غالبًا فاضية لـ COD
     * }
     */

    const res = await $fetch.raw("https://gameshopdz.com/wp-json/wc/store/v1/checkout", {
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

    // ✅ تحديث Token/Nonce إذا تبدلو
    const newToken = res.headers.get("cart-token")
    const newNonce = res.headers.get("nonce")
    if (newToken) setCookie(event, "wc_cart_token", newToken, { path: "/" })
    if (newNonce) setCookie(event, "wc_cart_nonce", newNonce, { path: "/" })

    return res._data
})
