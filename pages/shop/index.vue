<script setup lang="ts">

import ShopSidebar from "~/elements/ShopSidebar.vue";
import { NEW_ARRIVALS_DAYS, SORT_OPTIONS, decodeName, useShopCategories, useShopFilters } from "~/composables/useShopFilters";

const route = useRoute()
const { t } = useI18n()
const { query, sort, setSort, update, setPrice, activeCount, clearAll, page: currentPage, setPage } = useShopFilters()

/* ---------- page header: where am I? ---------- */
const { byId, childrenOf } = useShopCategories()

const currentCategory = computed(() => byId(query.value.category))
const parentCategory = computed(() =>
    currentCategory.value?.parent ? byId(currentCategory.value.parent) : null
)

// Shown as chips under the title: children of the current category,
// or its siblings when we're already in a sub-category
const subCategories = computed(() => {
  const current = currentCategory.value
  if (!current) return []
  const children = childrenOf(current.id)
  return children.length ? children : (current.parent ? childrenOf(current.parent) : [])
})

const chipsParent = computed(() => {
  const current = currentCategory.value
  if (!current) return null
  return childrenOf(current.id).length ? current : parentCategory.value
})

const pageTitle = computed(() => {
  const q = query.value
  if (q.search) return t('shop.results', { query: q.search })
  if (currentCategory.value) return decodeName(currentCategory.value.name).toLowerCase()
  if (q.onSale) return t('home.promotions')
  if (q.newArrivals) return t('shop.filters.newArrivals', { days: NEW_ARRIVALS_DAYS })
  if (q.tag || q.brand || q.include) return t('shop.filters.collection')
  return t('common.shop')
})

const categoryLink = (id?: number) => {
  const next: Record<string, any> = { ...route.query, category: id ? String(id) : undefined }
  delete next.page
  return { path: '/shop', query: next }
}

/* ---------- SEO ---------- */
const { absolute } = useSiteUrl()

// Category listings are real landing pages; searches, filters and sort orders
// are near-duplicates, so they're kept out of the index (links still followed)
const isIndexable = computed(() => {
  const ignored = ['category', 'page']
  return Object.keys(route.query).every(key => ignored.includes(key) || !route.query[key])
})

const canonicalUrl = computed(() => {
  const params = new URLSearchParams()
  if (query.value.category) params.set('category', query.value.category)
  if (currentPage.value > 1) params.set('page', String(currentPage.value))
  const qs = params.toString()
  return absolute(`/shop${qs ? `?${qs}` : ''}`)
})

const seoTitle = computed(() => pageTitle.value.replace(/^./, c => c.toUpperCase()))

const seoDescription = computed(() =>
    currentCategory.value
        ? t('seo.categoryDescription', { name: decodeName(currentCategory.value.name).toLowerCase() })
        : t('seo.description')
)

useHead({
  link: [{ rel: 'canonical', href: canonicalUrl, key: 'canonical' }],
  meta: [{ name: 'robots', content: () => (isIndexable.value ? 'index, follow' : 'noindex, follow') }],
})

// Shared category links show the category's own picture when WooCommerce has one
const categoryImage = computed(() => currentCategory.value?.image?.src || absolute('/banner.jpg'))

useSeoMeta({
  title: seoTitle,
  description: seoDescription,
  ogImage: categoryImage,
  ogImageAlt: seoTitle,
  twitterImage: categoryImage,
  ogTitle: () => `${seoTitle.value} | Gameshopdz`,
  ogDescription: seoDescription,
  ogUrl: canonicalUrl,
  twitterTitle: seoTitle,
  twitterDescription: seoDescription,
})


const perPage = computed(() => query.value.search ? 48 : 12)

const total = ref(0)
const totalPages = ref(0)
const delta = 2

const loading = ref(true)
const allProducts = ref<any[]>([])

const start = computed(() =>
    total.value ? (currentPage.value - 1) * perPage.value + 1 : 0
)

const end = computed(() => {
  if (!total.value) return 0
  const realEnd = (currentPage.value - 1) * perPage.value + allProducts.value.length
  return Math.min(realEnd, total.value)
})

const paginationItems = computed(() => {
  const pages: (number | string)[] = []
  if (totalPages.value <= 1) return pages

  if (totalPages.value <= 7) {
    return Array.from({ length: totalPages.value }, (_, i) => i + 1)
  }

  const left = Math.max(2, currentPage.value - delta)
  const right = Math.min(totalPages.value - 1, currentPage.value + delta)

  pages.push(1)
  if (left > 2) pages.push("...")

  for (let i = left; i <= right; i++) pages.push(i)

  if (right < totalPages.value - 1) pages.push("...")
  pages.push(totalPages.value)

  return pages
})

