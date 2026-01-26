export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const config = useRuntimeConfig()
    const ck = 'ck_72b4dc376adad9c2bd355b1b9cf448393d83b4e6'
    const cs = 'cs_0b640d5a089e7d9b3b0d7b031b78411a16b68efe'

    return await $fetch(`${config.wcUrl}/orders`, {
        method: 'POST',
        body,
        headers: {
            Authorization:
                'Basic ' +
                Buffer.from(
                    `${ck}:${cs}`
                ).toString('base64'),
            'Content-Type': 'application/json'
        }
    })
})
