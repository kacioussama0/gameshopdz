<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, onUpdated } from "vue";
import { navigateTo } from "nuxt/app";
import Menu from "@/elements/Menu.vue";



const { $algolia, $aa } = useNuxtApp()
const route = useRoute()

/* ================= STATE ================= */
const suggSearch = ref('')
const suggProducts = ref<any[]>([])
const isLoading = ref(false)
const menu = ref(false);
const { itemsCount, pending } = useWcCart()

const isMenu = ref(false);


const isOpen = ref(false)
const activeIndex = ref(-1)
const recentSearches = ref<string[]>([])

let timeout: ReturnType<typeof setTimeout> | null = null
let currentSearchId = 0
let lastQueryID: string | null = null

/* ================= SEARCH ================= */
watch(suggSearch, (value) => {
  if (timeout) clearTimeout(timeout)

  const term = value.trim()

  if (term.length < 2) {
    suggProducts.value = []
    isOpen.value = false
    return
  }

  timeout = setTimeout(async () => {
    const searchId = ++currentSearchId
    isLoading.value = true

    try {
      const index = $algolia.initIndex('products')

      const res = await index.search(term, {
        hitsPerPage: 8,
        clickAnalytics: true,
      })

      if (searchId !== currentSearchId) return

      const qid = res.queryID || null
      lastQueryID = qid

      if (process.client && qid) {
        localStorage.setItem('algolia:lastQueryID', qid)
        localStorage.setItem('algolia:lastQueryIDAt', String(Date.now()))
      }

      suggProducts.value = (res.hits || []).map(hit => ({
        ...hit,
        __queryID: qid,
      }))

      if (res.hits?.length && qid) {
        $aa('viewedObjectIDsAfterSearch', {
          eventName: 'Autocomplete Viewed',
          index: 'products',
          objectIDs: res.hits.map(h => String(h.objectID)),
          queryID: qid,
        })
      }

      isOpen.value = true

    } catch (err) {
      console.error(err)
    } finally {
      isLoading.value = false
    }

  }, 400)
})

/* ================= CLICK ================= */
function onSuggestionClick(hit: any) {
  if (!hit.__queryID) return

  $aa('clickedObjectIDsAfterSearch', {
    eventName: 'Product Clicked',
    index: 'products',
    objectIDs: [String(hit.objectID)],
    queryID: hit.__queryID,
    positions: [hit.__position]
  })

  localStorage.setItem('algolia:lastQueryID', hit.__queryID)
  localStorage.setItem('algolia:lastQueryIDAt', String(Date.now()))

  navigateTo(`/shop/product/${hit.slug}`)
}

/* ================= SEARCH SUBMIT ================= */
function searchProducts() {
  if (!suggSearch.value.trim()) return

  recentSearches.value = [
    suggSearch.value,
    ...recentSearches.value.filter(s => s !== suggSearch.value)
  ].slice(0, 5)

  localStorage.setItem('recentSearches', JSON.stringify(recentSearches.value))

  navigateTo('/shop?search=' + suggSearch.value)
}

/* ================= KEYBOARD ================= */
function onKeyDown(e: KeyboardEvent) {
  if (!isOpen.value) return

  if (e.key === 'ArrowDown') {
    activeIndex.value = (activeIndex.value + 1) % suggProducts.value.length
  }

  if (e.key === 'ArrowUp') {
    activeIndex.value =
        (activeIndex.value - 1 + suggProducts.value.length) %
        suggProducts.value.length
  }

  if (e.key === 'Enter') {
    if (activeIndex.value >= 0) {
      onSuggestionClick(suggProducts.value[activeIndex.value])
    } else {
      searchProducts()
    }
  }
}

/* ================= HIGHLIGHT ================= */
function highlight(text: string, query: string) {
  if (!query) return text
  const regex = new RegExp(`(${query})`, 'gi')
  return text.replace(regex, '<mark>$1</mark>')
}

/* ================= LIFECYCLE ================= */
onMounted(() => {
  const saved = localStorage.getItem('recentSearches')
  if (saved) recentSearches.value = JSON.parse(saved)

  window.addEventListener("scroll", scrollHandler)
})

onUnmounted(() => {
  window.removeEventListener("scroll", scrollHandler)
})

watch(suggSearch, () => {
  activeIndex.value = -1
})

watch(route, () => {
  const btn = document.querySelector('.navbar-toggler') as HTMLElement | null
  btn?.click()
})

onUpdated(()=> {
  document.body.style.overflow = ""
  document.documentElement.style.overflow = ""
})

/* ================= UI ================= */
const isFixed = ref(false)

onMounted(() => {
  const menus = document.querySelectorAll(".navbar-nav > li");
  menus.forEach(function (el, ind) {
    el.addEventListener("click", function () {
      el.classList.toggle("open");
      menus.forEach(function (ell, index) {
        if (ind !== index) {
          ell.classList.remove("open");
        }
      });
    });
  });
});


function scrollHandler() {
  isFixed.value = window.scrollY > 90
}


</script>

