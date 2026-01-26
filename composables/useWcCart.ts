export const useWcCart = () => {
    const cart = useState<any | null>("wc_cart", () => null)
    const pending = useState("wc_cart_pending", () => false)

    const itemsCount = computed(() => {
        const items = cart.value?.items || []
        // Woo store api: كل item فيه quantity
        return items.reduce((sum: number, it: any) => sum + (it.quantity || 0), 0)
    })

    const total = computed(() => cart.value?.totals?.total_price ?? cart.value?.totals?.total ?? null)

    const refresh = async () => {
        pending.value = true
        try {
            cart.value = await $fetch("/api/wc/cart")
        } finally {
            pending.value = false
        }
    }

    const addItem = async (id: number, quantity = 1) => {
        await $fetch("/api/wc/cart/add", { method: "POST", body: { id, quantity } })
        await refresh()
    }

    const updateItem = async (key: string, quantity: number) => {
        await $fetch("/api/wc/cart/update", { method: "POST", body: { key, quantity } })
        await refresh()
    }

    const removeItem = async (key: string) => {
        await $fetch("/api/wc/cart/remove", { method: "POST", body: { key } })
        await refresh()
    }

    return { cart, pending, itemsCount, total, refresh, addItem, updateItem, removeItem }
}
