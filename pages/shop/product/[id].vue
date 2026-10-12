<script setup lang="ts">
import RelatedProduct from "~/elements/RelatedProduct.vue";
import { SwiperSlide, Swiper } from "swiper/vue";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import {ref, watch} from "vue";

import Header3 from "~/components/Header3.vue";

import z from "zod";
import {useLocalCart} from "~/composables/useLocalCart";


const { t } = useI18n()
// Declared first: the computed values and watchers below all read it
let product = ref<any>({});

const qty = ref(1);
const thumbsSwiper = ref(null);
const route = useRoute()
// Absolute product URL, available during server rendering too (canonical, sharing)
const { absolute } = useSiteUrl()
const currentUrl = computed(() => absolute(`/shop/product/${route.params.id}`))

const checkoutSchema = z.object({
  first_name: z.string()
      .trim()
      .min(2, "form.errors.firstNameRequired")
      .max(50),

  last_name: z.string()
      .trim()
      .min(2, "form.errors.lastNameRequired")
      .max(50),

  phone: z.string()
      .regex(/^(05|06|07)[0-9]{8}$/, "form.errors.phoneInvalid"),

  email: z
      .email("form.errors.emailInvalid"),

  note: z.string().max(500).optional()
})

const errors = ref<any>({})

const { addItem } = useLocalCart()

const lastRequest = ref(0)

const isLoading = ref(false);

/* ---------- variations ---------- */
// What the shopper picked, per attribute name: { "Taille": "XL" }
const selectedOptions = ref<Record<string, string>>({})

const sameOption = (a?: string, b?: string) =>
    String(a ?? '').trim().toLowerCase() === String(b ?? '').trim().toLowerCase()

// Attributes used for variations ("Taille", "Montant"...)
const variationAttributes = computed(() =>
    product.value?.type === 'variable'
        ? (product.value.attributes || []).filter((a: any) => a.variation !== false && a.options?.length)
        : []
)

// A variation matches when each attribute it defines equals the pick. Attributes it
// doesn't define are "any" in WooCommerce (e.g. one variation for every size).
const matches = (variation: any, options: Record<string, string>) =>
    (variation.attributes || []).every((a: any) => sameOption(options[a.name], a.option))

// Purchasable = in stock and priced. Some products have extra unpriced variations
// that WooCommerce would refuse in an order, so those are only a last resort.
const purchasable = (v: any) => v.stock_status === 'instock' && v.price !== '' && v.price != null

const findVariation = (options: Record<string, string>) => {
  const variations = product.value?.variations || []
  const specific = variations.filter((v: any) => v.attributes?.length && matches(v, options))
  const generic = variations.filter((v: any) => !v.attributes?.length)
  return specific.find(purchasable) ?? generic.find(purchasable) ?? specific[0] ?? generic[0] ?? null
}

const selectedVariation = computed(() =>
    product.value?.type === 'variable' ? findVariation(selectedOptions.value) : null
)

// An option is selectable when some in-stock variation accepts it with the other picks
const isOptionAvailable = (attributeName: string, option: string) =>
    (product.value?.variations || []).some((v: any) =>
        purchasable(v) && matches(v, { ...selectedOptions.value, [attributeName]: option })
    )

const selectOption = (attributeName: string, option: string) => {
  selectedOptions.value = { ...selectedOptions.value, [attributeName]: option }
}

// Start on the first in-stock combination
const initSelection = () => {
  const options: Record<string, string> = {}
  const firstInStock = (product.value?.variations || []).find((v: any) => purchasable(v) && v.attributes?.length)
  for (const attribute of variationAttributes.value) {
    const fromVariation = firstInStock?.attributes?.find((a: any) => a.name === attribute.name)?.option
    options[attribute.name] = attribute.options.find((o: string) => sameOption(o, fromVariation)) ?? attribute.options[0]
  }
  selectedOptions.value = options
}

/* ---------- price, stock & payment mode ---------- */
const isPrepay = computed(() => !!product.value?.is_prepay)
const prepayPrice = computed(() => Number(product.value?.prepay_amount) || 0)

// E-pay and prepay products are paid online only: never added to the cart
const payOnline = computed(() => !!product.value?.is_epay || isPrepay.value)

const displayPrice = computed(() => Number(selectedVariation.value?.price || product.value?.price || 0))

const displayRegularPrice = computed(() =>
    Number(selectedVariation.value ? selectedVariation.value.regular_price : product.value?.regular_price) || 0
)

const isOnSale = computed(() => displayRegularPrice.value > displayPrice.value && displayPrice.value > 0)

const inStock = computed(() =>
    product.value?.type === 'variable'
        ? !!selectedVariation.value && purchasable(selectedVariation.value)
        : product.value?.stock_status === 'instock'
)

// What the cart / order needs to know about the pick
const selectionForOrder = () => {
  const variation = selectedVariation.value
  if (!variation) return null
  const options = variationAttributes.value.map((a: any) => ({ attribute: a.name, value: selectedOptions.value[a.name] }))
  // Picks the variation leaves open ("any size") go to the order as line-item meta
  const meta = options
      .filter(o => !(variation.attributes || []).some((a: any) => a.name === o.attribute))
      .map(o => ({ key: o.attribute, value: o.value }))
  return { variation, options, meta }
}

const { $aa } = useNuxtApp()





const form = reactive({
  first_name: '',
  last_name: '',
  phone: '',
  email: '',
  note: '',
})




const addToCart = async () => {
  try {
    if (payOnline.value || !inStock.value) return false

    addItem(product.value, qty.value, selectionForOrder())

    const objectID = String(product.value?.objectID || product.value?.id)
    if (!objectID) return false

    const qid = localStorage.getItem('algolia:lastQueryID')
    const qidAt = Number(localStorage.getItem('algolia:lastQueryIDAt') || 0)
    const TTL_MS = 30 * 60 * 1000
    const isFresh = qid && qidAt && (Date.now() - qidAt) < TTL_MS

    if (isFresh) {
      $aa('convertedObjectIDsAfterSearch', {
        eventName: 'Product Added To Cart',
        index: 'products',
        objectIDs: [String(objectID)],
        queryID: qid,
      })
    } else {
      $aa('convertedObjectIDs', {
        eventName: 'Product Added To Cart',
        index: 'products',
        objectIDs: [String(objectID)],
      })
    }

  } catch (error) {
    console.log(error)
  }
}

function getShortDescription(description, maxLength = 240) {

  if (!description) return ''


  const text = description.replace(/<[^>]*>?/gm, '').trim()

  return text.length > maxLength
      ? text.slice(0, maxLength) + '…'
      : text
}

const setThumbsSwiper = (swiper: null) => {
  thumbsSwiper.value = swiper;
};

const mainSwiper = ref<any>(null)
const setMainSwiper = (swiper: any) => (mainSwiper.value = swiper)

// Variation photos that aren't already in the product gallery are added to it
const galleryImages = computed(() => {
  const images = product.value?.images || []
  const extra = (product.value?.variations || [])
      .map((v: any) => v.image)
      .filter((img: any) => img?.src && !images.some((i: any) => i.id === img.id || i.src === img.src))
      .filter((img: any, index: number, all: any[]) => all.findIndex(o => o.src === img.src) === index)
  return [...images, ...extra]
})

