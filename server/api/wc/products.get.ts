export default cachedEventHandler(async (event) => {
        const query = getQuery(event)

        const ck = 'ck_72b4dc376adad9c2bd355b1b9cf448393d83b4e6'
        const cs = 'cs_0b640d5a089e7d9b3b0d7b031b78411a16b68efe'

        const auth = "Basic " + Buffer.from(`${ck}:${cs}`).toString("base64")

        const res = await $fetch.raw(
            "https://woo.gameshopdz.com/wp-json/wc/v3/products",
            {
                params: {
                    ...query,
                    status: "publish",
                },
                headers: {
                    Authorization: auth,
                },
            }
        )

        const products = await Promise.all(
            res._data.map(async (product: any) => {
                let variations: any[] = []

                if (product.type === "variable") {
                    variations = await $fetch(
                        `https://woo.gameshopdz.com/wp-json/wc/v3/products/${product.id}/variations`,
                        {
                            headers: {
                                Authorization: auth,
                            },
                        }
                    )
                }

                // "epay" = paid online (digital goods); "prepay-500" = 500 DA deposit
                // paid online to reserve. "prepay" also contains "epay", so match exactly.
                const tagNames: string[] = product.tags.map((tag: any) => tag.name.trim().toLowerCase())
                const prepayTag = tagNames.find(name => /^prepay-\d+$/.test(name))
                const prepayAmount = prepayTag ? Number(prepayTag.split('-')[1]) : 0

                return {
                    id: product.id,
                    name: product.name,
                    slug: product.slug,
                    sku: product.sku,
                    type: product.type,
                    price: product.price,
                    description: product.description,
                    short_description: product.short_description,
                    regular_price: product.regular_price,
                    sale_price: product.sale_price,
                    on_sale: product.on_sale,
                    purchasable: product.purchasable,
                    categories: product.categories,
                    tags: product.tags,
                    images: product.images,
                    attributes: product.attributes,
                    related_ids: product.related_ids,
                    stock_status: product.stock_status,
                    grouped_products: product.type == "grouped" ? product.grouped_products : undefined,
                    variations: variations.map((v: any) => ({
                        id: v.id,
                        price: v.price,
                        regular_price: v.regular_price,
                        sale_price: v.sale_price,
                        stock_status: v.stock_status,
                        attributes: v.attributes,
                        image: v.image?.src ? { id: v.image.id, src: v.image.src, alt: v.image.alt } : null,
                    })),

                    is_epay: tagNames.includes("epay"),
                    is_prepay: prepayAmount > 0,
                    prepay_amount: prepayAmount,
                }
            })
        )

        return {
            products,
            total: Number(res.headers.get("x-wp-total")),
            totalPages: Number(res.headers.get("x-wp-totalpages")),
        }
    }, {

        maxAge: 60 * 5,
        name: "wc-products",

        getKey: (event) => {
            const query = getQuery(event)
            return JSON.stringify({
                ...query,
                status: "publish",
            })
        },
    })