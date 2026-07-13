import { Meilisearch } from 'meilisearch'
import synon from './synon.json'


export default defineEventHandler(async () => {


    const client = new  Meilisearch({
        host: 'https://search.gameshopdz.com',
        apiKey: '29GXmbUSsbySVyhSovKjiegZ_uMuD10FZr6WY_SAll8',
    })


    const index = client.index('products')


    await index.updateSynonyms(synon)




    return { ok: true,synon}
})