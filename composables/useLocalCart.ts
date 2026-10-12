export const useLocalCart = () => {

    const cart = useState<any[]>('local_cart', () => [])

    const loadCart = () => {
        if (!process.client) return
        cart.value = JSON.parse(localStorage.getItem('cart') || '[]')
    }

    const saveCart = () => {
        if (!process.client) return
        localStorage.setItem('cart', JSON.stringify(cart.value))
    }

    // Each variant is its own cart line. Items saved before variants were
    // supported have no `key`, so fall back to the product id.
    const keyOf = (item: any) => String(item.key ?? item.id)

    type Selection = {
        variation: any            // the matched WooCommerce variation
        options: { attribute: string, value: string }[]  // what the shopper picked
        meta?: { key: string, value: string }[]          // picks the variation leaves open ("any size")
    }

    const addItem = (product: any, quantity = 1, selection: Selection | null = null) => {
        // E-pay / prepay products are paid online on their product page, never via the cart
        if (product.is_epay || product.is_prepay) return

        const variation = selection?.variation
        const key = variation ? `${product.id}:${variation.id}:${selection!.options.map(o => o.value).join('|')}` : String(product.id)
        const item = cart.value.find(i => keyOf(i) === key)

        if (item) {
            item.quantity += quantity
        } else {
            cart.value.push({
                key,
                id: product.id,
                variation_id: variation?.id ?? null,
                type: variation ? 'variation' : product.type,
                variation: selection?.options,
                meta: selection?.meta,
                name: product.name,
                slug: product.slug,
                price: variation?.price || product.price,
                image: variation?.image?.src || product.images?.[0]?.thumbnail || product.thumbnail,
                quantity
            })
        }

        saveCart()
    }

    const removeItem = (key: number | string) => {
        cart.value = cart.value.filter(i => keyOf(i) !== String(key))
        saveCart()
    }

    const updateItem = (key: number | string, quantity: number) => {
        if (quantity <= 0) return removeItem(key)

        const item = cart.value.find(i => keyOf(i) === String(key))
        if (item) item.quantity = quantity

        saveCart()
    }

    const clearCart = () => {
        cart.value = []
        saveCart()
    }

    const itemsCount = computed(() =>
        cart.value.reduce((sum, item) => sum + item.quantity, 0)
    )

    const totalPrice = computed(() =>
        cart.value.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0)
    )

    return {
        cart,
        keyOf,
        loadCart,
        addItem,
        removeItem,
        updateItem,
        clearCart,
        itemsCount,
        totalPrice
    }
}