import algoliasearch from "algoliasearch"


export default defineEventHandler(async () => {


    const client = algoliasearch('NBN8MJS91Y', '354ba9073bab3ba4855792db36748f80')
    const index = client.initIndex("products")

    const ck = 'ck_72b4dc376adad9c2bd355b1b9cf448393d83b4e6'
    const cs = 'cs_0b640d5a089e7d9b3b0d7b031b78411a16b68efe'

    const auth = "Basic " + Buffer.from(`${ck}:${cs}`).toString("base64")

    const perPage = 100
    let page = 1
    let total = 0

    while (true) {
        const products = await $fetch<any[]>(
            `https://woo.gameshopdz.com/wp-json/wc/v3/products?status=publish&per_page=${perPage}&page=${page}`,
            { headers: { Authorization: auth } }
        )

        if (!products.length) break

        const records = products.map((p) => ({
            objectID: p.id,

            name: p.name,
            slug: p.slug,
            sku: p.sku || null,

            created_at: p.date_created,
            created_at_ts: new Date(p.date_created).getTime(),

            price: Number(p.price || 0),
            regular_price: Number(p.regular_price || 0),
            sale_price: Number(p.sale_price || 0),
            on_sale: p.on_sale || false,

            image: p.images?.[0]?.thumbnail
                ? p.images[0].thumbnail
                : null,

            in_stock: p.stock_status === "instock",
            stock_status: p.stock_status,

            categories: (p.categories || []).map((c: any) => c.name),
            category_ids: (p.categories || []).map((c: any) => c.id),

            tags: (p.tags || []).map((t: any) => t.name),

            brand: p.brands?.length
                ? p.brands[0].name
                : p.attributes?.find((a: any) => a.name.toLowerCase() === "brand")?.options?.[0] || null,

            total_sales: p.total_sales || 0,
            rating: p.average_rating ? Number(p.average_rating) : 0,

            attributes: (p.attributes || []).reduce((acc: any, attr: any) => {
                acc[attr.name.toLowerCase()] = attr.options
                return acc
            }, {}),

            status: p.status,
            permalink: p.permalink,
        }))

        await index.saveObjects(records)

        total += records.length
        page++
    }

    return { ok: true, indexed: total }
})