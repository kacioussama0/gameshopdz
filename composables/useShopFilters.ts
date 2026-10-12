// Shop filters live in the URL query so they can be shared, bookmarked and
// survive a reload. Every component reads and writes them through here.

export const SORT_OPTIONS = [
  { value: '', orderby: undefined, order: undefined, label: 'shop.sort.default' },
  { value: 'popularity', orderby: 'popularity', order: undefined, label: 'shop.sort.popularity' },
  { value: 'date', orderby: 'date', order: 'desc', label: 'shop.sort.newest' },
  { value: 'price-asc', orderby: 'price', order: 'asc', label: 'shop.sort.priceAsc' },
  { value: 'price-desc', orderby: 'price', order: 'desc', label: 'shop.sort.priceDesc' },
  { value: 'title-asc', orderby: 'title', order: 'asc', label: 'shop.sort.nameAsc' },
] as const

// Game categories per platform (same ids as the main menu's "Jeux" entries)
export const PLATFORMS = [
  { id: 817, label: 'PS5', icon: 'fa-brands fa-playstation' },
  { id: 816, label: 'PS4', icon: 'fa-brands fa-playstation' },
  { id: 818, label: 'Xbox Series', icon: 'fa-brands fa-xbox' },
  { id: 819, label: 'Xbox One', icon: 'fa-brands fa-xbox' },
  { id: 820, label: 'Switch', icon: 'fa-solid fa-gamepad' },
  { id: 2951, label: 'Switch 2', icon: 'fa-solid fa-gamepad' },
] as const

// "New arrivals" = published in the last N days
export const NEW_ARRIVALS_DAYS = 30

export const PRICE_PRESETS = [
  { min: undefined, max: 5000 },
  { min: 5000, max: 10000 },
  { min: 10000, max: 30000 },
  { min: 30000, max: undefined },
] as const

// Query keys that narrow the product list (as opposed to e.g. sorting)
const FILTER_KEYS = ['category', 'tag', 'brand', 'search', 'include', 'min_price', 'max_price', 'stock_status', 'on_sale', 'new'] as const

const asString = (value: unknown) =>
    (Array.isArray(value) ? value[0] : value) as string | undefined || undefined

export const useShopFilters = () => {
  const route = useRoute()
  const router = useRouter()

  const query = computed(() => ({
    category: asString(route.query.category),
    tag: asString(route.query.tag),
    brand: asString(route.query.brand),
    search: asString(route.query.search),
    include: asString(route.query.include),
    orderby: asString(route.query.orderby),
    order: asString(route.query.order),
    minPrice: asString(route.query.min_price),
    maxPrice: asString(route.query.max_price),
    inStock: route.query.stock_status === 'instock',
    onSale: !!asString(route.query.on_sale),
    newArrivals: !!asString(route.query.new),
  }))

  const sort = computed(() => {
    const { orderby, order } = query.value
    const match = SORT_OPTIONS.find(o =>
        o.orderby === orderby && (o.order === undefined || o.order === (order || 'desc'))
    )
    return match?.value ?? ''
  })

  // Merge a patch into the current query; undefined / '' / false removes a key.
  // Any filter change goes back to the first page.
  const update = (patch: Record<string, string | number | boolean | undefined>) => {
    const next: Record<string, any> = { ...route.query }
    delete next.page
    for (const [key, value] of Object.entries(patch)) {
      if (value === undefined || value === '' || value === false) delete next[key]
      else next[key] = String(value)
    }
    return router.push({ path: '/shop', query: next })
  }

  const setSort = (value: string) => {
    const option = SORT_OPTIONS.find(o => o.value === value) ?? SORT_OPTIONS[0]
    return update({ orderby: option.orderby, order: option.order })
  }

  const setPrice = (min?: number | string, max?: number | string) =>
      update({ min_price: min || undefined, max_price: max || undefined })

  const activeCount = computed(() =>
      FILTER_KEYS.filter(key => key !== 'search' && route.query[key]).length
  )

  const clearAll = () => {
    // Keep the search term and sort order, drop everything that narrows results
    const { search, orderby, order } = query.value
    return router.push({ path: '/shop', query: { search, orderby, order } })
  }

  const page = computed(() => Math.max(1, Number(asString(route.query.page)) || 1))

  const setPage = (value: number) =>
      router.push({ path: '/shop', query: { ...route.query, page: value > 1 ? String(value) : undefined } })

  return { query, sort, update, setSort, setPrice, activeCount, clearAll, page, setPage }
}

// Categories hidden from the shop (uncategorised and internal ones)
export const HIDDEN_CATEGORIES = [29, 3039, 2216]

// WooCommerce returns HTML entities in names ("Cartes &amp; Abonnement")
export const decodeName = (name: string) =>
    String(name || '').replace(/&amp;/g, '&').replace(/&#039;/g, "'").replace(/&quot;/g, '"')

// Shared by the shop page header and the filter sidebar (same request, cached by key)
export const useShopCategories = () => {
  const { data } = useFetch<any[]>('/api/wc/categories', {
    key: 'wc-categories',
    default: () => [],
  })

  const visible = computed(() =>
      (data.value || []).filter(c => !HIDDEN_CATEGORIES.includes(c.id))
  )

  const byId = (id?: string | number) =>
      visible.value.find(c => String(c.id) === String(id))

  const childrenOf = (id: number) =>
      visible.value.filter(c => c.parent === id && c.count > 0)

  return { categories: visible, byId, childrenOf }
}