// Picking a variant with its own photo shows that photo
watch(() => selectedVariation.value?.image, (image) => {
  if (!image?.src || !mainSwiper.value) return
  const index = galleryImages.value.findIndex((i: any) => i.id === image.id || i.src === image.src)
  if (index >= 0) mainSwiper.value.slideTo(index)
})

// Group thousands ("12 500 DA") the same way in both languages
const formatPrice = (value: number | string) =>
    `${Number(value).toLocaleString('fr-FR')} ${t('common.currency')}`

const discount = computed(() =>
    isOnSale.value ? Math.floor(((displayRegularPrice.value - displayPrice.value) / displayRegularPrice.value) * 100) : 0
)

const primaryCategory = computed(() => product.value?.categories?.[0])

// Tags like "prepay-500" or "epay" drive behaviour and aren't meant for shoppers
const visibleTags = computed(() =>
    (product.value?.tags || [])
        .filter((tag: any) => !/prepay|epay/i.test(tag.name))
        .slice(0, 10)
)

const encodedUrl = computed(() => encodeURIComponent(currentUrl.value))
const shareText = computed(() => encodeURIComponent(shareTitle.value || product.value?.name || ''))

const whatsappOrderUrl = computed(() => {
  const message = t('product.whatsappMessage', { name: product.value?.name || '' })
  return `https://wa.me/213550779973?text=${encodeURIComponent(`${message} ${currentUrl.value}`)}`
})

const linkCopied = ref(false)
const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(currentUrl.value)
    linkCopied.value = true
    setTimeout(() => (linkCopied.value = false), 2000)
  } catch (error) {
    console.error(error)
  }
}

const id = String(useRoute().params.id)

// Load the product before rendering: the page (and its SEO tags) needs it,
// and a missing or unpublished product must give a real 404, not a broken page
const { data: productRes, error: productError } = await useFetch<any>("/api/wc/products/", {
  key: `product-${id}`,
  params: { slug: id },
})

const found = productRes.value?.products?.[0]

if (!found) {
  throw createError({
    statusCode: productError.value ? 500 : 404,
    statusMessage: productError.value ? 'Product could not be loaded' : 'Product not found',
    fatal: true,
  })
}

// Copy rather than mutate the cached response (reverse() works in place)
product.value = { ...found, variations: [...(found.variations || [])].reverse() }

initSelection()

// Related products: loaded after the page, they're below the fold
const relatedIds: number[] = found.related_ids || []

const { data: relatedRes } = useLazyFetch<any>('/api/wc/products/', {
  key: `related-${id}`,
  params: { include: relatedIds.join(','), per_page: relatedIds.length || 1 },
  immediate: relatedIds.length > 0,
})

const relatedProducts = computed(() =>
    (relatedRes.value?.products || []).map((product: any) => ({
      id: product.id,
      name: product.name,
      slug: product.slug,
      categories: product.categories,
      thumbnail: product.images?.[0]?.thumbnail || '',
      image: product.images?.[0],
      hoverImage: product.images?.[1],
      type: product.type,
      variations: product.variations,
      is_epay: product.is_epay,
      is_prepay: product.is_prepay,
      price: product.price,
      on_sale: product.on_sale,
      regular_price: product.regular_price,
      stock: product.stock_status,
    }))
)





const parseForm = () => checkoutSchema.safeParse({
  first_name: form.first_name,
  last_name: form.last_name,
  phone: form.phone,
  email: form.email.trim(),
  note: form.note
})

const validateCheckout = () => {
  const result = parseForm()

  errors.value = {}
  if (result.success) return true

  result.error.issues.forEach(issue => {
    const key = issue.path[0]
    if (!errors.value[key]) errors.value[key] = issue.message
  })

  // Bring the first invalid field into view
  nextTick(() => {
    const first = document.querySelector('.epay-checkout [aria-invalid="true"]') as HTMLElement | null
    first?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    first?.focus({ preventScroll: true })
  })

  return false
}

// Once a field has been flagged, clear its error as soon as it becomes valid
watch(form, () => {
  if (!Object.keys(errors.value).length) return
  const result = parseForm()
  const stillInvalid = new Set(result.success ? [] : result.error.issues.map(i => i.path[0]))
  for (const key of Object.keys(errors.value)) {
    if (!stillInvalid.has(key)) delete errors.value[key]
  }
})

// Digits only, so "05 50 77 99 73" is accepted as typed
watch(() => form.phone, (value) => {
  const digits = value.replace(/\D/g, '').slice(0, 10)
  if (digits !== value) form.phone = digits
})

// What is charged online now: the deposit for prepay products, else the full price
const payNow = computed(() => isPrepay.value ? prepayPrice.value : displayPrice.value)

const showNote = ref(false)
const submitError = ref(false)
const isRedirecting = ref(false)




const submitOrder = async () => {

  submitError.value = false
  if(!validateCheckout()) return;



  const now = Date.now()

  if (now - lastRequest.value < 10000) {
    return
  }

  lastRequest.value = now

  if (isLoading.value) return

  isLoading.value = true


  try {

    const selection = selectionForOrder()

    const order = await $fetch("/api/epay/pay", {
      method: "POST",
      body: {

        items: [
          {
            product_id: product.value.id,
            quantity: 1,
            variation_id: selection?.variation?.id ?? null,
            meta: selection?.meta,
          }
        ],

        billing: {
          first_name: form.first_name.trim(),
          last_name: form.last_name.trim(),
          phone: form.phone,
          email: form.email.trim(),
          country: "DZ",
        },

        note: form.note,


      }

    })



    if (!order?.invoice?.url) throw new Error('No payment link')

    // Remembered for the payment result page (recap + "try again")
    try {
      sessionStorage.setItem('lastEpay', JSON.stringify({
        orderId: order.orderId,
        slug: product.value.slug,
        name: product.value.name,
        image: selectedVariation.value?.image?.src || product.value.images?.[0]?.src,
        option: Object.values(selectedOptions.value).join(' · '),
        amount: payNow.value,
        remaining: isPrepay.value ? Math.max(displayPrice.value - prepayPrice.value, 0) : 0,
        isPrepay: isPrepay.value,
      }))
    } catch {}

    // Keep the button busy while the browser leaves for the payment page
    isRedirecting.value = true
    window.location.href = order.invoice.url

  }catch (error) {
    console.error(error)
    submitError.value = true
    lastRequest.value = 0
  }finally {
    if (!isRedirecting.value) isLoading.value = false
  }
}



/* ---------- description: collapsed when long ---------- */
const DESCRIPTION_MAX = 460 // px shown before "read more"
const descRef = ref<HTMLElement | null>(null)
const descTall = ref(false)
const descExpanded = ref(false)

