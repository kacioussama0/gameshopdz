export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const cookie = getHeader(event, 'cookie') || ''
    const nonce  = getHeader(event, 'x-wp-nonce') || ''

    return await $fetch(
        `https://woo.gameshopdz.com/wp-json/wc/store/v1/cart/items`,
        {
            method: "DELETE",
            credentials: "include",
            headers: {
                cookie,
                'X-WP-Nonce': nonce,
            }
        }
    )
})