<template>


  <!-- Main Header -->
  <div
    :class="`sticky-header main-bar-wraper navbar-expand-lg ${
      isFixed ? 'is-fixed' : ''
    }`"
  >
    <div class="main-bar  bg-primary gradient clearfix">
      <div class="container  d-flex align-items-center justify-content-between">
        <!-- Website Logo -->
        <div class="logo-header">
          <NuxtLink to="/">
            <img src="../assets/images/logo-white.svg"  alt="logo"/>
          </NuxtLink>
        </div>

        <!-- Nav Toggle Button -->
        <div class="d-flex flex-row-reverse align-items-center">
          <button
              :class="`navbar-toggler rounded-2 collapsed navicon justify-content-end ${
            isMenu ? 'open' : ''
          }`"
              type="button"
              @click="isMenu = !isMenu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <span class="d-md-none d-block">
          <a
              class="nav-link"
              href="#"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasTop"
              aria-controls="offcanvasTop"
          >
                  <i class="iconly-Light-Search text-white"></i>

          </a>
        </span>

        </div>
        <!-- Main Nav -->
        <div
          :class="`header-nav  justify-content-between navbar-collapse  ${
            isMenu ? 'show' : ''
          }`"
          id="navbarNavDropdown"
        >
          <div class="logo-header d-flex">
            <NuxtLink to="/"
              ><img src="../assets/images/logo-white.svg" width="150px" height="90px"
            /></NuxtLink>
          </div>

          <Menu class="w-100 justify-content-center" />
          <div class="dz-social-icon">
            <ul>
              <li>
                <NuxtLink
                  class="fab fa-facebook-f"
                  target="_blank"
                  to="https://web.facebook.com/gameshopdz2"
                ></NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="fab fa-snapchat"
                  target="_blank"
                  to="https://www.snapchat.com/@gameshop.dz?sender_web_id=1626268c-ffd5-4cbb-9b2d-4025523a74d7&device_type=desktop&is_copy_url=true"
                ></NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="fab fa-tiktok"
                  target="_blank"
                  to="https://www.tiktok.com/@gameshop.dz"
                ></NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="fab fa-instagram"
                  target="_blank"
                  to="https://www.instagram.com/gameshop.dz/"
                ></NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <!-- EXTRA NAV -->
        <div class="extra-nav d-none d-lg-flex">
          <div class="extra-cell">
            <ul class="header-right">
              <li class="nav-item search-link">
                <NuxtLink
                  class="nav-link"
                  to="#"
                  @click.prevent
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasTop"
                  aria-controls="offcanvasTop"
                >
                  <i class="iconly-Light-Search text-white"></i>
                </NuxtLink>
              </li>
              <li class="nav-item cart-link ">
                <RouterLink
                    to="?"
                    class="nav-link cart-btn"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                >
                  <i class="iconly-Broken-Buy text-white" ></i>
                  <span class="badge badge-circle"> {{itemsCount}}</span>

                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Main Header End -->
  <!-- SearchBar -->
  <div
    class="dz-search-area py-3 dz-offcanvas offcanvas offcanvas-top"
    tabindex="-1"
    id="offcanvasTop"
    aria-modal="true"
    role="dialog"
  >
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
    >
      ×
    </button>
    <div class="container">
      <form class="header-item-search" @submit.prevent="searchProducts">
        <div class="input-group search-input">
          <input
              type="search"
              class="form-control"
              placeholder="Search PS5, FIFA, GTA..."
              v-model="suggSearch"
              @focus="isOpen = true"
              @keydown="onKeyDown"
          />

          <button class="btn" type="submit">
            🔍
          </button>
        </div>
      </form>

      <!-- LOADING -->
      <div v-if="isLoading">
        <p>Loading...</p>
      </div>

      <!-- RECENT -->
      <div v-if="!suggProducts.length && recentSearches.length">
        <p>Recent:</p>
        <ul>
          <li v-for="s in recentSearches" :key="s" @click="suggSearch = s">
            {{ s }}
          </li>
        </ul>
      </div>

      <!-- EMPTY -->
      <div v-if="!isLoading && suggSearch.length > 2 && !suggProducts.length">
        <p>No results 😢</p>
      </div>

      <!-- RESULTS -->
      <div v-if="suggProducts.length">
        <div
            v-for="(product, index) in suggProducts"
            :key="product.objectID"
            :class="['item', { active: index === activeIndex }]"
            @click="onSuggestionClick(product)"
        >
          <img :src="product.image" width="60" />
          <div>
            <span v-html="highlight(product.name, suggSearch)"></span>
            <p>{{ product.price }} DA</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- SearchBar -->

  <Canvas />
</template>


<style scoped>

.cart-link {
  display: block !important;
}

.shop-card {
  border-radius: 18px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  background: #fff;
}

.shop-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.08);
}

.card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.dz-media {
  aspect-ratio: 1 / 1;
  background: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .3s ease;
}

.shop-card:hover .product-img {
  transform: scale(1.05);
}

.dz-content {
  padding: 12px;
}

.title {
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;  /* يمنع الاسم من تخريب التصميم */
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 36px;
}

.price {
  font-size: 15px;
  font-weight: 700;
  margin-top: 6px;
  color: var(--bs-primary);
}

.navicon {
  background: transparent !important;
}

button.open span {
  background: var(--bs-primary) !important;
}


.item {
  display: flex;
  gap: 10px;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
}

.item:hover {
  background: #f5f5f5;
}

.active {
  background: #e6f0ff;
  border: 1px solid #0d6efd;
}

mark {
  background: #ffe58a;
  padding: 0 2px;
}


</style>