const toggleDescription = () => {
  descExpanded.value = !descExpanded.value
  // collapsing: bring the section top back into view
  if (!descExpanded.value) document.getElementById('product-description')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/* ---------- full-screen photo viewer ---------- */
const lightboxIndex = ref<number | null>(null)

const openLightbox = (index: number) => {
  lightboxIndex.value = index
}

const closeLightbox = () => {
  lightboxIndex.value = null
}

const stepLightbox = (delta: number) => {
  if (lightboxIndex.value === null) return
  const count = galleryImages.value.length
  lightboxIndex.value = (lightboxIndex.value + delta + count) % count
}

// In Arabic the "next" arrow points left, so swap the keys too
const onLightboxKey = (e: KeyboardEvent) => {
  if (lightboxIndex.value === null) return
  const rtl = document.documentElement.dir === 'rtl'
  if (e.key === 'Escape') closeLightbox()
  else if (e.key === 'ArrowRight') stepLightbox(rtl ? -1 : 1)
  else if (e.key === 'ArrowLeft') stepLightbox(rtl ? 1 : -1)
}

let touchX = 0
const onTouchStart = (e: TouchEvent) => (touchX = e.changedTouches[0].clientX)
const onTouchEnd = (e: TouchEvent) => {
  const dx = e.changedTouches[0].clientX - touchX
  if (Math.abs(dx) < 50) return
  const rtl = document.documentElement.dir === 'rtl'
  stepLightbox((dx < 0) !== rtl ? 1 : -1)
}

watch(lightboxIndex, (index, previous) => {
  if (import.meta.server) return
  document.body.style.overflow = index !== null ? 'hidden' : ''
  // keep the page gallery in sync with what was viewed
  if (index === null && previous !== null && previous !== undefined) mainSwiper.value?.slideTo(previous)
})

/* ---------- phones: sticky price + action bar ---------- */
const showStickyCta = ref(false)
let buyObserver: IntersectionObserver | null = null

const scrollToBuy = () => {
  document.getElementById('buy-area')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

onMounted(() => {
  window.addEventListener('keydown', onLightboxKey)

  nextTick(() => {
    descTall.value = (descRef.value?.scrollHeight || 0) > DESCRIPTION_MAX + 80

    const buyArea = document.getElementById('buy-area')
    if (buyArea && 'IntersectionObserver' in window) {
      // shown only once the buy area has scrolled up out of view (not before reaching it)
      buyObserver = new IntersectionObserver(([entry]) => {
        showStickyCta.value = !entry.isIntersecting && entry.boundingClientRect.top < 0
      })
      buyObserver.observe(buyArea)
    }
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onLightboxKey)
  buyObserver?.disconnect()
  document.body.style.overflow = ''
})

/* ---------- SEO ---------- */
useHead({
  link: [{ rel: 'canonical', href: currentUrl, key: 'canonical' }],
})

const seoTitle = computed(() =>
    product.value?.name || t('seo.productFallback')
)

// Short description first (written for this), else the start of the long one;
// fall back to a generated sentence so every product has a description
const seoDescription = computed(() => {
  const p = product.value
  if (!p?.name) return t('seo.description')
  const text = getShortDescription(p.short_description || p.description || '', 155).replace(/\s+/g, ' ').trim()
  return text || t('seo.productDescription', { name: p.name, price: formatPrice(displayPrice.value) })
})

// Share previews: WhatsApp skips heavy images, and WooCommerce photos are often
// 0.5–1.5 MB PNGs. The site's image server (Nuxt Image / IPX) re-encodes the photo
// as an ~100 KB 800×800 JPEG on our own domain, white-padded if it isn't square.
const shareImage = computed(() => {
  const src = product.value?.images?.[0]?.src
  if (!src) return { src: absolute('/banner.jpg'), width: 2240, height: 1260 }
  return {
    src: absolute(`/_ipx/s_800x800&fit_contain&b_ffffff&f_jpeg&q_80/${src}`),
    width: 800,
    height: 800,
  }
})

const seoImage = computed(() => shareImage.value.src)

// "FC 27 DIGITAL – À partir de 11 900 DA": the price makes the preview useful
const shareTitle = computed(() => {
  const p = product.value
  if (!p?.name) return seoTitle.value
  const prices = (p.variations || []).map((v: any) => Number(v.price)).filter((n: number) => n > 0)
  const hasRange = prices.length > 1 && Math.min(...prices) !== Math.max(...prices)
  const price = hasRange ? Math.min(...prices) : Number(prices[0] || p.price)
  if (!price) return p.name
  return `${p.name} – ${hasRange ? `${t('product.from')} ` : ''}${formatPrice(price)}`
})

useSeoMeta({
  title: seoTitle,
  description: seoDescription,

  ogTitle: shareTitle,
  ogDescription: seoDescription,
  ogImage: seoImage,
  ogImageSecureUrl: seoImage,
  ogImageType: () => (shareImage.value.width === 800 ? 'image/jpeg' : undefined),
  ogImageWidth: () => shareImage.value.width,
  ogImageHeight: () => shareImage.value.height,
  ogImageAlt: () => product.value?.name || '',
  ogUrl: currentUrl,
  ogType: 'product',

  twitterCard: 'summary_large_image',
  twitterTitle: shareTitle,
  twitterDescription: seoDescription,
  twitterImage: seoImage,
  twitterImageAlt: () => product.value?.name || '',
})

// Product details read by Facebook / Instagram / Pinterest when the link is shared
useHead(() => {
  const p = product.value
  if (!p?.name) return {}
  // lowest price, matching the "from …" in the share title
  const prices = (p.variations || []).map((v: any) => Number(v.price)).filter((n: number) => n > 0)
  const price = (prices.length ? Math.min(...prices) : Number(p.price)) || 0
  return {
    meta: [
      price ? { property: 'product:price:amount', content: String(price), key: 'product-price' } : { key: 'product-price' },
      { property: 'product:price:currency', content: 'DZD', key: 'product-currency' },
      { property: 'product:availability', content: inStock.value ? 'in stock' : 'out of stock', key: 'product-availability' },
      { property: 'product:condition', content: /occasion/i.test(p.name) ? 'used' : 'new', key: 'product-condition' },
      p.sku ? { property: 'product:retailer_item_id', content: String(p.sku), key: 'product-sku' } : { key: 'product-sku' },
    ],
  }
})

// Structured data: lets Google show price and availability in results
useJsonLd('product-jsonld', () => {
  const p = product.value
  if (!p?.name) return null

  const prices = (p.variations || [])
      .map((v: any) => Number(v.price))
      .filter((n: number) => n > 0)
  const anyInStock = p.type === 'variable'
      ? (p.variations || []).some((v: any) => v.stock_status === 'instock')
      : p.stock_status === 'instock'

  const availability = `https://schema.org/${anyInStock ? 'InStock' : 'OutOfStock'}`
  const offers = prices.length > 1 && Math.min(...prices) !== Math.max(...prices)
      ? {
          '@type': 'AggregateOffer',
          priceCurrency: 'DZD',
          lowPrice: Math.min(...prices),
          highPrice: Math.max(...prices),
          offerCount: prices.length,
          availability,
        }
      : {
          '@type': 'Offer',
          priceCurrency: 'DZD',
          price: Number(prices[0] || p.price) || undefined,
          availability,
          url: currentUrl.value,
          itemCondition: `https://schema.org/${/occasion/i.test(p.name) ? 'UsedCondition' : 'NewCondition'}`,
          seller: { '@type': 'Organization', name: 'Gameshopdz' },
        }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        name: p.name,
        description: seoDescription.value,
        image: (p.images || []).map((i: any) => i.src).slice(0, 5),
        sku: p.sku || undefined,
        category: p.categories?.[0]?.name,
        url: currentUrl.value,
        offers,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: t('common.home'), item: absolute('/') },
          { '@type': 'ListItem', position: 2, name: t('common.shop'), item: absolute('/shop') },
          ...(p.categories?.[0] ? [{
            '@type': 'ListItem', position: 3, name: decodeName(p.categories[0].name),
            item: absolute(`/shop?category=${p.categories[0].id}`),
          }] : []),
          { '@type': 'ListItem', position: p.categories?.[0] ? 4 : 3, name: p.name, item: currentUrl.value },
        ],
      },
    ],
  }
})

