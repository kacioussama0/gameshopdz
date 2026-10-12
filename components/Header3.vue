<script setup lang="ts">
import Menu from "@/elements/Menu.vue";
import { useLocalCart } from "~/composables/useLocalCart";
import { PLATFORMS } from "~/composables/useShopFilters";

const route = useRoute()
const router = useRouter()
const { t } = useI18n()
const { itemsCount } = useLocalCart()

/* ================= MOBILE DRAWER ================= */
const isMenu = ref(false)

const closeMenu = () => (isMenu.value = false)

watch(isMenu, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

/* ================= SEARCH ================= */
const searchBox = ref<HTMLElement | null>(null)
const searchInput = ref<HTMLInputElement | null>(null)

const term = ref('')
const results = ref<any[]>([])
const isLoading = ref(false)
const isOpen = ref(false)
const activeIndex = ref(-1)
const recentSearches = ref<string[]>([])

const MAX_RESULTS = 6
let debounce: ReturnType<typeof setTimeout> | null = null
let requestId = 0

const trimmed = computed(() => term.value.trim())

watch(term, (value) => {
  activeIndex.value = -1
  if (debounce) clearTimeout(debounce)

  const q = value.trim()
  if (q.length < 2) {
    results.value = []
    isLoading.value = false
    return
  }

  isLoading.value = true
  debounce = setTimeout(async () => {
    // Only the latest request may update the list
    const id = ++requestId
    try {
      const res: any = await $fetch('/api/search', { query: { q } })
      if (id !== requestId) return
      results.value = (res.hits || []).slice(0, MAX_RESULTS)
    } catch (err) {
      console.error(err)
      if (id === requestId) results.value = []
    } finally {
      if (id === requestId) isLoading.value = false
    }
  }, 300)
})

const saveRecent = (q: string) => {
  recentSearches.value = [q, ...recentSearches.value.filter(s => s !== q)].slice(0, 5)
  try {
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches.value))
  } catch {}
}

const clearRecent = () => {
  recentSearches.value = []
  try {
    localStorage.removeItem('recentSearches')
  } catch {}
}

const closeSearch = () => {
  isOpen.value = false
  activeIndex.value = -1
}

// Phones: the search opens as a full-screen sheet (room for results above the keyboard)
const isPhone = () => import.meta.client && window.matchMedia('(max-width: 991.98px)').matches
const sheetOpen = computed(() => isOpen.value && isPhone())

watch(isOpen, (open) => {
  if (!isPhone()) return
  document.body.style.overflow = open || isMenu.value ? 'hidden' : ''
})

const leaveSearch = () => {
  closeSearch()
  searchInput.value?.blur()
}

const goToSearch = (q = trimmed.value) => {
  if (!q) return
  saveRecent(q)
  closeSearch()
  searchInput.value?.blur()
  router.push({ path: '/shop', query: { search: q } })
}

const goToProduct = (hit: any) => {
  closeSearch()
  searchInput.value?.blur()
  router.push(`/shop/product/${hit.slug}`)
}

const clearTerm = () => {
  term.value = ''
  searchInput.value?.focus()
}

function onKeyDown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    closeSearch()
    searchInput.value?.blur()
    return
  }

  if (!results.value.length) return

  if (e.key === 'ArrowDown') {
    e.preventDefault()
    isOpen.value = true
    activeIndex.value = (activeIndex.value + 1) % results.value.length
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    activeIndex.value = (activeIndex.value - 1 + results.value.length) % results.value.length
  } else if (e.key === 'Enter' && activeIndex.value >= 0) {
    e.preventDefault()
    goToProduct(results.value[activeIndex.value])
  }
}

// Escape the product name first, then wrap the matched query: v-html stays safe
const escapeHtml = (text: string) =>
    text.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!))

function highlight(text: string, query: string) {
  const safe = escapeHtml(text || '')
  const q = escapeHtml(query).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return q ? safe.replace(new RegExp(`(${q})`, 'gi'), '<mark>$1</mark>') : safe
}

const formatPrice = (value: number | string) =>
    `${Number(value).toLocaleString('fr-FR')} ${t('common.currency')}`

const onClickOutside = (e: MouseEvent) => {
  // the phone sheet covers the screen: only its back button closes it
  if (sheetOpen.value) return
  if (searchBox.value && !searchBox.value.contains(e.target as Node)) closeSearch()
}

const onEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isMenu.value) closeMenu()
}

