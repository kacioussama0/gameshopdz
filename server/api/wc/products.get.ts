export default defineEventHandler(async (event) => {
    const query = getQuery(event)

    const ck = 'ck_72b4dc376adad9c2bd355b1b9cf448393d83b4e6'
    const cs = 'cs_0b640d5a089e7d9b3b0d7b031b78411a16b68efe'

    const res = await $fetch.raw(
        'https://gameshopdz.com/wp-json/wc/v3/products',
        {
            query,
            headers: {
                Authorization:
                    "Basic " +
                    Buffer.from(
                        ck + ":" + cs
                    ).toString("base64"),
            },
        }
    )

    return {
        products: res._data,
        total: Number(res.headers.get("x-wp-total")),
        totalPages: Number(res.headers.get("x-wp-totalpages")),
    }
})
