<script setup lang="ts">

import ShopSidebar from "~/elements/ShopSidebar.vue";
const route = useRoute()
const category = computed(() => route.query.category as string | undefined)
const tag = computed(() => route.query.tag as string | undefined)
const brand = computed(() => route.query.brand as string | undefined)

useHead({
  title: 'Gameshopdz - Leader Gaming Shop en Algérie',
  meta: [
    { name: 'description', content: 'Gameshopdz est le leader des boutiques de jeux vidéo en Algérie, offrant une vaste sélection de jeux, consoles et accessoires pour tous les passionnés de gaming.' },
  ],
})


watch(category, async () => {
  await fetchProducts()
})


watch(tag, async () => {
  await fetchProducts()
})


watch(brand, async () => {
  await fetchProducts()
})



const currentPage = ref(1)
const perPage = ref(12)
const total = ref(0)
const totalPages = ref(0)
const delta = 2

const loading = ref(false)
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

const fetchProducts = async (productIds = []) => {


  try {

    loading.value = true

    const res = await $fetch("/api/wc/products", {
      query: {
        per_page: perPage.value,
        page: currentPage.value,
        category: category.value,
        tag: tag.value,
        brand: brand.value,
        include: productIds.join(','),
        on_sale: route.query.on_sale

      },
    })

    total.value = res.total
    totalPages.value = res.totalPages

    allProducts.value = res.products.map((product: any) => ({
      id: product.id,
      name: product.name,
      slug: product.slug,
      thumbnail: product.images?.[0]?.thumbnail || product.images?.[0]?.src || "",
      price: product.price,
      on_sale: product.on_sale,
      regular_price: product.regular_price,
      stock: product.stock_status,
      occasion: product.categories?.some((c: any) => c.slug === "occasion"),
    }))

  } catch (error) {
    console.error("Error fetching products:", error)
  } finally {
    loading.value = false;
  }
}

const goTo = async (page: number) => {
  loading.value = true
  try {
    if (page < 1 || page > totalPages.value) return
    window.scrollTo({ top: 0, behavior: "smooth" })
    currentPage.value = page
    await fetchProducts()
  }catch (error) {
    console.error("Error fetching products:", error)
  }finally {
    loading.value = false
  }
}


onMounted(async ()=> {

  await fetchProducts()

})



</script>

<template>

  <header class="site-header mo-left header style-2">
    <Header3 />
  </header>




  <div class="page-content bg-light">




    <section class="content-inner-3 pt-3 z-index-unset">
      <div class="container-fluid">
        <div class="row mt-xl-2 mt-0">
          <div class="col-20 col-xl-3">
            <ShopSidebar />
          </div>
          <div class="col-80 col-xl-9">



            <div class="filter-wrapper p-t10">

              <div class="filter-left-area">
<!--                <ul class="filter-tag">-->
<!--                  <li>-->
<!--                    <RouterLink to="" class="tag-btn"-->
<!--                      >Dresses-->
<!--                      <i @click="removeFilter" class="icon feather icon-x tag-close"></i>-->
<!--                    </RouterLink>-->
<!--                  </li>-->
<!--                  <li>-->
<!--                    <RouterLink to="" class="tag-btn"-->
<!--                      >Tops-->
<!--                      <i @click="removeFilter" class="icon feather icon-x tag-close"></i>-->
<!--                    </RouterLink>-->
<!--                  </li>-->
<!--                  <li>-->
<!--                    <RouterLink to="" class="tag-btn"-->
<!--                      >Outerwear-->
<!--                      <i @click="removeFilter" class="icon feather icon-x tag-close"></i>-->
<!--                    </RouterLink>-->
<!--                  </li>-->
<!--                </ul>-->
                <span>Affichage de {{ start }} à {{ end }} sur {{ total }} résultats</span>

              </div>
            </div>


            <div class="row g-4">

              <div class="col-6 col-md-4 col-lg-3   mb-4"
                   v-if="!loading"
                   v-for="product in allProducts"
                   :key="product.id">

                <ProductCard
                    :product="product"
                    :show-stock="true"
                />
              </div>


              <div class="col-6 col-xl-3 col-xxxl-2 col-lg-4 col-md-4   m-md-b15 m-b30" v-for="i in 12"  v-else>

                <ProductCardSkeleton  />

              </div>
            </div>


            <div class="row page mt-0">
              <div class="col-md-6">
                <p class="page-text">Affichage de {{ start }} à {{ end }} sur {{ total }} résultats</p>
              </div>
              <div class="col-md-6">
                <nav aria-label="Blog Pagination">

                  <ul class="pagination style-1">
<!--                    <li class="page-item">-->
<!--                      <a href="#" class="page-link prev"-->
<!--                         :class="{ disabled: currentPage === 1 }"-->
<!--                         @click.prevent="goTo(currentPage - 1)">-->
<!--                        Prev-->
<!--                      </a>-->
<!--                    </li>-->

                    <li v-for="(p, idx) in paginationItems" :key="idx"
                        class="page-item" :class="{ disabled: p === '...' }">
                      <span v-if="p === '...'" class="page-link">…</span>

                      <a v-else href="#" class="page-link"
                         :class="{ active: p === currentPage }"
                         @click.prevent="goTo(Number(p))">
                        {{ p }}
                      </a>
                    </li>

<!--                    <li class="page-item">-->
<!--                      <a href="#" class="page-link next"-->
<!--                         :class="{ disabled: currentPage === totalPages }"-->
<!--                         @click.prevent="goTo(currentPage + 1)">-->
<!--                        Next-->
<!--                      </a>-->
<!--                    </li>-->
                  </ul>

                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