/* ================= LIFECYCLE ================= */
const isScrolled = ref(false)
const onScroll = () => (isScrolled.value = window.scrollY > 10)

// Mobile drawer: tapping a top-level item expands its sub-menu (theme accordion)
const onNavClick = (e: MouseEvent) => {
  if (!window.matchMedia('(max-width: 991.98px)').matches) return
  const item = (e.target as HTMLElement).closest('.navbar-nav > li')
  if (!item || (e.target as HTMLElement).closest('.mega-menu')) return
  item.parentElement?.querySelectorAll(':scope > li.open').forEach(li => li !== item && li.classList.remove('open'))
  item.classList.toggle('open')
}

// The mobile bottom bar's search button
const onOpenSearch = () => {
  closeMenu()
  isOpen.value = true
  searchInput.value?.focus()
}

onMounted(() => {
  try {
    const saved = localStorage.getItem('recentSearches')
    if (saved) recentSearches.value = JSON.parse(saved)
  } catch {}

  document.addEventListener('click', onClickOutside)
  document.addEventListener('keydown', onEscape)
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('gs:open-search', onOpenSearch)
  onScroll()
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onClickOutside)
  document.removeEventListener('keydown', onEscape)
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('gs:open-search', onOpenSearch)
  document.body.style.overflow = ''
})

// Navigating anywhere closes the drawer and the search dropdown
watch(() => route.fullPath, () => {
  closeMenu()
  closeSearch()
  if (route.path === '/shop' && route.query.search) term.value = String(route.query.search)
})
</script>

