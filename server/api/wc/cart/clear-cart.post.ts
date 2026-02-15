export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()

    const response = await $fetch(
        `https://gameshopdz.com/wp-json/wc/store/cart`,
        {
            method: "DELETE",
            credentials: "include"
        }
    )

    return response
})
