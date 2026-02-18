export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const cfg = useRuntimeConfig()

    const base = 'https://woo.gameshopdz.com/wp-json/wc/v3'
    const ck = 'ck_72b4dc376adad9c2bd355b1b9cf448393d83b4e6'
    const cs = 'cs_0b640d5a089e7d9b3b0d7b031b78411a16b68efe'

    if (!base || !ck || !cs) {
        throw createError({ statusCode: 500, statusMessage: "Missing WC config" })
    }

    // Basic Auth (server-side only)
    const auth = Buffer.from(`${ck}:${cs}`).toString("base64")

    // Minimal validation
    if (!body?.items?.length) {
        throw createError({ statusCode: 400, statusMessage: "items required" })
    }
    if (!body?.billing || !body?.shipping) {
        throw createError({ statusCode: 400, statusMessage: "billing/shipping required" })
    }

    const orderPayload = {
        payment_method: body.payment_method || "cod",
        payment_method_title: body.payment_method_title || "Cash on delivery",
        set_paid: false,
        status: 'processing',
        billing: body.billing,
        shipping: body.shipping,

        line_items: body.items.map((i: any) => ({
            product_id: Number(i.product_id),
            quantity: Number(i.quantity ?? i.qty ?? 1),
            variation_id: i.variation_id ? Number(i.variation_id) : undefined,
        })),

        shipping_lines: [{
            method_id: body.shipping_method.method_id,
            method_title: body.shipping_method.method_title,
            total: String(body.shipping_method.total)
        }],
    }

    try {
        return await $fetch(`${base}/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Basic ${auth}`,
            },
            body: orderPayload,
        })
    } catch (e: any) {

        throw createError({
            statusCode: 502,
            statusMessage: e?.data?.message || e?.message || "WooCommerce order failed",
        })
    }
})