// Product ids matching the search term (the search index runs separately from WooCommerce)
let searchIds: number[] = []

const loadSearchIds = async () => {
  searchIds = []
  if (!query.value.search) return

  const res = await $fetch('/api/search', {
    query: { q: query.value.search }
  })

  searchIds = (res.hits || []).map((hit: any) => hit.id)
}

const fetchProducts = async () => {

  try {

    loading.value = true

    const { orderby, order, category, tag, brand, include, minPrice, maxPrice, inStock, onSale, newArrivals, search } = query.value

    // WooCommerce's `after` takes an ISO date; rounded to the day so the cache key stays stable
    const after = newArrivals
        ? new Date(Date.now() - NEW_ARRIVALS_DAYS * 864e5).toISOString().slice(0, 10) + 'T00:00:00'
        : undefined

    // A search with no hits must show "no results", not the whole catalogue
    if (search && !searchIds.length) {
      allProducts.value = []
      total.value = 0
      totalPages.value = 0
      return
    }

    const res = await $fetch("/api/wc/products", {
      query: {
        per_page: perPage.value,
        page: currentPage.value,
        orderby,
        order,
        category,
        tag,
        brand,
        include: search ? searchIds.join(',') : include,
        min_price: minPrice,
        max_price: maxPrice,
        stock_status: inStock ? 'instock' : undefined,
        on_sale: onSale ? 'true' : undefined,
        after,
      },
    })

    total.value = res.total
    totalPages.value = res.totalPages

    allProducts.value = res.products.map((product: any) => ({
      id: product.id,
      name: product.name,
      type: product.type,
      slug: product.slug,
      thumbnail: product.images?.[0]?.thumbnail || product.images?.[0]?.src || "",
      image: product.images?.[0],
      hoverImage: product.images?.[1],
      price: product.price,
      on_sale: product.on_sale,
      categories: product.categories,
      is_epay: product.is_epay,
      is_prepay: product.is_prepay,
      variations: product.variations,
      regular_price: product.regular_price,
      stock: product.stock_status,
      occasion: product.categories?.some((c: any) => c.slug === "occasion"),
    }))

    // In-stock first; the sort is stable so the chosen order is kept within each group
    allProducts.value = allProducts.value.sort((a,b) => a.stock.localeCompare(b.stock)).filter((product: any) => product.type !== "grouped")

  } catch (error) {
    console.error("Error fetching products:", error)
  } finally {
    loading.value = false;
  }
}

// The page lives in the URL (?page=3) so back/forward and refresh keep it
const goTo = (page: number) => {
  if (page < 1 || page > totalPages.value || page === currentPage.value) return
  // Back to the top of the results, not the top of the page
  document.getElementById('shop-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  setPage(page)
}

// Filters, sort, search and page are all in the URL: refetch whenever it changes
watch(() => route.fullPath, async (to, from) => {
  if (route.path !== '/shop') return
  filtersOpen.value = false
  if (new URL(to, 'http://x').searchParams.get('search') !== new URL(from, 'http://x').searchParams.get('search')) {
    await loadSearchIds()
  }
  await fetchProducts()
})

onMounted(async () => {
  await loadSearchIds()
  await fetchProducts()
})

/* ---------- mobile filter drawer ---------- */
const filtersOpen = ref(false)

watch(filtersOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
})

/* ---------- active filter chips ---------- */
const { data: categories } = useNuxtData<any[]>('wc-categories')

const activeChips = computed(() => {
  const q = query.value
  const chips: { key: string, label: string, remove: () => void }[] = []
  const currency = t('common.currency')

  if (q.category) {
    const category = categories.value?.find(c => String(c.id) === q.category)
    const name = category?.name.replace(/&amp;/g, '&').toLowerCase()
    chips.push({ key: 'category', label: name || t('shop.categories'), remove: () => update({ category: undefined }) })
  }
  if (q.tag || q.brand || q.include) {
    chips.push({ key: 'collection', label: t('shop.filters.collection'), remove: () => update({ tag: undefined, brand: undefined, include: undefined }) })
  }
  if (q.minPrice || q.maxPrice) {
    const min = q.minPrice ? Number(q.minPrice).toLocaleString('fr-FR') : '0'
    const max = q.maxPrice ? Number(q.maxPrice).toLocaleString('fr-FR') : '∞'
    chips.push({ key: 'price', label: `${min} – ${max} ${currency}`, remove: () => setPrice() })
  }
  if (q.inStock) {
    chips.push({ key: 'stock', label: t('shop.filters.inStock'), remove: () => update({ stock_status: undefined }) })
  }
  if (q.onSale) {
    chips.push({ key: 'sale', label: t('shop.filters.onSale'), remove: () => update({ on_sale: undefined }) })
  }
  if (q.newArrivals) {
    chips.push({ key: 'new', label: t('shop.filters.newArrivals', { days: NEW_ARRIVALS_DAYS }), remove: () => update({ new: undefined }) })
  }
  return chips
})