<template>
  <div class="gs-header" :class="{ 'is-scrolled': isScrolled }">

    <!-- Top bar: logo · search · actions -->
    <div class="gs-topbar new-gradient">
      <div class="container gs-topbar-inner">
        <button type="button" class="icon-btn menu-btn d-lg-none" :aria-label="$t('header.menu')" :aria-expanded="isMenu" @click="isMenu = true">
          <i class="fa-solid fa-bars"></i>
        </button>

        <NuxtLink to="/" class="gs-logo" aria-label="Gameshop">
          <img src="../assets/images/logo-white.svg" alt="Gameshop" width="150" height="45" />
        </NuxtLink>

        <!-- Search -->
        <div class="gs-search" :class="{ 'sheet-open': isOpen }" ref="searchBox">
          <div class="sheet-bar">
          <button type="button" class="sheet-back" :aria-label="$t('common.close')" @click="leaveSearch">
            <i class="fa-solid fa-arrow-left flip-rtl"></i>
          </button>
          <form role="search" class="search-field" :class="{ focused: isOpen }" @submit.prevent="goToSearch()">
            <i class="iconly-Light-Search search-icon" aria-hidden="true"></i>
            <input
                ref="searchInput"
                v-model="term"
                type="search"
                name="search"
                autocomplete="off"
                enterkeyhint="search"
                :placeholder="$t('header.searchPlaceholder')"
                :aria-label="$t('header.searchLabel')"
                aria-controls="gs-search-panel"
                :aria-expanded="isOpen"
                :aria-activedescendant="activeIndex >= 0 ? `gs-hit-${activeIndex}` : undefined"
                @focus="isOpen = true"
                @keydown="onKeyDown"
            />
            <span v-if="isLoading" class="spinner-border spinner-border-sm search-spinner" aria-hidden="true"></span>
            <button v-else-if="term" type="button" class="clear-btn" :aria-label="$t('header.clear')" @click="clearTerm">
              <i class="fa-solid fa-xmark"></i>
            </button>
            <button type="submit" class="submit-btn">{{ $t('header.searchButton') }}</button>
          </form>
          </div>

          <!-- Suggestions -->
          <div v-show="isOpen" id="gs-search-panel" class="search-panel" role="listbox">

            <!-- Before typing: recent searches + quick platform links -->
            <template v-if="trimmed.length < 2">
              <div v-if="recentSearches.length" class="panel-section">
                <div class="panel-head">
                  <span>{{ $t('header.recent') }}</span>
                  <button type="button" class="link-btn" @click="clearRecent">{{ $t('header.clear') }}</button>
                </div>
                <div class="chip-row">
                  <button v-for="s in recentSearches" :key="s" type="button" class="chip" @click="goToSearch(s)">
                    <i class="fa-solid fa-clock-rotate-left"></i>{{ s }}
                  </button>
                </div>
              </div>

              <div class="panel-section">
                <div class="panel-head"><span>{{ $t('header.trending') }}</span></div>
                <div class="chip-row">
                  <NuxtLink v-for="platform in PLATFORMS" :key="platform.id" :to="`/shop?category=${platform.id}`" class="chip" @click="closeSearch">
                    <i :class="platform.icon"></i>{{ platform.label }}
                  </NuxtLink>
                  <NuxtLink to="/shop?on_sale=true" class="chip" @click="closeSearch">
                    <i class="fa-solid fa-percent"></i>{{ $t('home.promotions') }}
                  </NuxtLink>
                </div>
              </div>
            </template>

            <!-- Results -->
            <template v-else>
              <ul v-if="results.length" class="hit-list">
                <li
                    v-for="(hit, index) in results"
                    :id="`gs-hit-${index}`"
                    :key="hit.objectID || hit.id"
                    role="option"
                    :aria-selected="index === activeIndex"
                    class="hit"
                    :class="{ active: index === activeIndex }"
                    @mouseenter="activeIndex = index"
                    @click="goToProduct(hit)"
                >
                  <img :src="hit.image" :alt="hit.name" width="56" height="56" loading="lazy" />
                  <span class="hit-name" v-html="highlight(hit.name, trimmed)"></span>
                  <span class="hit-price" v-if="hit.price">{{ formatPrice(hit.price) }}</span>
                </li>
              </ul>

              <div v-else-if="!isLoading" class="no-results">
                <AstroBot mood="search" :size="70" />
                <span>{{ $t('header.noResults') }}</span>
              </div>

              <button type="button" class="see-all" @click="goToSearch()">
                {{ $t('header.seeAll', { query: trimmed }) }}
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </template>
          </div>
        </div>

        <!-- Actions -->
        <div class="gs-actions">
          <!-- Phones: a loupe instead of the search bar, opens the full-screen search -->
          <button type="button" class="action search-action d-lg-none" :aria-label="$t('header.searchLabel')" @click="onOpenSearch">
            <i class="iconly-Curved-Search"></i>
          </button>

          <LanguageSwitcher class="action-lang" />

          <a href="tel:+213550779973" class="action d-none d-xl-flex">
            <i class="iconly-Curved-Call"></i>
            <span class="action-text">
              <small>{{ $t('header.help') }}</small>
              <b dir="ltr">0550 77 99 73</b>
            </span>
          </a>

          <button
              type="button"
              class="action cart-action"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
              :aria-label="$t('bottomNav.cart')"
          >
            <span class="cart-icon">
              <i class="iconly-Curved-Buy"></i>
              <span v-if="itemsCount > 0" class="cart-badge">{{ itemsCount > 99 ? '99+' : itemsCount }}</span>
            </span>
            <span class="action-text d-none d-lg-flex">
              <small>{{ $t('header.myCart') }}</small>
              <b>{{ $t('bottomNav.cart') }}</b>
            </span>
          </button>
        </div>
      </div>
    </div>

    <!-- Category row on desktop · slide-in drawer on mobile -->
    <div class="gs-navrow">
      <div class="drawer-backdrop d-lg-none" :class="{ open: isMenu }" @click="closeMenu"></div>

      <div class="container gs-navrow-inner">
        <nav
            class="header-nav navbar-collapse gs-nav"
            :class="{ show: isMenu }"
            :aria-label="$t('header.menu')"
            @click="onNavClick"
        >
          <div class="drawer-head d-lg-none">
            <NuxtLink to="/" class="drawer-logo" @click="closeMenu">
              <img src="../assets/images/logo-white.svg" alt="Gameshop" width="130" height="40" />
            </NuxtLink>
            <button type="button" class="icon-btn" :aria-label="$t('common.close')" @click.stop="closeMenu">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>

          <!-- Shortcuts -->
          <div class="drawer-quick d-lg-none">
            <NuxtLink to="/shop?on_sale=true" class="quick-chip" @click="closeMenu">
              <i class="fa-solid fa-percent"></i>{{ $t('home.promotions') }}
            </NuxtLink>
            <NuxtLink to="/shop?new=1" class="quick-chip" @click="closeMenu">
              <i class="fa-solid fa-star"></i>{{ $t('home.ctaNew') }}
            </NuxtLink>
            <NuxtLink to="/shop" class="quick-chip" @click="closeMenu">
              <i class="fa-solid fa-store"></i>{{ $t('common.seeAllProducts') }}
            </NuxtLink>
          </div>

          <p class="drawer-label d-lg-none">{{ $t('header.categories') }}</p>

          <Menu />

          <div class="drawer-foot d-lg-none">
            <div class="drawer-row">
              <LanguageSwitcher class="drawer-lang" />
              <button
                  type="button"
                  class="drawer-cart"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                  @click="closeMenu"
              >
                <i class="iconly-Curved-Buy"></i>
                {{ $t('bottomNav.cart') }}
                <span v-if="itemsCount > 0" class="drawer-cart-count">{{ itemsCount }}</span>
              </button>
            </div>
            <a href="tel:+213550779973" class="drawer-link">
              <i class="iconly-Curved-Call"></i>
              <span>{{ $t('header.help') }} <b dir="ltr">0550 77 99 73</b></span>
            </a>
            <a href="https://wa.me/213550779973" target="_blank" rel="noopener" class="drawer-link">
              <i class="fa-brands fa-whatsapp"></i>
              <span>{{ $t('footer.whatsapp') }}</span>
            </a>
            <div class="drawer-socials">
              <a href="https://web.facebook.com/gameshopdz2" target="_blank" rel="noopener" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/gameshop.dz/" target="_blank" rel="noopener" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
              <a href="https://www.tiktok.com/@gameshop.dz" target="_blank" rel="noopener" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
              <a href="https://www.snapchat.com/@gameshop.dz" target="_blank" rel="noopener" aria-label="Snapchat"><i class="fab fa-snapchat"></i></a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>

  <Canvas />
