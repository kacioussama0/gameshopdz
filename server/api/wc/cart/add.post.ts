export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const cookie = getHeader(event, "cookie") || ""

    return await $fetch("https://gameshopdz.com/wp-json/wc/store/v1/cart/add-item", {
        method: "POST",
        headers: { "content-type": "application/json", cookie },
        body: { id: body.id, quantity: body.quantity ?? 1 },
    })
})
