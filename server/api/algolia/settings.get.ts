import { Meilisearch } from 'meilisearch'



export default defineEventHandler(async () => {


    const client = new  Meilisearch({
        host: 'https://search.gameshopdz.com',
        apiKey: '29GXmbUSsbySVyhSovKjiegZ_uMuD10FZr6WY_SAll8',
    })


    const index = client.index('products')
    const task = await index.updateSettings({
        searchableAttributes: [
            'name',
            'slug',
            'sku',
            'categories',
            'tags',
            'brand'
        ],

        filterableAttributes: [
            'in_stock',
            'stock_status',
            'on_sale',
            'categories',
            'tags',
            'brand',
            'price',
            'status'
        ],

        sortableAttributes: [
            'price',
            'created_at_ts',
            'total_sales',
            'rating'
        ],

        rankingRules: [
            'words',
            'typo',
            'proximity',
            'attribute',
            'sort',
            'exactness',
            'in_stock:desc',
            'total_sales:desc'
        ]
    })




    return { ok: true,task}
})