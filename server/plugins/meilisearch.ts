import { Meilisearch } from 'meilisearch'

export default defineNitroPlugin((nitroApp) => {
    const client = new Meilisearch({
        host: 'https://search.gameshopdz.com',
        apiKey: '29GXmbUSsbySVyhSovKjiegZ_uMuD10FZr6WY_SAll8',
    })

    nitroApp.meili = client
})

declare module 'nitropack' {
    interface NitroApp {
        meili: Meilisearch
    }
}