</template>

<style>
/* The pages wrap this component in <header class="site-header">: make that the sticky element */
header.site-header {
  position: sticky;
  top: 0;
  z-index: 1030;
}
</style>

<style scoped>
/* ================= TOP BAR ================= */
.gs-topbar {
  color: #fff;
  transition: box-shadow .2s ease;
}

.is-scrolled .gs-topbar {
  box-shadow: 0 6px 20px rgba(15, 30, 74, .25);
}

.gs-topbar-inner {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  grid-template-areas: "logo search actions";
  align-items: center;
  gap: 24px;
  padding-block: 12px;
}

.gs-logo { grid-area: logo; }
.gs-search { grid-area: search; }
.gs-actions { grid-area: actions; }

.gs-logo img {
  display: block;
  height: 44px;
  width: auto;
}

.icon-btn {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border: 0;
  border-radius: 12px;
  background: rgba(255, 255, 255, .12);
  color: #fff;
  font-size: 18px;
}

/* ================= SEARCH ================= */
.sheet-bar {
  display: flex;
  align-items: center;
  gap: 8px;
}

.sheet-bar .search-field {
  flex: 1;
  min-width: 0;
}

.sheet-back {
  display: none;
}

:global([dir="rtl"] .gs-header .flip-rtl) {
  transform: scaleX(-1);
}

.gs-search {
  position: relative;
  max-width: 720px;
  width: 100%;
  justify-self: center;
}

.search-field {
  display: flex;
  align-items: center;
  height: 48px;
  padding-inline: 16px 5px;
  border-radius: 999px;
  background: #fff;
  box-shadow: 0 2px 10px rgba(15, 30, 74, .12);
  transition: box-shadow .2s ease;
}

.search-field.focused {
  box-shadow: 0 0 0 3px rgba(255, 255, 255, .35), 0 8px 24px rgba(15, 30, 74, .2);
}

.search-icon {
  font-size: 18px;
  color: #6b7390;
}

.search-field input {
  flex: 1;
  min-width: 0;
  height: 100%;
  padding-inline: 12px;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--gs-ink, #0F1E4A);
  font-size: 15px;
}

.search-field input::-webkit-search-cancel-button {
  display: none;
}

