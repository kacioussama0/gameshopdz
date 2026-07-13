import {Meilisearch} from "meilisearch";

export default defineEventHandler(async (event) => {
    const client = new Meilisearch({
        host: 'https://search.gameshopdz.com',
        apiKey: '29GXmbUSsbySVyhSovKjiegZ_uMuD10FZr6WY_SAll8',
    })

    const { q } = getQuery(event)

    return await client.index('products').search(String(q), {
        limit: 100,
        sort: [
            'created_at_ts:desc',
            'total_sales:desc',
        ],
        filter: [
            'status = publish',
        ]
    })
})