</script>

<template>

  <header class="site-header mo-left header style-2">
    <Header3 />
  </header>

  <div class="page-content bg-light py-3">
    <div class="container home-wide py-3" v-if="product.name">
      <nav :aria-label="$t('breadcrumb.label')" class="gs-breadcrumb">
        <ol>
          <li>
            <NuxtLink to="/">
              <i class="iconly-Curved-Home" aria-hidden="true"></i>
              <span>{{ $t('common.home') }}</span>
            </NuxtLink>
          </li>
          <li><NuxtLink to="/shop">{{ $t('common.shop') }}</NuxtLink></li>
          <li v-if="product.categories?.length">
            <NuxtLink :to="`/shop?category=${product.categories[0].id}`" class="text-capitalize">
              {{ product.categories[0].name.replace(/&amp;/g, '&').toLowerCase() }}
            </NuxtLink>
          </li>
          <li aria-current="page">{{ product.name }}</li>
        </ol>
      </nav>
    </div>
    <section class="content-inner py-0 bg-light">
      <div class="container home-wide">
        <div class="row gx-4 gx-xl-5 gy-4 mt-0">

          <!-- Gallery -->
          <div class="col-md-6">
            <div class="product-gallery sticky-md-top">
              <template v-if="product.images?.length">
                <Swiper
                    class="gallery-main"
                    :modules="[Thumbs, Navigation, Pagination]"
                    :thumbs="{ swiper: thumbsSwiper }"
                    :navigation="galleryImages.length > 1"
                    :pagination="galleryImages.length > 1 ? { clickable: true } : false"
                    :space-between="10"
                    @swiper="setMainSwiper"
                >
                  <SwiperSlide v-for="(img, ind) in galleryImages" :key="img.id || ind">
                    <button type="button" class="gallery-frame" :aria-label="$t('product.zoom')" @click="openLightbox(ind)">
                      <img
                          :src="img.src"
                          :srcset="img.srcset || undefined"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          :alt="img.alt || product.name"
                          :loading="ind === 0 ? 'eager' : 'lazy'"
                          :fetchpriority="ind === 0 ? 'high' : 'auto'"
                          decoding="async"
                      />
                    </button>
                  </SwiperSlide>
                </Swiper>

                <Swiper
                    v-if="galleryImages.length > 1"
                    class="gallery-thumbs"
                    :modules="[Thumbs]"
                    :slides-per-view="5"
                    :space-between="10"
                    :breakpoints="{ 0: { slidesPerView: 4 }, 768: { slidesPerView: 5 } }"
                    watch-slides-progress
                    @swiper="setThumbsSwiper"
                >
                  <SwiperSlide v-for="(img, ind) in galleryImages" :key="`thumb-${img.id || ind}`">
                    <img
                        :src="img.thumbnail || img.src"
                        :alt="`${product.name} ${ind + 1}`"
                        loading="lazy"
                        decoding="async"
                    />
                  </SwiperSlide>
                </Swiper>
              </template>

              <div class="placeholder-glow" v-else>
                <span class="placeholder gallery-placeholder"></span>
              </div>
            </div>
          </div>

          <!-- Details & buy box -->
          <div class="col-md-6">
            <div class="product-summary">

              <template v-if="product.name">
                <NuxtLink
                    v-if="primaryCategory"
                    :to="`/shop?category=${primaryCategory.id}`"
                    class="summary-category"
                >
                  {{ primaryCategory.name.replace(/&amp;/g, '&').toLowerCase() }}
                </NuxtLink>

                <h1 class="summary-title">{{ product.name }}</h1>

                <div class="summary-badges">
                  <span class="pill" :class="inStock ? 'pill-success' : 'pill-danger'">
                    <span class="dot"></span>
                    {{ inStock ? $t('common.available') : $t('common.unavailable') }}
                  </span>
                  <span class="pill pill-promo" v-if="isOnSale">{{ $t('product.promo') }}</span>
                  <span class="pill pill-online" v-if="payOnline"><i class="fa fa-credit-card"></i> {{ isPrepay ? $t('product.reserveOnline') : $t('product.epay') }}</span>
                  <span class="pill pill-muted" v-if="product.sku">{{ $t('product.sku') }} {{ product.sku }}</span>
                </div>
              </template>

              <div class="placeholder-glow" v-else>
                <span class="placeholder col-4 mb-2"></span>
                <span class="placeholder col-12"></span>
                <span class="placeholder col-8"></span>
              </div>

              <!-- Price -->
              <div class="summary-price" v-if="product.name">
                <template v-if="isPrepay">
                  <span class="price-now">{{ formatPrice(displayPrice) }}</span>
                  <span class="price-split">
                    <span>{{ $t('product.deposit') }} <b class="text-danger">{{ formatPrice(prepayPrice) }}</b></span>
                    <span>{{ $t('product.remaining') }} <b>{{ formatPrice(Math.max(displayPrice - prepayPrice, 0)) }}</b></span>
                  </span>
                </template>

                <template v-else-if="isOnSale">
                  <span class="price-now is-sale">{{ formatPrice(displayPrice) }}</span>
                  <del class="price-old">{{ formatPrice(displayRegularPrice) }}</del>
                  <span class="price-save" dir="ltr" v-if="discount">-{{ discount }}%</span>
                </template>

                <span class="price-now" v-else>{{ formatPrice(displayPrice) }}</span>
              </div>

              <div class="alert rounded-4 alert-warning mb-0" v-if="isPrepay">
                <h6 class="alert-heading mb-1"><i class="fa fa-circle-info me-1"></i> {{ $t('common.important') }}</h6>
                <i18n-t keypath="product.prepayNotice" tag="p" class="mb-0">
                  <template #amount>
                    <strong>{{ formatPrice(prepayPrice) }}</strong>
                  </template>
                </i18n-t>
              </div>

              <p class="summary-excerpt" dir="auto" v-if="product.description">
                {{ getShortDescription(product.description) }}
                <a href="#product-description" class="read-more" v-if="product.description.length > 240" @click="descExpanded = true">{{ $t('product.readMore') }}</a>
              </p>

              <!-- Variations: one chip group per attribute (size, amount, edition…) -->
              <div class="variation-picker" v-for="attribute in variationAttributes" :key="attribute.id || attribute.name">
                <!-- some attributes are named "." in WooCommerce: show the pick only -->
                <div class="picker-label">
                  <template v-if="/[\p{L}\p{N}]/u.test(attribute.name)">{{ attribute.name }} :</template>
                  <b>{{ selectedOptions[attribute.name] }}</b>
                </div>
                <div class="option-group" role="radiogroup" :aria-label="attribute.name">
                  <button
                      v-for="option in attribute.options"
                      :key="option"
                      type="button"
                      role="radio"
                      class="option-btn"
                      :class="{ active: sameOption(selectedOptions[attribute.name], option) }"
                      :aria-checked="sameOption(selectedOptions[attribute.name], option)"
                      :disabled="!isOptionAvailable(attribute.name, option)"
                      @click="selectOption(attribute.name, option)"
                  >
                    {{ option }}
                  </button>
                </div>
              </div>

              <!-- EPAY checkout -->
              <section class="epay-checkout" id="buy-area" v-if="payOnline" aria-labelledby="epay-title">
                <template v-if="inStock">
                  <header class="epay-head">
                    <span class="epay-icon"><i class="fa-solid fa-credit-card"></i></span>
                    <div>
                      <h3 class="epay-title" id="epay-title">{{ $t('product.epayTitle') }}</h3>
                      <p class="epay-sub"><i class="fa-solid fa-shield-alt"></i> {{ $t('product.epaySubtitle') }}</p>
                    </div>
                  </header>

                  <!-- How it works -->
                  <ol class="epay-steps">
                    <li><span>1</span>{{ $t('product.epayStep1') }}</li>
                    <li><span>2</span>{{ $t('product.epayStep2') }}</li>
                    <li><span>3</span>{{ isPrepay ? $t('product.epayStep3Prepay') : $t('product.epayStep3') }}</li>
                  </ol>

                  <form class="epay-form" novalidate @submit.prevent="submitOrder">
                    <div class="row g-3">
                      <div class="col-sm-6">
                        <label class="field-label" for="epay-first-name">{{ $t('form.firstName') }} <span class="req">*</span></label>
                        <input id="epay-first-name" v-model="form.first_name" class="form-control" autocomplete="given-name"
                               :aria-invalid="!!errors.first_name" :disabled="isLoading" />
                        <p v-if="errors.first_name" class="field-error">{{ $t(errors.first_name) }}</p>
                      </div>
                      <div class="col-sm-6">
                        <label class="field-label" for="epay-last-name">{{ $t('form.lastName') }} <span class="req">*</span></label>
                        <input id="epay-last-name" v-model="form.last_name" class="form-control" autocomplete="family-name"
                               :aria-invalid="!!errors.last_name" :disabled="isLoading" />
                        <p v-if="errors.last_name" class="field-error">{{ $t(errors.last_name) }}</p>
                      </div>
                      <div class="col-sm-6">
                        <label class="field-label" for="epay-phone">{{ $t('form.phone') }} <span class="req">*</span></label>
                        <div class="input-icon">
                          <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
                          <input id="epay-phone" v-model="form.phone" type="tel" inputmode="numeric" autocomplete="tel-national"
                                 maxlength="10" dir="ltr" placeholder="05XXXXXXXX" class="form-control"
                                 :aria-invalid="!!errors.phone" aria-describedby="epay-phone-hint" :disabled="isLoading" />
                        </div>
                        <p v-if="errors.phone" class="field-error">{{ $t(errors.phone) }}</p>
                        <p v-else id="epay-phone-hint" class="field-hint">{{ $t('product.phoneHint') }}</p>
                      </div>
                      <div class="col-sm-6">
                        <label class="field-label" for="epay-email">{{ $t('form.email') }} <span class="req">*</span></label>
                        <div class="input-icon">
                          <i class="fa-regular fa-envelope" aria-hidden="true"></i>
                          <input id="epay-email" v-model="form.email" type="email" inputmode="email" autocomplete="email"
                                 dir="ltr" placeholder="nom@exemple.com" class="form-control"
                                 :aria-invalid="!!errors.email" aria-describedby="epay-email-hint" :disabled="isLoading" />
                        </div>
                        <p v-if="errors.email" class="field-error">{{ $t(errors.email) }}</p>
                        <p v-else id="epay-email-hint" class="field-hint">{{ $t('product.emailHint') }}</p>
                      </div>

                      <div class="col-12">
                        <button v-if="!showNote && !form.note" type="button" class="add-note" @click="showNote = true">
                          <i class="fa-solid fa-plus"></i> {{ $t('product.addNote') }}
                        </button>
                        <template v-else>
                          <label class="field-label" for="epay-note">{{ $t('form.noteLabel') }}</label>
                          <textarea id="epay-note" v-model="form.note" :disabled="isLoading" :placeholder="$t('form.notePlaceholder')"
                                    class="form-control" rows="3" maxlength="500"></textarea>
                        </template>
                      </div>
                    </div>

                    <!-- What gets charged -->
                    <div class="pay-summary">
                      <div v-if="selectedVariation && variationAttributes.length" class="pay-line">
                        <span>{{ $t('product.selectedOption') }}</span>
                        <b>{{ Object.values(selectedOptions).join(' · ') }}</b>
                      </div>
                      <div class="pay-line pay-now">
                        <span>{{ isPrepay ? $t('product.depositNow') : $t('product.payNow') }}</span>
                        <strong>{{ formatPrice(payNow) }}</strong>
                      </div>
                      <div v-if="isPrepay" class="pay-line muted">
                        <span>{{ $t('product.remainingOnDelivery') }}</span>
                        <span>{{ formatPrice(Math.max(displayPrice - prepayPrice, 0)) }}</span>
                      </div>
                    </div>

                    <div v-if="submitError" class="alert alert-danger rounded-3 small mb-3" role="alert">
                      {{ $t('product.payError') }}
                    </div>

                    <button type="submit" class="btn btn-primary btn-lg btn-block" :disabled="isLoading">
                      <span v-if="isLoading" class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                      <i v-else class="fa-solid fa-lock"></i>
                      <template v-if="isRedirecting">{{ $t('product.redirecting') }}</template>
                      <template v-else-if="isLoading">{{ $t('common.wait') }}</template>
                      <template v-else>{{ $t('product.payAmount', { amount: formatPrice(payNow) }) }}</template>
                    </button>

                    <div class="secure-row">
                      <span class="secure-text"><i class="fa-solid fa-lock"></i> {{ $t('product.secureCards') }}</span>
                      <span class="card-logos">
                        <img src="https://bitakati.dz/assets/front/img/logo.svg" width="44" height="28" alt="CIB" />
                        <img src="https://www.poste.dz/assets/ap_logo-DKTxjdB6.svg" width="64" height="28" alt="Edahabia - Algérie Poste" />
                      </span>
                    </div>
                  </form>

                  <p class="epay-notice" v-if="!isPrepay">
                    <i class="fa-brands fa-whatsapp"></i>
                    {{ $t('product.epayNotice') }}
                  </p>
                </template>

                <!-- Online-only product that can't be bought right now -->
                <div v-else class="epay-unavailable">
                  <AstroBot mood="sad" :size="80" />
                  <div>
                    <b>{{ $t('product.unavailableTitle') }}</b>
                    <p>{{ $t('product.unavailableText') }}</p>
                  </div>
                </div>
              </section>

              <!-- Cash on delivery: quantity + add to cart -->
              <div class="buy-row" id="buy-area" v-else-if="product.name && !payOnline">
                <div class="qty-stepper">
                  <button type="button" :aria-label="$t('product.decrease')" @click="qty > 1 ? qty-- : qty" :disabled="!inStock || qty <= 1">
                    <i class="fa-solid fa-minus"></i>
                  </button>
                  <input
                      v-model.number="qty"
                      type="number"
                      min="1"
                      inputmode="numeric"
                      :aria-label="$t('common.quantity')"
                      :readonly="!inStock"
                  />
                  <button type="button" :aria-label="$t('product.increase')" @click="qty++" :disabled="!inStock">
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </div>

                <button
                    class="btn btn-secondary rounded-pill new-gradient buy-btn"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                    @click="addToCart()"
                    :disabled="!inStock"
                >
                  <i class="fa fa-cart-plus"></i>
                  {{ inStock ? $t('common.addToCart') : $t('common.unavailable') }}
                </button>
              </div>

              <a
                  v-if="product.name"
                  :href="whatsappOrderUrl"
                  target="_blank"
                  rel="noopener"
                  class="btn whatsapp-btn rounded-pill"
              >
                <i class="fa-brands fa-whatsapp"></i>
                {{ $t('product.askWhatsapp') }}
              </a>

              <!-- Reassurance -->
              <ul class="trust-list" v-if="product.name">
                <li><i class="iconly-Curved-ShieldDone"></i>{{ $t('cart.warranty') }}</li>
                <li><i class="iconly-Curved-TimeSquare"></i>{{ $t('product.delivery58') }}</li>
                <li><i class="iconly-Curved-Wallet"></i>{{ payOnline ? $t('product.epay') : $t('checkout.cod') }}</li>
              </ul>

              <!-- Details -->
              <dl class="summary-meta" v-if="product.name">
                <template v-if="product.categories?.length">
                  <dt>{{ $t('product.category') }}</dt>
                  <dd>
                    <NuxtLink v-for="category in product.categories" :key="category.id" :to="`/shop?category=${category.id}`" class="meta-chip">
                      {{ category.name.replace(/&amp;/g, '&').toLowerCase() }}
                    </NuxtLink>
                  </dd>
                </template>

                <template v-if="visibleTags.length">
                  <dt>{{ $t('product.tags') }}</dt>
                  <dd>
                    <NuxtLink v-for="tag in visibleTags" :key="tag.id" :to="`/shop?tag=${tag.id}`" class="meta-chip">
                      {{ tag.name }}
                    </NuxtLink>
                  </dd>
                </template>

                <dt>{{ $t('product.share') }}</dt>
                <dd class="share">
                  <a :href="`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`" target="_blank" rel="noopener" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                  <a :href="`https://wa.me/?text=${shareText}%20${encodedUrl}`" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
                  <a :href="`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareText}`" target="_blank" rel="noopener" aria-label="Twitter"><i class="fa-brands fa-twitter"></i></a>
                  <button type="button" :aria-label="$t('product.copyLink')" @click="copyLink">
                    <i :class="linkCopied ? 'fa-solid fa-check' : 'fa-solid fa-link'"></i>
                  </button>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Description -->
    <section class="content-inner-3 pb-0" id="product-description" v-if="product.description">
      <div class="container home-wide">
        <div class="desc-card">
          <h2 class="desc-title">{{ $t('product.description') }}</h2>

          <div class="desc-body" :class="{ collapsed: descTall && !descExpanded }">
            <div ref="descRef" class="product-description" dir="auto" v-html="product.description"></div>
          </div>

          <button v-if="descTall" type="button" class="desc-toggle" :aria-expanded="descExpanded" @click="toggleDescription">
            {{ descExpanded ? $t('product.readLess') : $t('product.readMore') }}
            <i class="fa-solid" :class="descExpanded ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
          </button>
        </div>
      </div>
    </section>

    <!-- Related -->
    <section class="content-inner-1 overflow-hidden" v-if="relatedProducts.length">
      <div class="container home-wide">
        <div class="related-head">
          <h2 class="related-title">
            <AstroBot head mood="heart" badge="fa-gamepad" :size="42" />
            {{ $t('product.related') }}
          </h2>
          <NuxtLink :to="primaryCategory ? `/shop?category=${primaryCategory.id}` : '/shop'" class="see-all">
            {{ $t('common.seeAll') }}
            <i class="fa-solid fa-chevron-right flip-rtl"></i>
          </NuxtLink>
        </div>
        <RelatedProduct :products="relatedProducts" />
      </div>
    </section>

    <!-- Full-screen photo viewer -->
    <Teleport to="body">
      <div
          v-if="lightboxIndex !== null"
          class="lightbox"
          role="dialog"
          aria-modal="true"
          :aria-label="product.name"
          @click.self="closeLightbox"
          @touchstart.passive="onTouchStart"
          @touchend.passive="onTouchEnd"
      >
        <button type="button" class="lb-close" :aria-label="$t('common.close')" @click="closeLightbox">
          <i class="fa-solid fa-xmark"></i>
        </button>

        <button v-if="galleryImages.length > 1" type="button" class="lb-nav lb-prev" :aria-label="$t('shop.prevPage')" @click="stepLightbox(-1)">
          <i class="fa-solid fa-chevron-left"></i>
        </button>

        <img :src="galleryImages[lightboxIndex]?.src" :alt="galleryImages[lightboxIndex]?.alt || product.name" class="lb-img" />

        <button v-if="galleryImages.length > 1" type="button" class="lb-nav lb-next" :aria-label="$t('shop.nextPage')" @click="stepLightbox(1)">
          <i class="fa-solid fa-chevron-right"></i>
        </button>

        <span v-if="galleryImages.length > 1" class="lb-count" dir="ltr">{{ lightboxIndex + 1 }} / {{ galleryImages.length }}</span>
      </div>
    </Teleport>

    <!-- Phones: price + main action stay reachable once the buy area scrolls away -->
    <Transition name="sticky-cta">
      <div v-if="showStickyCta && product.name && inStock" class="sticky-cta d-lg-none">
        <div class="sticky-info">
          <span class="sticky-name">{{ product.name }}</span>
          <strong class="sticky-price">{{ formatPrice(payOnline && isPrepay ? prepayPrice : displayPrice) }}</strong>
        </div>

        <button
            v-if="payOnline"
            type="button"
            class="btn btn-primary"
            @click="scrollToBuy"
        >
          <i class="fa-solid fa-lock"></i> {{ isPrepay ? $t('product.reserveOnline') : $t('product.pay') }}
        </button>

        <button
            v-else
            type="button"
            class="btn btn-primary"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
            @click="addToCart()"
        >
          <i class="fa fa-cart-plus"></i> {{ $t('product.add') }}
        </button>
      </div>
    </Transition>
  </div>
