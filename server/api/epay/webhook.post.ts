// server/api/epay/webhook.post.ts

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const body = await readBody(event)

    const base = 'https://woo.gameshopdz.com/wp-json/wc/v3'
    const ck = 'ck_72b4dc376adad9c2bd355b1b9cf448393d83b4e6'
    const cs = 'cs_0b640d5a089e7d9b3b0d7b031b78411a16b68efe'

    const orderId = body?.meta_data?.webhook_meta_data?.find(
        (item: any) => item.key === 'order_id'
    )?.value

    if (!orderId) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Order ID missing',
        })
    }

    const isPaid = Number(body.pay_status) === 1

    await $fetch(`${base}/orders/${orderId}`, {
        method: 'PUT',
        headers: {
            Authorization:
                'Basic ' +
                Buffer.from(
                    `${ck}:${cs}`
                ).toString('base64'),
        },
        body: {
            status: isPaid ? 'completed' : 'failed',
            set_paid: isPaid,
        },
    })

    return {
        success: true,
        order_id: orderId,
        paid: isPaid,
    }
})