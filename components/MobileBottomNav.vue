<template>
  <nav
      class="mobile-bottom-nav d-lg-none"
      :class="{ 'is-hidden': hidden }"
      :aria-label="$t('bottomNav.label')"
  >
    <NuxtLink to="/" class="nav-item" :class="{ 'is-active': isHome }" :aria-current="isHome ? 'page' : undefined">
      <span class="icon-wrapper">
        <i :class="isHome ? 'iconly-Bold-Home' : 'iconly-Curved-Home'"></i>
      </span>
      <span class="label">{{ $t('bottomNav.home') }}</span>
    </NuxtLink>

    <NuxtLink to="/shop" class="nav-item" :class="{ 'is-active': isShop }" :aria-current="isShop ? 'page' : undefined">
      <span class="icon-wrapper">
        <i :class="isShop ? 'iconly-Bold-Game' : 'iconly-Curved-Game'"></i>
      </span>
      <span class="label">{{ $t('bottomNav.shop') }}</span>
    </NuxtLink>

    <!-- Opens the header's full-screen search -->
    <button type="button" class="nav-item nav-search" @click="openSearch">
      <span class="search-fab">
        <i class="iconly-Curved-Search"></i>
      </span>
      <span class="label">{{ $t('bottomNav.search') }}</span>
    </button>

    <NuxtLink to="/cart" class="nav-item" :class="{ 'is-active': isCart }" :aria-current="isCart ? 'page' : undefined">
      <span class="icon-wrapper">
        <i :class="isCart ? 'iconly-Bold-Bag' : 'iconly-Curved-Bag'"></i>
        <span
            v-if="itemsCount > 0"
            :key="itemsCount"
            class="badge"
            :class="{ bump }"
            :aria-label="$t('bottomNav.cartCount', { n: itemsCount })"
        >{{ itemsCount > 99 ? '99+' : itemsCount }}</span>
      </span>
      <span class="label">{{ $t('bottomNav.cart') }}</span>
    </NuxtLink>

    <a href="tel:0550779973" class="nav-item">
      <span class="icon-wrapper">
        <i class="iconly-Curved-Call"></i>
      </span>
      <span class="label">{{ $t('bottomNav.contact') }}</span>
    </a>
  </nav>
</template>

<script setup>
const route = useRoute()

const props = defineProps({
  itemsCount: {
    type: Number,
    default: 0
  }
})

const isHome = computed(() => route.path === '/')
const isShop = computed(() => route.path.startsWith('/shop'))
const isCart = computed(() => route.path.startsWith('/cart'))

// Header3 listens for this and opens its search sheet. The event is dispatched
// synchronously inside the tap, so iOS still lets the input raise the keyboard.
const openSearch = () => window.dispatchEvent(new CustomEvent('gs:open-search'))

// Little pop on the badge whenever something is added to the cart
const bump = ref(false)
watch(() => props.itemsCount, (now, before) => {
  if (now > before) bump.value = true
})

/* Hidden while scrolling down (more room to read), back as soon as the shopper
 * scrolls up, and out of the way while typing (it would float over the keyboard). */
const scrollHidden = ref(false)
const typing = ref(false)
const hidden = computed(() => scrollHidden.value || typing.value)

let lastY = 0
let ticking = false

const onScroll = () => {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    const y = window.scrollY
    const nearBottom = window.innerHeight + y >= document.documentElement.scrollHeight - 80
    if (y < 120 || nearBottom) scrollHidden.value = false
    else if (y - lastY > 8) scrollHidden.value = true
    else if (lastY - y > 8) scrollHidden.value = false
    lastY = y
    ticking = false
  })
}

const isField = (el) => el?.matches?.('input:not([type=checkbox]):not([type=radio]):not([type=range]), textarea, select, [contenteditable="true"]')
const onFocusIn = (e) => (typing.value = isField(e.target))
const onFocusOut = () => (typing.value = false)

// Lets fixed bars above the nav (product page buy bar) follow it down
watch(hidden, (value) => document.documentElement.classList.toggle('bottom-nav-hidden', value))

watch(() => route.path, () => (scrollHidden.value = false))

onMounted(() => {
  lastY = window.scrollY
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('focusin', onFocusIn)
  document.addEventListener('focusout', onFocusOut)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('focusin', onFocusIn)
  document.removeEventListener('focusout', onFocusOut)
  document.documentElement.classList.remove('bottom-nav-hidden')
})
</script>

<style scoped>
.mobile-bottom-nav {
  position: fixed;
  inset-inline: 12px;
  bottom: calc(12px + env(safe-area-inset-bottom));
  z-index: 999;
  max-width: 480px;
  margin-inline: auto;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2px;
  padding: 6px 6px 7px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(18px) saturate(180%);
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  border: 1px solid rgba(15, 30, 74, 0.08);
  box-shadow:
      0 12px 32px rgba(15, 30, 74, 0.18),
      0 2px 6px rgba(15, 30, 74, 0.06);
  transition: transform .3s cubic-bezier(.2, .8, .2, 1), opacity .25s ease;
}

.mobile-bottom-nav.is-hidden {
  transform: translateY(calc(100% + 24px + env(safe-area-inset-bottom)));
  opacity: 0;
  pointer-events: none;
}

.nav-item {
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 4px 0 0;
  border: 0;
  border-radius: 16px;
  background: none;
  color: rgba(15, 30, 74, 0.55);
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  transition: color .2s ease;
}

.icon-wrapper {
  position: relative;
  display: grid;
  place-items: center;
  width: 46px;
  height: 30px;
  border-radius: 999px;
  transition: background .25s ease, color .25s ease, transform .2s ease;
}

.icon-wrapper i {
  font-size: 20px;
  line-height: 1;
}

.label {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 11px;
  font-weight: 500;
  line-height: 1.4;
}

.nav-item:active .icon-wrapper,
.nav-item:active .search-fab {
  transform: scale(.9);
}

/* Active: tinted pill, the gradient is kept for the search button */
.nav-item.is-active {
  color: var(--gs-primary, #0A63D8);
}

.nav-item.is-active .icon-wrapper {
  background: rgba(10, 99, 216, .1);
}

.nav-item.is-active .label {
  font-weight: 700;
}

/* ---------- centre search button ---------- */
.search-fab {
  display: grid;
  place-items: center;
  width: 50px;
  height: 50px;
  margin-top: -24px;
  border-radius: 50%;
  border: 4px solid #fff;
  background: var(--gs-gradient, linear-gradient(135deg, #0f2f6d, #164094, #6a3df0));
  color: #fff;
  box-shadow: 0 8px 18px rgba(106, 61, 240, 0.38);
  transition: transform .2s ease;
}

.search-fab i {
  font-size: 21px;
  line-height: 1;
}

.nav-search {
  color: var(--gs-ink, #0F1E4A);
}

.nav-search .label {
  font-weight: 600;
}

/* ---------- cart badge ---------- */
.badge {
  position: absolute;
  top: -5px;
  inset-inline-end: 0;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  border: 2px solid #fff;
  background: #e5243b;
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  line-height: 1;
}

.badge.bump {
  animation: badge-bump .45s cubic-bezier(.3, 1.6, .5, 1);
}

@keyframes badge-bump {
  0% { transform: scale(.4); }
  60% { transform: scale(1.25); }
  100% { transform: scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .mobile-bottom-nav,
  .badge.bump {
    transition: none;
    animation: none;
  }
}
</style>
