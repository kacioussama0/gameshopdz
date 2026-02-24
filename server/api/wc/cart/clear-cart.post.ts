export default defineEventHandler(async (event) => {
    const cartToken = getRequestHeader(event, "cart-token") || ""
    const nonce = getRequestHeader(event, "x-wc-store-api-nonce") || ""

    if (!nonce) {
        throw createError({ statusCode: 401, statusMessage: "Missing X-WC-Store-API-Nonce" })
    }

    return await $fetch("https://woo.gameshopdz.com/wp-json/wc/store/v1/cart/items", {
        method: "DELETE",
        headers: {
            "X-WC-Store-API-Nonce": nonce,
            ...(cartToken ? { "Cart-Token": cartToken } : {}),
            "Content-Type": "application/json",
        }
    })
})
