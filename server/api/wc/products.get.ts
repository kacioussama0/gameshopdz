export default defineEventHandler(async (event) => {
    const query = getQuery(event)

    const ck = 'ck_72b4dc376adad9c2bd355b1b9cf448393d83b4e6'
    const cs = 'cs_0b640d5a089e7d9b3b0d7b031b78411a16b68efe'

    const res = await $fetch.raw(
        'https://gameshopdz.com/wp-json/wc/v3/products',
        {
            params: {
                ...query,
                status: 'publish',
            },
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
        products: res._data.map((product)=> {
            return {
                'id': product.id,
                'name': product.name,
                'slug': product.slug,
                'sku': product.sku,
                'type': product.type,
                'description': product.description,
                'short_description': product.short_description,
                'price': product.price,
                'regular_price': product.regular_price,
                'sale_price': product.sale_price,
                'on_sale': product.on_sale,
                'purchasable': product.purchasable,
                'categories': product.categories,
                'tags': product.tags,
                'images': product.images,
                'related_ids': product.related_ids,
                'stock_status': product.stock_status,
            }
        }),
        total: Number(res.headers.get("x-wp-total")),
        totalPages: Number(res.headers.get("x-wp-totalpages")),
    }
})
