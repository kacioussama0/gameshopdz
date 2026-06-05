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

    const addItem = (product: any, quantity = 1) => {
        const item = cart.value.find(i => i.id === product.id)

        if (item) {
            item.quantity += quantity
        } else {
            cart.value.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.images?.[0].thumbnail ||product.thumbnail,
                quantity
            })
        }

        saveCart()
    }

    const removeItem = (id: number) => {
        cart.value = cart.value.filter(i => i.id !== id)
        saveCart()
    }

    const updateItem = (id: number, quantity: number) => {
        if (quantity <= 0) return removeItem(id)

        const item = cart.value.find(i => i.id === id)
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
        loadCart,
        addItem,
        removeItem,
        updateItem,
        clearCart,
        itemsCount,
        totalPrice
    }
}