</script>

<template>

  <header class="site-header mo-left header style-2">
    <Header3 />
  </header>

  <div class="page-content bg-light">

    <section class="content-inner-3 pt-3 z-index-unset">
      <div class="container-fluid">

        <!-- Where am I -->
        <div class="shop-head">
          <nav :aria-label="$t('breadcrumb.label')" class="gs-breadcrumb">
            <ol>
              <li>
                <NuxtLink to="/"><i class="iconly-Curved-Home" aria-hidden="true"></i><span>{{ $t('common.home') }}</span></NuxtLink>
              </li>
              <li v-if="currentCategory || query.search || activeCount">
                <NuxtLink to="/shop">{{ $t('common.shop') }}</NuxtLink>
              </li>
              <li v-if="parentCategory">
                <NuxtLink :to="categoryLink(parentCategory.id)" class="text-capitalize">{{ decodeName(parentCategory.name).toLowerCase() }}</NuxtLink>
              </li>
              <li aria-current="page" class="text-capitalize">{{ pageTitle }}</li>
            </ol>
          </nav>

          <div class="head-row">
            <h1 class="shop-title">{{ pageTitle }}</h1>
            <span v-if="total && !loading" class="shop-count">{{ $t('shop.productsCount', { count: total.toLocaleString('fr-FR') }, total) }}</span>
          </div>

          <!-- Sub-categories -->
          <div v-if="subCategories.length" class="subcats" role="list">
            <NuxtLink
                v-if="chipsParent"
                :to="categoryLink(chipsParent.id)"
                class="subcat"
                :class="{ active: currentCategory?.id === chipsParent.id }"
                role="listitem"
            >
              {{ $t('shop.allIn') }}
            </NuxtLink>
            <NuxtLink
                v-for="sub in subCategories"
                :key="sub.id"
                :to="categoryLink(sub.id)"
                class="subcat"
                :class="{ active: currentCategory?.id === sub.id }"
                role="listitem"
            >
              <span class="text-capitalize">{{ decodeName(sub.name).toLowerCase() }}</span>
              <span class="subcat-count">{{ sub.count }}</span>
            </NuxtLink>
          </div>
        </div>

        <div class="row gx-4 gy-0">

          <!-- Filters: sticky column on desktop, slide-in drawer below xl -->
          <div class="col-xl-3">
            <div class="filters-backdrop d-xl-none" :class="{ open: filtersOpen }" @click="filtersOpen = false"></div>

            <div class="filters-panel" :class="{ open: filtersOpen }">
              <ShopSidebar @close="filtersOpen = false" />

              <button type="button" class="btn btn-secondary new-gradient rounded-pill w-100 mt-3 d-xl-none" @click="filtersOpen = false">
                {{ $t('shop.filters.showResults', { count: total }) }}
              </button>
            </div>
          </div>

          <div class="col-12 col-xl-9">

            <!-- Toolbar -->
            <div class="shop-toolbar">
              <button type="button" class="btn filter-toggle d-xl-none" @click="filtersOpen = true">
                <i class="flaticon-filter"></i>
                {{ $t('shop.filter') }}
                <span v-if="activeCount" class="count">{{ activeCount }}</span>
              </button>

              <label class="sort-select">
                <span class="d-none d-sm-inline">{{ $t('shop.sort.label') }}</span>
                <select class="form-select" :value="sort" @change="setSort(($event.target as HTMLSelectElement).value)">
                  <option v-for="option in SORT_OPTIONS" :key="option.value" :value="option.value">
                    {{ $t(option.label) }}
                  </option>
                </select>
              </label>
            </div>

            <!-- Active filters -->
            <div class="active-filters" v-if="activeChips.length">
              <button
                  v-for="chip in activeChips"
                  :key="chip.key"
                  type="button"
                  class="active-chip"
                  :aria-label="$t('shop.filters.remove', { name: chip.label })"
                  @click="chip.remove()"
              >
                {{ chip.label }}
                <i class="fa-solid fa-xmark"></i>
              </button>

              <button type="button" class="clear-all" @click="clearAll">
                {{ $t('shop.filters.clearAll') }}
              </button>
            </div>

            <div id="shop-results" class="row g-3 g-md-4" v-if="loading || allProducts.length">

              <template v-if="!loading">
                <div class="col-6 col-md-4 col-lg-3" v-for="product in allProducts" :key="product.id">
                  <ProductCard :product="product" :show-stock="true" />
                </div>
              </template>

              <template v-else>
                <div class="col-6 col-md-4 col-lg-3" v-for="i in 8" :key="i">
                  <ProductCardSkeleton />
                </div>
              </template>
            </div>

            <div class="card empty-state" v-else>
              <div class="card-body text-center py-5">
                <AstroBot mood="search" :size="140" class="mb-3" />

                <h4>{{ $t('shop.noProducts') }}</h4>

                <p class="text-muted mb-4">
                  {{ activeCount ? $t('shop.filters.noResultsHint') : $t('shop.noProductsHint') }}
                </p>

                <button v-if="activeCount" type="button" class="btn btn-outline-primary rounded-pill me-2 mb-2" @click="clearAll">
                  {{ $t('shop.filters.clearAll') }}
                </button>

                <NuxtLink to="/shop" class="btn btn-primary new-gradient rounded-pill mb-2">
                  {{ $t('common.seeAllProducts') }}
                </NuxtLink>
              </div>
            </div>

            <p v-if="!loading && allProducts.length" class="range-text">{{ $t('shop.showing', { start, end, total }) }}</p>

            <nav class="shop-pagination" v-if="!loading && paginationItems.length" :aria-label="$t('shop.pagination')">
              <button
                  type="button"
                  class="page-btn page-arrow"
                  :disabled="currentPage <= 1"
                  :aria-label="$t('shop.prevPage')"
                  @click="goTo(currentPage - 1)"
              >
                <i class="fa-solid fa-chevron-left"></i>
              </button>

              <ul class="page-list">
                <li v-for="(p, idx) in paginationItems" :key="idx">
                  <span v-if="p === '...'" class="page-gap" aria-hidden="true">…</span>

                  <button
                      v-else
                      type="button"
                      class="page-btn"
                      :class="{ active: p === currentPage }"
                      :aria-current="p === currentPage ? 'page' : undefined"
                      :aria-label="$t('shop.goToPage', { page: p })"
                      @click="goTo(Number(p))"
                  >
                    {{ p }}
                  </button>
                </li>
              </ul>

              <span class="page-status">{{ $t('shop.pageOf', { page: currentPage, total: totalPages }) }}</span>

              <button
                  type="button"
                  class="page-btn page-arrow"
                  :disabled="currentPage >= totalPages"
                  :aria-label="$t('shop.nextPage')"
                  @click="goTo(currentPage + 1)"
              >
                <i class="fa-solid fa-chevron-right"></i>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ---------- page header ---------- */