.search-spinner {
  margin-inline: 10px;
  color: var(--gs-primary, #0A63D8);
}

.clear-btn {
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  margin-inline-end: 6px;
  border: 0;
  border-radius: 50%;
  background: #eef1f7;
  color: #6b7390;
}

.submit-btn {
  height: 38px;
  padding: 0 20px;
  border: 0;
  border-radius: 999px;
  background: var(--gs-gradient, linear-gradient(135deg, #0f2f6d, #164094, #6a3df0));
  color: #fff;
  font-size: 14px;
  font-weight: 700;
}

.search-panel {
  position: absolute;
  top: calc(100% + 8px);
  inset-inline: 0;
  z-index: 1040;
  max-height: min(70vh, 560px);
  overflow-y: auto;
  padding: 14px;
  border-radius: 18px;
  background: #fff;
  color: var(--gs-ink, #0F1E4A);
  box-shadow: 0 20px 50px rgba(15, 30, 74, .25);
}

.panel-section + .panel-section {
  margin-top: 14px;
}

.panel-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  color: #6b7390;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .04em;
}

.link-btn {
  border: 0;
  background: none;
  color: var(--gs-primary, #0A63D8);
  font-size: 12px;
  font-weight: 600;
  text-transform: none;
}

.chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border: 1px solid #e1e5ef;
  border-radius: 999px;
  background: #fff;
  color: var(--gs-ink, #0F1E4A);
  font-size: 13px;
}

.chip:hover {
  border-color: var(--gs-primary, #0A63D8);
  color: var(--gs-primary, #0A63D8);
}

.chip i {
  color: #6b7390;
  font-size: 12px;
}

.hit-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.hit {
  display: grid;
  grid-template-columns: 56px 1fr auto;
  align-items: center;
  gap: 12px;
  padding: 8px;
  border-radius: 12px;
  cursor: pointer;
}

.hit.active {
  background: #f1f4fb;
}

.hit img {
  width: 56px;
  height: 56px;
  object-fit: contain;
  border-radius: 10px;
  background: #fff;
  border: 1px solid #eef1f7;
}

.hit-name {
  font-size: 14px;
  line-height: 1.35;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.hit-name :deep(mark) {
  padding: 0;
  background: none;
  color: var(--gs-primary, #0A63D8);
  font-weight: 700;
}

.hit-price {
  font-weight: 800;
  white-space: nowrap;
}

.no-results {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 10px 0;
  color: #6b7390;
}

.see-all {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  margin-top: 8px;
  padding: 10px;
  border: 0;
  border-radius: 12px;
  background: #f1f4fb;
  color: var(--gs-primary, #0A63D8);
  font-weight: 700;
}

:global([dir="rtl"] .gs-header .see-all i) {
  transform: scaleX(-1);
}

/* ================= ACTIONS ================= */
.gs-actions {
  display: flex;
  align-items: center;
  gap: 6px;
}

.action {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 10px;
  border: 0;
  border-radius: 12px;
  background: transparent;
  color: #fff;
  text-align: start;
  transition: background .15s ease;
}

.action:hover {
  background: rgba(255, 255, 255, .12);
  color: #fff;
}

.action > i,
.cart-icon > i {
  font-size: 22px;
}

.action-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.action-text small {
  font-size: 11.5px;
  opacity: .8;
}

.action-text b {
  font-size: 14px;
}

.cart-icon {
  position: relative;
  display: grid;
  place-items: center;
}

.cart-badge {
  position: absolute;
  top: -8px;
  inset-inline-end: -10px;
  min-width: 19px;
  height: 19px;
  padding: 0 5px;
  display: grid;
  place-items: center;
  border: 2px solid #164094;
  border-radius: 999px;
  background: #e5243b;
  color: #fff;
  font-size: 10px;
  font-weight: 700;
}

/* ================= CATEGORY ROW (desktop) ================= */
.gs-navrow {
  background: #0d2a63;
  border-top: 1px solid rgba(255, 255, 255, .08);
}

.gs-navrow-inner {
  position: relative;
}

@media (min-width: 992px) {
  .gs-nav {
    display: flex !important;
    justify-content: center;
  }

  .gs-nav :deep(.navbar-nav) {
    display: flex;
    flex-direction: row;
    float: none;
    gap: 4px;
  }

  .gs-nav :deep(.navbar-nav > li) {
    position: static;
  }

  .gs-nav :deep(.navbar-nav > li > a) {
    display: flex;
    align-items: center;
    padding: 12px 14px;
    color: rgba(255, 255, 255, .9) !important;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    border-bottom: 3px solid transparent;
    transition: color .15s ease, border-color .15s ease;
  }

  .gs-nav :deep(.navbar-nav > li:hover > a) {
    color: #fff !important;
    border-bottom-color: #8f6bff;
  }

  /* Mega menus span the content width under the category row */
  .gs-nav :deep(.mega-menu) {
    top: 100%;
    left: 0 !important;
    right: 0 !important;
    width: 100%;
    border-radius: 0 0 18px 18px;
    box-shadow: 0 24px 50px rgba(15, 30, 74, .2);
  }
}

/* ================= MOBILE ================= */
@media (max-width: 991.98px) {
  .gs-topbar-inner {
    grid-template-columns: auto 1fr auto;
    grid-template-areas: "menu logo actions";
    gap: 12px;
    padding-block: 10px;
  }

  .menu-btn { grid-area: menu; }

  .gs-logo {
    justify-self: start;
  }

  .gs-logo img {
    height: 36px;
  }

  .search-field {
    height: 44px;
  }

  /* iOS zooms into inputs under 16px */
  .search-field input {
    font-size: 16px;
  }

  /* The bar itself is replaced by the loupe button. It stays in the DOM
   * (just invisible) so the input can take focus inside the tap and iOS
   * raises the keyboard straight away. */
  .gs-search:not(.sheet-open) {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    opacity: 0;
    pointer-events: none;
  }

  .search-action {
    padding: 0;
    width: 42px;
    height: 42px;
    justify-content: center;
  }

  /* ---------- full-screen search sheet ---------- */
  .gs-search.sheet-open {
    position: fixed;
    inset: 0;
    z-index: 10070;
    display: flex;
    flex-direction: column;
    max-width: none;
    padding: 12px 12px 0;
    padding-top: calc(12px + env(safe-area-inset-top));
    background: #f6f7fb;
    animation: sheet-in .2s ease;
  }

  .sheet-open .sheet-back {
    flex: none;
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    border: 0;
    border-radius: 50%;
    background: #fff;
    color: var(--gs-ink, #0F1E4A);
    font-size: 17px;
    box-shadow: 0 2px 8px rgba(15, 30, 74, .1);
  }

  .sheet-open .search-field {
    height: 48px;
    box-shadow: 0 0 0 2px var(--gs-primary, #0A63D8);
  }

  .sheet-open .search-panel {
    position: static;
    flex: 1;
    max-height: none;
    margin: 12px -12px 0;
    padding: 16px 16px calc(24px + env(safe-area-inset-bottom));
    border-radius: 20px 20px 0 0;
    box-shadow: none;
  }

  .sheet-open .hit {
    padding: 10px 6px;
  }

  .sheet-open .chip {
    padding: 8px 14px;
    font-size: 14px;
  }

  @keyframes sheet-in {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: none; }
  }

  .submit-btn {
    display: none;
  }

  .search-field {
    padding-inline-end: 8px;
  }

  .action {
    padding: 6px;
  }

  .gs-navrow {
    border: 0;
  }

  /* Drawer (overrides the theme's full-width .mo-left panel) */
  .gs-nav.header-nav {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0 !important;
    right: auto !important;
    z-index: 10060;
    display: flex !important;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    width: min(340px, 86vw) !important;
    height: 100dvh !important;
    padding: 0;
    margin: 0;
    overflow-y: auto;
    background: #fff;
    box-shadow: 0 0 40px rgba(15, 30, 74, .3);
    transform: translateX(-105%);
    visibility: hidden;
    transition: transform .3s ease, visibility .3s;
  }

  :global([dir="rtl"] .gs-header .gs-nav.header-nav) {
    left: auto !important;
    right: 0 !important;
    transform: translateX(105%);
  }

  .gs-nav.header-nav.show,
  :global([dir="rtl"] .gs-header .gs-nav.header-nav.show) {
    transform: none;
    visibility: visible;
  }

  .drawer-backdrop {
    position: fixed;
    inset: 0;
    z-index: 10059;
    background: rgba(15, 30, 74, .5);
    opacity: 0;
    pointer-events: none;
    transition: opacity .3s ease;
  }

  .drawer-backdrop.open {
    opacity: 1;
    pointer-events: auto;
  }

  .drawer-head {
    position: sticky;
    top: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px;
    background: linear-gradient(135deg, #0f2f6d, #164094, #6a3df0);
  }

  .drawer-logo img {
    height: 34px;
    width: auto;
  }

  .gs-nav :deep(.navbar-nav) {
    float: none;
    width: 100%;
    padding: 8px 0;
  }

  .gs-nav :deep(.navbar-nav > li) {
    border-bottom: 1px solid #eef1f7;
  }

  .gs-nav :deep(.navbar-nav > li > a) {
    display: flex;
    align-items: center;
    padding: 14px 18px;
    color: var(--gs-ink, #0F1E4A) !important;
    font-size: 15px;
    font-weight: 600;
  }

  /* chevron that turns when the section is open */
  .gs-nav :deep(.navbar-nav > li > a::after) {
    content: "" !important;
    display: block !important;
    position: static !important;
    font-family: inherit;
    width: 8px;
    height: 8px;
    margin-inline-start: auto;
    border-right: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
    transform: rotate(45deg);
    opacity: .5;
    transition: transform .2s ease;
  }

  .gs-nav :deep(.navbar-nav > li.open > a::after) {
    transform: rotate(-135deg);
  }

  .gs-nav :deep(.navbar-nav > li.open > a) {
    color: var(--gs-primary, #0A63D8) !important;
  }

  .gs-nav :deep(.mega-menu) {
    padding: 4px 18px 14px !important;
    background: #f7f8fc;
  }

  .gs-nav :deep(.navbar-nav > li.open > .mega-menu) {
    animation: submenu-in .2s ease;
  }

  /* group titles: small labels instead of big coloured headings */
  .gs-nav :deep(.mega-menu .menu-title) {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 12px;
    font-size: 13px !important;
    font-weight: 700;
    letter-spacing: .02em;
  }

  .gs-nav :deep(.mega-menu ul) {
    margin: 4px 0 0;
    padding: 0;
    padding-inline-start: 10px;
    border-inline-start: 2px solid #e6e9f2;
  }

  .gs-nav :deep(.mega-menu ul li a) {
    display: block;
    padding: 7px 8px;
    border-radius: 8px;
    color: #4a5168;
    font-size: 14px;
  }

  .gs-nav :deep(.mega-menu ul li a:active) {
    background: #eef1f8;
  }

  @keyframes submenu-in {
    from { opacity: 0; transform: translateY(-6px); }
    to { opacity: 1; transform: none; }
  }

  .drawer-quick {
    flex: none;
    display: flex;
    gap: 8px;
    padding: 14px 16px 4px;
    overflow-x: auto;
    scrollbar-width: none;
  }

  .drawer-quick::-webkit-scrollbar {
    display: none;
  }

  .quick-chip {
    flex: none;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 12px;
    border-radius: 999px;
    background: #f1f4fb;
    color: var(--gs-ink, #0F1E4A);
    font-size: 13px;
    font-weight: 600;
    white-space: nowrap;
  }

  .quick-chip i {
    color: var(--gs-primary, #0A63D8);
    font-size: 12px;
  }

  .drawer-label {
    flex: none;
    margin: 14px 18px 2px;
    color: #9aa1b5;
    font-size: 11.5px;
    font-weight: 700;
    letter-spacing: .06em;
    text-transform: uppercase;
  }

  .drawer-foot {
    margin-top: auto;
    padding: 16px 18px 24px;
    border-top: 1px solid #eef1f7;
  }

  .drawer-row {
    display: flex;
    gap: 10px;
    margin-bottom: 12px;
  }

  .drawer-lang,
  .drawer-cart {
    flex: 1;
    justify-content: center;
    min-height: 42px;
    border: 1px solid #e1e5ef !important;
    border-radius: 12px !important;
    background: #fff !important;
    color: var(--gs-ink, #0F1E4A) !important;
    font-size: 14px;
    font-weight: 600;
  }

  .drawer-lang:hover {
    opacity: 1;
    border-color: var(--gs-primary, #0A63D8) !important;
  }

  .drawer-cart {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .drawer-cart i {
    font-size: 18px;
    color: var(--gs-primary, #0A63D8);
  }

  .drawer-cart-count {
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    display: grid;
    place-items: center;
    border-radius: 999px;
    background: #e5243b;
    color: #fff;
    font-size: 11px;
  }

  .drawer-link {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 0;
    color: var(--gs-ink, #0F1E4A);
    font-size: 14px;
  }

  .drawer-link i {
    width: 20px;
    color: var(--gs-primary, #0A63D8);
    font-size: 18px;
    text-align: center;
  }

  .drawer-socials {
    display: flex;
    gap: 10px;
    margin-top: 12px;
  }

  .drawer-socials a {
    display: grid;
    place-items: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #eef1f7;
    color: var(--gs-ink, #0F1E4A);
  }
}

@media (max-width: 575.98px) {
  .gs-actions {
    gap: 2px;
  }

  /* Phones: just the flag in the top bar to save room */
  .action-lang :deep(span) {
    display: none;
  }
}
</style>
