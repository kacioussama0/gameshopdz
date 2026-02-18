export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()

    const response = await $fetch(
        `https://woo.gameshopdz.com/wp-json/wc/store/v1/cart/items`,
        {
            method: "DELETE",
            credentials: "include"
        }
    )

    return response
})
