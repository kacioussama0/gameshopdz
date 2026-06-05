export const useWcCart = () => {
    const cart = useState<any | null>("wc_cart", () => null)
    const pending = useState("wc_cart_pending", () => false)
    const cartVersion = useState('cart_version', () => 0)

    const itemsCount = computed(() => {
        const items = cart.value?.items || []
        return items.reduce((sum: number, it: any) => sum + (it.quantity || 0), 0)
    })

    const refresh = async () => {
        pending.value = true
        try {
            cart.value = await $fetch("/api/wc/cart")
        } finally {
            pending.value = false
        }
    }

    // ✅ Local helpers
    const ensureCart = () => {
        if (!cart.value) cart.value = { items: [], totals: {} }
    }

    const addLocal = (id: number, quantity: number, variation: any = null) => {
        ensureCart()

        const item = cart.value.items.find((i: any) => {
            const sameId = i.id === id

            const sameVariation =
                JSON.stringify(i.variation || {}) ===
                JSON.stringify(variation || {})

            return sameId && sameVariation
        })

        if (item) {
            item.quantity = (item.quantity || 0) + quantity
        } else {
            cart.value.items.push({
                id,                  // variation ID OR simple product ID
                product_id: id,
                quantity,
                variation
            })
        }
    }
    const updateLocal = (key: string, quantity: number) => {
        ensureCart()
        const item = cart.value.items.find((i: any) => i.key === key)
        if (!item) return
        if (quantity <= 0) cart.value.items = cart.value.items.filter((i: any) => i.key !== key)
        else item.quantity = quantity
    }

    const removeLocal = (key: string) => {
        ensureCart()
        cart.value.items = cart.value.items.filter((i: any) => i.key !== key)
    }


    const addItem = async (id: number, quantity = 1,variation = []) => {
        addLocal(id, quantity,variation)
        try {
            await $fetch("/api/wc/cart/add-item", { method: "POST",  credentials: "include", body: { id, quantity,variation } })
            cartVersion.value++
            await refresh()
        } catch (e) {
            await refresh()
            throw e
        }
    }

    const updateItem = async (key: string, quantity: number) => {
        updateLocal(key, quantity)
        try {
            await $fetch("/api/wc/cart/update", { method: "POST", body: { key, quantity } })
            cartVersion.value++
        } catch (e) {
            await refresh()
            throw e
        }finally {
            await refresh()
        }
    }

    const removeItem = async (key: string) => {
        removeLocal(key)

        try {
            await $fetch("/api/wc/cart/remove-item", {
                method: "POST",
                credentials: "include",
                body: { key }
            })
            cartVersion.value++
            await refresh()
        } catch (e) {
            await refresh()
            throw e
        }
    }


    const clearLocal = () => {
        cart.value = { items: [], totals: {} }
    }



    const clearCart = async () => {
        clearLocal()

        const cartToken = useCookie("wc_cart_token").value
        const wcNonce = useCookie("wc_cart_nonce").value

        try {
            await $fetch("/api/wc/cart/clear-cart", {
                method: "POST",
                headers: {
                    "Cart-Token": cartToken,
                    "X-WC-Store-API-Nonce": wcNonce,
                }
            })
        } catch (e) {
            await refresh()
            throw e
        }

        await refresh()
    }




    return { cart, pending, itemsCount, refresh, addItem,cartVersion, updateItem, removeItem,clearCart }
}
