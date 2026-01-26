export default defineEventHandler(async (event) => {
    const cookie = getHeader(event, "cookie") || ""
    return await $fetch("https://gameshopdz.com/wp-json/wc/store/v1/cart", {
        headers: { cookie },
    })
})
