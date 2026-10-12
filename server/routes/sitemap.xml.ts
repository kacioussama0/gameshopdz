// /sitemap.xml: home, shop, every product category and every published product.
// Built from WooCommerce and cached for 12 hours.

const WC_BASE = 'https://woo.gameshopdz.com/wp-json/wc/v3'

// Same internal categories the shop hides
const HIDDEN_CATEGORIES = [29, 3039, 2216]

const escapeXml = (value: string) =>
    value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export default cachedEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const site = String(config.public.siteUrl || 'https://gameshopdz.com').replace(/\/$/, '')

    // Same credentials as the other WooCommerce routes
    const ck = config.wcConsumerKey || 'ck_72b4dc376adad9c2bd355b1b9cf448393d83b4e6'
    const cs = config.wcConsumerSecret || 'cs_0b640d5a089e7d9b3b0d7b031b78411a16b68efe'
    const headers = { Authorization: 'Basic ' + Buffer.from(`${ck}:${cs}`).toString('base64') }

    // Every page of a WooCommerce collection: the first tells us how many pages
    // there are, the rest are fetched in parallel batches
    const fetchAll = async (path: string, query: Record<string, any>) => {
        const get = (page: number) => $fetch.raw(`${WC_BASE}${path}`, {
            headers,
            query: { ...query, per_page: 100, page },
        })

        const first = await get(1)
        const items: any[] = [...(first._data as any[])]
        const totalPages = Math.min(Number(first.headers.get('x-wp-totalpages') || 1), 100)

        const rest = Array.from({ length: totalPages - 1 }, (_, i) => i + 2)
        for (let i = 0; i < rest.length; i += 6) {
            const pages = await Promise.all(rest.slice(i, i + 6).map(get))
            pages.forEach(res => items.push(...(res._data as any[])))
        }
        return items
    }

    const [categories, products] = await Promise.all([
        fetchAll('/products/categories', { _fields: 'id,count' }),
        fetchAll('/products', { status: 'publish', _fields: 'slug,date_modified' }),
    ])

    const urls: { loc: string, lastmod?: string, priority: string }[] = [
        { loc: `${site}/`, priority: '1.0' },
        { loc: `${site}/shop`, priority: '0.9' },
        ...categories
            .filter((c: any) => c.count > 0 && !HIDDEN_CATEGORIES.includes(c.id))
            .map((c: any) => ({ loc: `${site}/shop?category=${c.id}`, priority: '0.8' })),
        ...products.map((p: any) => ({
            loc: `${site}/shop/product/${encodeURIComponent(p.slug)}`,
            lastmod: p.date_modified ? String(p.date_modified).slice(0, 10) : undefined,
            priority: '0.7',
        })),
    ]

    const body = urls.map(u =>
        `  <url><loc>${escapeXml(u.loc)}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}<priority>${u.priority}</priority></url>`
    ).join('\n')

    setHeader(event, 'content-type', 'application/xml; charset=utf-8')
    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`
}, {
    maxAge: 60 * 60 * 12,
    name: 'sitemap',
    getKey: () => 'sitemap',
})
