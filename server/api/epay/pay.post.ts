export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const cfg = useRuntimeConfig()

    const base = 'https://woo.gameshopdz.com/wp-json/wc/v3'
    const ck = 'ck_72b4dc376adad9c2bd355b1b9cf448393d83b4e6'
    const cs = 'cs_0b640d5a089e7d9b3b0d7b031b78411a16b68efe'

    if (!base || !ck || !cs) {
        throw createError({ statusCode: 500, statusMessage: "Missing WC config" })
    }


    const auth = Buffer.from(`${ck}:${cs}`).toString("base64")


    if (!body?.items?.length) {
        throw createError({ statusCode: 400, statusMessage: "items required" })
    }
    if (!body?.billing) {
        throw createError({ statusCode: 400, statusMessage: "billing required" })
    }

    const orderPayload = {
        payment_method: "satim_custom",
        payment_method_title: "CIB/EDAHABIA",
        set_paid: false,
        status: "pending",
        billing: body.billing,
        line_items: body.items.map((i: any) => ({
            product_id: Number(i.product_id),
            quantity: Number(i.quantity ?? i.qty ?? 1),
            variation_id: i.variation_id ? Number(i.variation_id) : undefined,
        })),

        note: body.note
    }

    try {
        const order = await $fetch(`${base}/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Basic ${auth}`,
            },
            body: orderPayload,
        })

        if (orderPayload.note && orderPayload.note.trim() !== '') {

            await $fetch(`${base}/orders/${order.id}/notes`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Basic ${auth}`,
                },
                body: {
                    note: orderPayload.note,
                    customer_note: true
                }
            })

        }


        const invoice = await $fetch("https://prodapi.slick-pay.com/api/v2/users/invoices", {
            method: "POST",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer 43504|mk5lfMKyrxTYIGTknWI8oSWxPetHAXjqM0dONr9Z`,
            },
            body: {
                amount: Number(order.total),
                firstname: orderPayload.billing.first_name,
                lastname: orderPayload.billing.last_name,
                email: orderPayload.billing.email,
                phone: orderPayload.billing.phone,
                address: "Algerie",
                items: order.line_items.map((i: any) => ({
                    name: i.name,
                    quantity: Number(i.quantity),
                    price: Number(i.price),
                })),
                url: 'https://gameshopdz.com/payment/result',
                webhook_url: 'https://webhook.gameshopdz.com',
                webhook_signature: `gameshopdz_${order.id}`,
                webhook_meta_data: [
                    {
                        key: "order_id",
                        value: String(order.id),
                    }
                    ]
            },
            timeout: 15000
        })

        return {
            orderId: order.id,
            order,
            invoice,
        }

    } catch (e: any) {

        throw createError({
            statusCode: 502,
            statusMessage: e?.data?.message || e?.message || "WooCommerce order failed",
        })
    }
})