.shop-head {
  margin-bottom: 20px;
}

.head-row {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 4px 14px;
  margin-top: 10px;
}

.shop-title {
  margin: 0;
  font-size: clamp(24px, 3vw, 34px);
  text-transform: capitalize;
}

.shop-count {
  color: #6b7390;
  font-size: 15px;
}

/* Horizontal chip rail: scrolls on phones instead of wrapping */
.subcats {
  display: flex;
  gap: 8px;
  margin-top: 14px;
  padding-bottom: 4px;
  overflow-x: auto;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
}

.subcats::-webkit-scrollbar {
  display: none;
}

.subcat {
  flex: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border: 1px solid #e1e5ef;
  border-radius: 999px;
  background: #fff;
  color: var(--gs-ink, #0F1E4A);
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  transition: all .15s ease;
}

.subcat:hover {
  border-color: var(--gs-primary, #0A63D8);
  color: var(--gs-primary, #0A63D8);
}

.subcat.active {
  border-color: transparent;
  background: var(--gs-gradient);
  color: #fff;
}

.subcat-count {
  padding: 0 7px;
  border-radius: 999px;
  background: rgba(15, 30, 74, .07);
  font-size: 11.5px;
  font-weight: 700;
}

.subcat.active .subcat-count {
  background: rgba(255, 255, 255, .2);
}

#shop-results {
  scroll-margin-top: 150px;
}

.range-text {
  margin: 28px 0 0;
  color: #6b7390;
  font-size: 13px;
  text-align: center;
}

/* ---------- filters panel ---------- */
@media (min-width: 1200px) {
  .filters-panel {
    position: sticky;
    top: 90px;
    max-height: calc(100vh - 110px);
    overflow-y: auto;
    scrollbar-width: thin;
  }
}

@media (max-width: 1199.98px) {
  .filters-panel {
    position: fixed;
    top: 0;
    bottom: 0;
    inset-inline-start: 0;
    z-index: 10050;
    width: min(360px, 90vw);
    padding: 12px;
    overflow-y: auto;
    background: #f6f7fb;
    box-shadow: 0 0 40px rgba(15, 30, 74, .25);
    transform: translateX(-105%);
    visibility: hidden;
    transition: transform .3s ease, visibility .3s;
  }

  :global([dir="rtl"] .filters-panel) {
    transform: translateX(105%);
  }

  .filters-panel.open,
  :global([dir="rtl"] .filters-panel.open) {
    transform: none;
    visibility: visible;
  }

  .filters-backdrop {
    position: fixed;
    inset: 0;
    z-index: 10049;
    background: rgba(15, 30, 74, .45);
    opacity: 0;
    pointer-events: none;
    transition: opacity .3s ease;
  }

  .filters-backdrop.open {
    opacity: 1;
    pointer-events: auto;
  }
}

/* ---------- toolbar ---------- */
.shop-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px 16px;
  margin-bottom: 14px;
}

.filter-toggle {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid rgba(10, 99, 216, 0.2);
  border-radius: 999px;
  background: #fff;
  color: var(--secondary, #0F1E4A);
  font-size: 14px;
  font-weight: 600;
}

.count {
  display: grid;
  place-items: center;
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  border-radius: 999px;
  background: linear-gradient(135deg, #0f2f6d, #164094, #6a3df0);
  color: #fff;
  font-size: 11px;
}

.results-count {
  color: #6b7390;
  font-size: 13px;
}

.sort-select {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  margin-inline-start: auto;
  color: #6b7390;
  font-size: 13px;
  white-space: nowrap;
}

.sort-select .form-select {
  width: auto;
  min-width: 170px;
  height: 40px;
  padding-block: 6px;
  border-radius: 999px;
  font-size: 14px;
  color: var(--secondary, #0F1E4A);
}

/* Bootstrap's select arrow is drawn on the right; move it for Arabic */
:global([dir="rtl"] .sort-select .form-select) {
  padding-left: 2.25rem;
  padding-right: .75rem;
  background-position: left .75rem center;
}

@media (max-width: 575.98px) {
  .results-count {
    order: 3;
    width: 100%;
  }

  .sort-select .form-select {
    min-width: 0;
    max-width: 52vw;
  }
}

/* ---------- active filter chips ---------- */
.active-filters {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}

.active-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 12px;
  border: 0;
  border-radius: 999px;
  background: rgba(10, 99, 216, 0.1);
  color: var(--primary, #0A63D8);
  font-size: 13px;
  font-weight: 600;
  text-transform: capitalize;
}

.active-chip:hover {
  background: rgba(10, 99, 216, 0.18);
}

.clear-all {
  border: 0;
  background: none;
  color: #6b7390;
  font-size: 13px;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.empty-state {
  border-radius: 16px;
}

/* ---------- pagination ---------- */
.shop-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 12px;
}

.page-list {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.page-btn {
  display: grid;
  place-items: center;
  min-width: 42px;
  height: 42px;
  padding: 0 10px;
  border: 1px solid #e1e5ef;
  border-radius: 12px;
  background: #fff;
  color: var(--secondary, #0F1E4A);
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  transition: all .15s ease;
}

.page-btn:hover:not(:disabled):not(.active) {
  border-color: var(--primary, #0A63D8);
  color: var(--primary, #0A63D8);
}

.page-btn.active {
  border-color: transparent;
  background: linear-gradient(135deg, #0f2f6d, #164094, #6a3df0);
  color: #fff;
  box-shadow: 0 6px 14px rgba(106, 61, 240, .3);
}

.page-btn:disabled {
  opacity: .4;
  cursor: not-allowed;
}

/* Arrows point the reading direction */
:global([dir="rtl"] .shop-pagination .page-arrow i) {
  transform: scaleX(-1);
}

.page-gap {
  padding: 0 4px;
  color: #9aa1b5;
}

.page-status {
  display: none;
  color: #6b7390;
  font-size: 14px;
  font-weight: 600;
}

/* Phones: arrows + "Page 3 / 249" instead of the full list */
@media (max-width: 575.98px) {
  .page-list {
    display: none;
  }

  .page-status {
    display: block;
    padding: 0 12px;
  }

  .page-arrow {
    min-width: 48px;
    height: 48px;
  }
}
</style>
