<script setup lang="ts">

import ShopSidebar from "~/elements/ShopSidebar.vue";
import {use} from "h3";


const route = useRoute()
const category = computed(() => route.query.category as string | undefined)
const tag = computed(() => route.query.tag as string | undefined)
const brand = computed(() => route.query.brand as string | undefined)

const search = ref("")

useHead({
  title: 'Gameshopdz - Leader Gaming Shop en Algérie',
  meta: [
    { name: 'description', content: 'Gameshopdz est le leader des boutiques de jeux vidéo en Algérie, offrant une vaste sélection de jeux, consoles et accessoires pour tous les passionnés de gaming.' },
  ],
})


const searchProduct = async ()=> {

  const response = useFetch('https://woo.gameshopdz.com/fibosearch/?s=' + search.value)


  const filtredIds = response.data.value.suggestions.filter((product) => {
      return product.type == 'product' && product.post_id != ''
    }).map((product) => {return product.post_id});

  await fetchProducts(filtredIds)
};





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
        include: productIds.join(',')
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
    <!--Banner Start-->
    <CommonBanner :img="bg" name="Home" title="Notre Shop" />
    <!--Banner End-->




    <section class="content-inner-3 pt-3 z-index-unset">
      <div class="container-fluid">
        <div class="row mt-xl-2 mt-0">
          <div class="col-20 col-xl-3">
            <ShopSidebar />
          </div>
          <div class="col-80 col-xl-9">

<!--            <h4 class="mb-3">Category</h4>-->
<!--            <div class="row">-->
<!--              <div class="col-xl-12">-->
<!--                <Swiper-->
<!--                  class="swiper category-swiper"-->
<!--                  :slides-per-view="7"-->
<!--                  :space-between="30"-->
<!--                  :loop="true"-->
<!--                  :modules="[Autoplay]"-->
<!--                  :autoplay="{ delay: 2500 }"-->
<!--                  :breakpoints="{-->
<!--                    1200: { slidesPerView: 7 },-->
<!--                    1440: { slidesPerView: 5 },-->
<!--                    991: { slidesPerView: 4 },-->
<!--                    575: { slidesPerView: 3 },-->
<!--                    240: { slidesPerView: 2 },-->
<!--                  }"-->
<!--                >-->
<!--                  <SwiperSlide class="swiper-slide">-->
<!--                    <div class="shop-card">-->
<!--                      <div class="dz-media rounded">-->
<!--                        <img src="../../assets/images/shop/product/1.png" alt="image" />-->
<!--                      </div>-->
<!--                      <div class="dz-content">-->
<!--                        <h6 class="title"><RouterLink to="/shop-list">SilkBliss Dress</RouterLink></h6>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </SwiperSlide>-->
<!--                  <SwiperSlide class="swiper-slide">-->
<!--                    <div class="shop-card">-->
<!--                      <div class="dz-media rounded">-->
<!--                        <img src="../../assets/images/shop/product/3.png" alt="image" />-->
<!--                      </div>-->
<!--                      <div class="dz-content">-->
<!--                        <h6 class="title"><RouterLink to="/shop-list">GlamPants</RouterLink></h6>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </SwiperSlide>-->
<!--                  <SwiperSlide class="swiper-slide">-->
<!--                    <div class="shop-card">-->
<!--                      <div class="dz-media rounded">-->
<!--                        <img src="../../assets/images/shop/product/4.png" alt="image" />-->
<!--                      </div>-->
<!--                      <div class="dz-content">-->
<!--                        <h6 class="title"><RouterLink to="/shop-list">ComfyLeggings</RouterLink></h6>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </SwiperSlide>-->
<!--                  <SwiperSlide class="swiper-slide">-->
<!--                    <div class="shop-card">-->
<!--                      <div class="dz-media rounded">-->
<!--                        <img src="../../assets/images/shop/product/2.png" alt="image" />-->
<!--                      </div>-->
<!--                      <div class="dz-content">-->
<!--                        <h6 class="title"><RouterLink to="/shop-list">ClassicCapri</RouterLink></h6>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </SwiperSlide>-->
<!--                  <SwiperSlide class="swiper-slide">-->
<!--                    <div class="shop-card">-->
<!--                      <div class="dz-media rounded">-->
<!--                        <img src="../../assets/images/shop/product/3.png" alt="image" />-->
<!--                      </div>-->
<!--                      <div class="dz-content">-->
<!--                        <h6 class="title"><RouterLink to="/shop-list">DapperCoat</RouterLink></h6>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </SwiperSlide>-->
<!--                  <SwiperSlide class="swiper-slide">-->
<!--                    <div class="shop-card">-->
<!--                      <div class="dz-media rounded">-->
<!--                        <img src="../../assets/images/shop/product/4.png" alt="image" />-->
<!--                      </div>-->
<!--                      <div class="dz-content">-->
<!--                        <h6 class="title"><RouterLink to="/shop-list">ComfyLeggings</RouterLink></h6>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </SwiperSlide>-->
<!--                  <SwiperSlide class="swiper-slide">-->
<!--                    <div class="shop-card">-->
<!--                      <div class="dz-media rounded">-->
<!--                        <img src="../../assets/images/shop/product/2.png" alt="image" />-->
<!--                      </div>-->
<!--                      <div class="dz-content">-->
<!--                        <h6 class="title"><RouterLink to="/shop-list">DenimDream Jeans</RouterLink></h6>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </SwiperSlide>-->
<!--                  <SwiperSlide class="swiper-slide">-->
<!--                    <div class="shop-card">-->
<!--                      <div class="dz-media rounded">-->
<!--                        <img src="../../assets/images/shop/product/4.png" alt="image" />-->
<!--                      </div>-->
<!--                      <div class="dz-content">-->
<!--                        <h6 class="title"><RouterLink to="/shop-list">SilkBliss Dress</RouterLink></h6>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </SwiperSlide>-->
<!--                </Swiper>-->
<!--              </div>-->
<!--            </div>-->


            <div class="widget widget_search ">
              <div class="form-group">
                <div class="input-group">
                  <input name="dzSearch" required type="search" @input="searchProduct" v-model="search"  class="form-control" placeholder="Rechercher un produit...." />
                  <div class="input-group-addon">
                    <button name="submit" value="Submit" type="submit" class="btn">
                      <i class="icon feather icon-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>


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





            <div class="row gx-xl-4 gy-3">

              <div class="col-6 col-xl-3 col-xxxl-2 col-lg-4 col-md-4  m-md-b15 m-b30"  v-if="!loading" v-for="product in allProducts">
                <ProductCard :product="product" :show-stock="true"/>
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