</template>

<style>
@media screen and (max-width: 600px) {
  .image-slider {
    height: 250px !important;
  }
}

.new-gradient {
  background: linear-gradient(135deg, #0f2f6d, #164094, #6a3df0) !important;
}


</style>
<style scoped>
/* Product copy comes from WooCommerce as-is: readable measure, natural alignment */
.product-description {
  max-width: 860px;
  margin-inline: auto;
  text-align: start;
  line-height: 1.8;
}

.product-description :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
}

/* ---------- description ---------- */
/* one readable column: title and text share the same edges */
.desc-card {
  max-width: 980px;
  margin-inline: auto;
  padding: 28px clamp(18px, 4vw, 40px);
  border-radius: 24px;
  background: #fff;
  border: 1px solid #eef1f7;
}

.desc-title {
  margin-bottom: 18px;
  font-size: 22px;
}

.desc-body {
  position: relative;
}

.desc-card .product-description {
  max-width: none;
  margin: 0;
}

/* long descriptions: show the start, fade it out, offer "read more" */
.desc-body.collapsed {
  max-height: 460px;
  overflow: hidden;
}

.desc-body.collapsed::after {
  content: "";
  position: absolute;
  inset-inline: 0;
  bottom: 0;
  height: 120px;
  background: linear-gradient(rgba(255, 255, 255, 0), #fff);
  pointer-events: none;
}

.desc-toggle {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 14px;
  padding: 10px 18px;
  border: 1px solid #e1e5ef;
  border-radius: 999px;
  background: #fff;
  color: var(--primary, #0A63D8);
  font-weight: 700;
}

.desc-toggle:hover {
  border-color: var(--primary, #0A63D8);
}

/* WooCommerce HTML: calmer headings, readable lists and tables */
.product-description :deep(h1),
.product-description :deep(h2) {
  margin: 20px 0 10px;
  font-size: clamp(18px, 2vw, 22px);
  text-align: start;
}

.product-description :deep(h3),
.product-description :deep(h4) {
  margin: 18px 0 8px;
  font-size: 16px;
}

.product-description :deep(p) {
  margin-bottom: 12px;
  color: #4a5168;
  text-align: start;
}

.product-description :deep(ul),
.product-description :deep(ol) {
  padding-inline-start: 20px;
  color: #4a5168;
}

.product-description :deep(table) {
  width: 100%;
  margin: 12px 0;
  border-collapse: collapse;
  font-size: 14px;
}

.product-description :deep(td),
.product-description :deep(th) {
  padding: 8px 10px;
  border: 1px solid #eef1f7;
}

/* ---------- related ---------- */
.related-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;
}

.related-title {
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 0;
  font-size: clamp(20px, 2.4vw, 26px);
}

.see-all {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border: 1px solid #e1e5ef;
  border-radius: 999px;
  background: #fff;
  color: var(--secondary, #0F1E4A);
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
}

.see-all:hover {
  border-color: var(--primary, #0A63D8);
  color: var(--primary, #0A63D8);
}

:global([dir="rtl"] .flip-rtl) {
  transform: scaleX(-1);
}

/* ---------- photo viewer ---------- */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 10080;
  display: grid;
  place-items: center;
  padding: 56px 16px;
  background: rgba(8, 14, 40, .94);
}

.lb-img {
  max-width: min(92vw, 1100px);
  max-height: 84vh;
  object-fit: contain;
  border-radius: 12px;
  background: #fff;
  user-select: none;
}

.lb-close,
.lb-nav {
  position: absolute;
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, .14);
  color: #fff;
  font-size: 18px;
  transition: background .15s ease;
}

.lb-close:hover,
.lb-nav:hover {
  background: rgba(255, 255, 255, .28);
}

.lb-close {
  top: 16px;
  inset-inline-end: 16px;
}

.lb-nav {
  top: 50%;
  transform: translateY(-50%);
}

.lb-prev { inset-inline-start: 16px; }
.lb-next { inset-inline-end: 16px; }

:global([dir="rtl"] .lightbox .lb-nav i) {
  transform: scaleX(-1);
}

.lb-count {
  position: absolute;
  bottom: 18px;
  left: 50%;
  transform: translateX(-50%);
  padding: 4px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, .14);
  color: #fff;
  font-size: 13px;
  font-weight: 600;
}

@media (max-width: 575.98px) {
  .lb-nav {
    top: auto;
    bottom: 12px;
    transform: none;
  }
}

/* ---------- sticky action bar (phones) ---------- */
/* drops to the bottom edge while the bottom nav is tucked away */
:global(html.bottom-nav-hidden .sticky-cta) {
  bottom: calc(12px + env(safe-area-inset-bottom));
}

.sticky-cta {
  position: fixed;
  inset-inline: 12px;
  bottom: calc(92px + env(safe-area-inset-bottom));
  z-index: 998;
  transition: bottom .3s cubic-bezier(.2, .8, .2, 1);
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: 480px;
  margin-inline: auto;
  padding: 10px 10px 10px 16px;
  padding-inline: 16px 10px;
  border-radius: 18px;
  background: #fff;
  border: 1px solid rgba(15, 30, 74, .08);
  box-shadow: 0 12px 32px rgba(15, 30, 74, .2);
}

.sticky-info {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 0;
  line-height: 1.25;
}

.sticky-name {
  overflow: hidden;
  color: #6b7390;
  font-size: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.sticky-price {
  font-size: 17px;
}

.sticky-cta .btn {
  flex: none;
  min-height: 42px;
}

.sticky-cta-enter-active,
.sticky-cta-leave-active {
  transition: transform .25s ease, opacity .25s ease;
}

.sticky-cta-enter-from,
.sticky-cta-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

/* ---------- gallery ---------- */
.product-gallery {
  top: 90px;
}

.gallery-main {
  border-radius: 20px;
  background: #fff;
  border: 1px solid rgba(10, 99, 216, 0.1);
  overflow: hidden;
}

/* Whole product visible: square frame, image contained, never cropped */
.gallery-frame {
  display: block;
  width: 100%;
  padding: 0;
  border: 0;
  aspect-ratio: 1 / 1;
  background: #fff;
  cursor: zoom-in;
}

.gallery-frame img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.gallery-main :deep(.swiper-button-prev),
.gallery-main :deep(.swiper-button-next) {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, .9);
  box-shadow: 0 4px 12px rgba(15, 30, 74, .15);
  color: var(--secondary, #0F1E4A);
}

.gallery-main :deep(.swiper-button-prev::after),
.gallery-main :deep(.swiper-button-next::after) {
  font-size: 16px;
  font-weight: 700;
}

.gallery-main :deep(.swiper-pagination-bullet-active) {
  background: var(--primary, #0A63D8) !important;
}

@media (min-width: 768px) {
  .gallery-main :deep(.swiper-pagination) {
    display: none;
  }
}

@media (max-width: 767.98px) {
  .gallery-main :deep(.swiper-button-prev),
  .gallery-main :deep(.swiper-button-next) {
    display: none;
  }
}

.gallery-thumbs {
  margin-top: 12px;
}

.gallery-thumbs :deep(.swiper-slide) {
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border: 2px solid transparent;
  border-radius: 12px;
  background: #fff;
  cursor: pointer;
  opacity: .6;
  transition: opacity .2s ease, border-color .2s ease;
}

.gallery-thumbs :deep(.swiper-slide img) {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.gallery-thumbs :deep(.swiper-slide-thumb-active) {
  border-color: var(--primary, #0A63D8);
  opacity: 1;
}

.gallery-placeholder {
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 20px;
}

/* ---------- summary ---------- */
.product-summary {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.summary-category {
  align-self: flex-start;
  color: var(--primary, #0A63D8);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .03em;
  text-transform: capitalize;
}

.summary-title {
  margin: -8px 0 0;
  font-size: clamp(22px, 2.4vw, 32px);
  line-height: 1.25;
}

.summary-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 12.5px;
  font-weight: 600;
}

.pill .dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: currentColor;
}

.pill-success { background: rgba(25, 135, 84, .1); color: #198754; }
.pill-danger { background: rgba(220, 53, 69, .1); color: #dc3545; }
.pill-promo { background: #dc3545; color: #fff; }
.pill-muted { background: #eef1f7; color: #6b7390; }

.summary-price {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 6px 14px;
  padding: 16px 0;
  border-block: 1px solid #e8ebf3;
}

.price-now {
  font-size: clamp(28px, 3vw, 38px);
  font-weight: 800;
  line-height: 1;
  color: var(--secondary, #0F1E4A);
}

.price-now.is-sale {
  color: #dc3545;
}

.price-old {
  font-size: 18px;
  color: #8a8fa3;
}

.price-save {
  padding: 3px 10px;
  border-radius: 999px;
  background: rgba(220, 53, 69, .1);
  color: #dc3545;
  font-size: 14px;
  font-weight: 700;
}

.price-split {
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 14px;
  color: #6b7390;
}

.summary-excerpt {
  margin: 0;
  color: #4a5168;
  line-height: 1.7;
}

.read-more {
  font-weight: 600;
  white-space: nowrap;
}

.summary-select {
  height: 46px;
  border-radius: 12px;
}

[dir="rtl"] .summary-select {
  padding-left: 2.25rem;
  padding-right: .75rem;
  background-position: left .75rem center;
}

/* ---------- options ---------- */
.variation-picker {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.picker-label {
  color: #6b7390;
  font-size: 14px;
}

.picker-label b {
  color: var(--secondary, #0F1E4A);
}

.pill-online {
  background: rgba(106, 61, 240, .1);
  color: #5a32d6;
}

.option-group {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  gap: 10px;
}

.option-btn {
  padding: 10px 12px;
  border: 1.5px solid #dfe3ee;
  border-radius: 12px;
  background: #fff;
  color: var(--secondary, #0F1E4A);
  font-size: 14px;
  font-weight: 600;
  transition: all .15s ease;
}

.option-btn:hover:not(:disabled) {
  border-color: var(--primary, #0A63D8);
}

.option-btn.active {
  border-color: transparent;
  background: linear-gradient(135deg, #0f2f6d, #164094, #6a3df0);
  color: #fff;
}

.option-btn:disabled {
  opacity: .45;
  text-decoration: line-through;
}

/* ---------- buy ---------- */
.buy-row {
  display: flex;
  gap: 12px;
}

.qty-stepper {
  flex: none;
  display: flex;
  align-items: center;
  height: 52px;
  padding: 4px;
  border: 1.5px solid #dfe3ee;
  border-radius: 999px;
  background: #fff;
}

.qty-stepper button {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 50%;
  background: #f1f3f8;
  color: var(--secondary, #0F1E4A);
}

.qty-stepper button:disabled {
  opacity: .4;
}

.qty-stepper input {
  width: 44px;
  border: 0;
  background: transparent;
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  -moz-appearance: textfield;
}

.qty-stepper input::-webkit-outer-spin-button,
.qty-stepper input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.buy-btn {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  min-height: 52px;
  font-size: 15px;
  font-weight: 700;
}

.whatsapp-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 48px;
  border: 1.5px solid #25d366;
  background: #fff;
  color: #128c4b;
  font-weight: 700;
}

.whatsapp-btn:hover {
  background: #25d366;
  color: #fff;
}

.whatsapp-btn i {
  font-size: 20px;
}

/* ---------- EPAY ---------- */
.epay-checkout {
  padding: 22px;
  border: 1px solid rgba(10, 99, 216, .14);
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 10px 30px rgba(15, 30, 74, .06);
}

.epay-head {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;
}

.epay-icon {
  flex: none;
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 14px;
  background: var(--gs-gradient);
  color: #fff;
  font-size: 20px;
}

.epay-title {
  margin: 0;
  font-size: 18px;
}

.epay-sub {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 2px 0 0;
  color: #198754;
  font-size: 13px;
  font-weight: 600;
}

/* how it works */
.epay-steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin: 0 0 20px;
  padding: 0;
  list-style: none;
}

.epay-steps li {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 10px 8px;
  border-radius: 12px;
  background: #f4f6fb;
  color: #4a5168;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.35;
  text-align: center;
}

.epay-steps span {
  display: grid;
  place-items: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--gs-primary, #0A63D8);
  color: #fff;
  font-size: 11px;
}

/* fields */
.field-label {
  display: block;
  margin-bottom: 6px;
  color: var(--secondary, #0F1E4A);
  font-size: 14px;
  font-weight: 600;
}

.req {
  color: #dc3545;
}

.epay-form .form-control {
  height: 48px;
  border-radius: 12px;
  border-color: #dfe3ee;
  font-size: 15px;
}

.epay-form textarea.form-control {
  height: auto;
}

.epay-form .form-control:focus {
  border-color: var(--primary, #0A63D8);
  box-shadow: 0 0 0 3px rgba(10, 99, 216, .15);
}

.epay-form [aria-invalid="true"] {
  border-color: #dc3545;
  background-color: #fffafa;
}

.field-error {
  margin: 6px 0 0;
  color: #dc3545;
  font-size: 13px;
  font-weight: 500;
}

.field-hint {
  margin: 6px 0 0;
  color: #6b7390;
  font-size: 12.5px;
}

/* phone and email are LTR in both languages, so the icon stays on the left */
.input-icon {
  position: relative;
}

.input-icon i {
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  color: #9aa1b5;
  font-size: 17px;
}

.input-icon .form-control {
  padding-left: 42px;
}

.add-note {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0;
  border: 0;
  background: none;
  color: var(--primary, #0A63D8);
  font-size: 14px;
  font-weight: 600;
}

/* amount */
.pay-summary {
  margin: 20px 0 16px;
  padding: 14px 16px;
  border-radius: 14px;
  background: #f4f6fb;
}

.pay-line {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
  font-size: 14px;
}

.pay-line + .pay-line {
  margin-top: 6px;
}

.pay-line.muted {
  color: #6b7390;
}

.pay-now strong {
  font-size: 22px;
  color: var(--secondary, #0F1E4A);
}

.secure-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px 14px;
  margin-top: 12px;
  color: #6b7390;
  font-size: 12.5px;
}

.secure-text {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.card-logos {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.card-logos img {
  height: 26px;
  width: auto;
}

.epay-notice {
  display: flex;
  gap: 10px;
  margin: 16px 0 0;
  padding: 12px 14px;
  border-radius: 12px;
  background: #ecfbf2;
  color: #1d5e3a;
  font-size: 13.5px;
  line-height: 1.6;
}

.epay-notice i {
  margin-top: 2px;
  font-size: 18px;
  color: #25d366;
}

.epay-unavailable {
  display: flex;
  align-items: center;
  gap: 16px;
}

.epay-unavailable p {
  margin: 4px 0 0;
  color: #6b7390;
  font-size: 14px;
}

@media (max-width: 575.98px) {
  .epay-checkout {
    padding: 16px;
  }

  .epay-steps li {
    font-size: 11px;
  }
}

/* ---------- trust & meta ---------- */
.trust-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.trust-list li {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 12px 8px;
  border-radius: 14px;
  background: #fff;
  border: 1px solid #e8ebf3;
  color: var(--secondary, #0F1E4A);
  font-size: 12.5px;
  font-weight: 600;
  text-align: center;
  line-height: 1.35;
}

.trust-list i {
  font-size: 22px;
  color: var(--primary, #0A63D8);
}

.summary-meta {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px 16px;
  align-items: start;
  margin: 0;
  font-size: 13px;
}

.summary-meta dt {
  padding-top: 4px;
  color: #6b7390;
  font-weight: 600;
}

.summary-meta dd {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 0;
}

.meta-chip {
  padding: 3px 10px;
  border-radius: 999px;
  background: #eef1f7;
  color: var(--secondary, #0F1E4A);
  text-transform: capitalize;
}

.meta-chip:hover {
  background: rgba(10, 99, 216, .12);
  color: var(--primary, #0A63D8);
}

.share a,
.share button {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border: 0;
  border-radius: 50%;
  background: #eef1f7;
  color: var(--secondary, #0F1E4A);
  transition: all .15s ease;
}

.share a:hover,
.share button:hover {
  background: var(--primary, #0A63D8);
  color: #fff;
}

@media (max-width: 575.98px) {
  .trust-list {
    grid-template-columns: 1fr;
  }

  .trust-list li {
    flex-direction: row;
    justify-content: flex-start;
    padding: 10px 14px;
    text-align: start;
  }
}
</style>
