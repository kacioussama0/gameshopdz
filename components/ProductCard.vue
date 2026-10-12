<script lang="ts" setup>

import {useLocalCart} from "~/composables/useLocalCart";

const { t } = useI18n()

const props = defineProps<{
  product: Object;
  showStock?: boolean,
}>();

const { addItem } = useLocalCart()

// Short "Added ✓" state on the button after adding
const justAdded = ref(false)
let addedTimer: ReturnType<typeof setTimeout> | null = null

const addToCart = (product: any) => {
  try {
    addItem(product)
    justAdded.value = true
    if (addedTimer) clearTimeout(addedTimer)
    addedTimer = setTimeout(() => (justAdded.value = false), 1600)
  } catch (error) {
    console.log(error)
  }
}

onBeforeUnmount(() => addedTimer && clearTimeout(addedTimer))

// Group thousands ("12 500") the same way in both languages
const formatPrice = (value: number | string) =>
    `${Number(value).toLocaleString('fr-FR')} ${t('common.currency')}`

// Variable products: "From 3 900 DA" instead of a long min – max range
const variantPrices = computed(() =>
    ((props.product as any)?.variations || [])
        .map((v: any) => Number(v.price))
        .filter((n: number) => n > 0)
)

const hasPriceRange = computed(() =>
    variantPrices.value.length > 1 && Math.min(...variantPrices.value) !== Math.max(...variantPrices.value)
)

// Rendered width of a card: 2 columns on phones, 3 on tablets, 4–5 on desktop
const IMAGE_SIZES = '(max-width: 576px) 50vw, (max-width: 992px) 33vw, (max-width: 1400px) 25vw, 20vw'

const discount = computed(() => {
  const regular = Number(props.product?.regular_price)
  const price = Number(props.product?.price)
  if (!props.product?.on_sale || !regular || !price) return 0
  return Math.floor(((regular - price) / regular) * 100)
})

const CONDITION_ICONS: Record<string, string> = {
  new: 'fa-solid fa-star',
  used: 'fa-solid fa-rotate',
  digital: 'fa-solid fa-cloud-arrow-down',
}

const condition = computed(() => {
  const product: any = props.product
  if (product.occasion || product.name.includes('OCCASION')) return 'used'
  // E-pay products are codes, cards and subscriptions delivered online
  if (product.is_epay || product.categories?.some((category: any) => /digital/i.test(category.name))) return 'digital'
  return 'new'
})

const isOutOfStock = computed(() => (props.product as any)?.stock && (props.product as any).stock !== 'instock')

const productLink = computed(() => `/shop/product/${(props.product as any)?.slug}`)
</script>

<template>
  <article class="product-card" :class="{ 'is-oos': isOutOfStock }" v-if="product">
    <div class="product-media">
      <!-- WordPress already generates 300/600/768px versions: let the browser pick
           the one matching the card width and screen density instead of upscaling
           the 300px cropped thumbnail -->
      <img
          :src="product.image?.src || product.thumbnail"
          :srcset="product.image?.srcset || undefined"
          :sizes="product.image?.srcset ? IMAGE_SIZES : undefined"
          :alt="product.image?.alt || product.name"
          width="600"
          height="600"
          class="product-img"
          loading="lazy"
          decoding="async"
      />

      <!-- Second photo revealed on hover (desktop) -->
      <img
          v-if="product.hoverImage?.src"
          :src="product.hoverImage.src"
          :srcset="product.hoverImage.srcset || undefined"
          :sizes="product.hoverImage.srcset ? IMAGE_SIZES : undefined"
          alt=""
          aria-hidden="true"
          width="600"
          height="600"
          class="product-img hover-img"
          loading="lazy"
          decoding="async"
      />

      <span class="product-badge" :class="`is-${condition}`">
        <i :class="CONDITION_ICONS[condition]" aria-hidden="true"></i>
        {{ $t(`product.${condition}`) }}
      </span>
      <span class="product-badge is-discount" dir="ltr" v-if="discount > 0">-{{ discount }}%</span>

      <span v-if="isOutOfStock" class="oos-ribbon">{{ $t('product.outOfStock') }}</span>
    </div>

    <div class="product-body">
      <h3 class="product-title">
        <NuxtLink :to="productLink" class="stretched-link">
          {{ product.name }}
        </NuxtLink>
      </h3>

      <div class="product-price">
        <template v-if="product.on_sale && !hasPriceRange">
          <span class="price is-sale">{{ formatPrice(product.price) }}</span>
          <del class="price-old">{{ formatPrice(product.regular_price) }}</del>
        </template>

        <template v-else-if="hasPriceRange">
          <span class="price-from">{{ $t('product.from') }}</span>
          <span class="price" :class="{ 'is-sale': product.on_sale }">{{ formatPrice(Math.min(...variantPrices)) }}</span>
        </template>

        <span class="price" v-else-if="Number(product.price) > 0">{{ formatPrice(product.price) }}</span>
      </div>

      <div v-if="showStock && !isOutOfStock" class="product-stock in-stock">
        <span class="dot"></span>
        {{ $t('common.available') }}
      </div>

      <NuxtLink
          :to="productLink"
          class="btn btn-primary product-btn"
          v-if="(product.is_epay || product.is_prepay) && !isOutOfStock"
      >
        <i class="fa fa-credit-card"></i>
        <span class="btn-text">{{ product.is_prepay ? $t('product.reserveOnline') : $t('product.epay') }}</span>
      </NuxtLink>

      <NuxtLink
          :to="productLink"
          class="btn btn-primary product-btn"
          v-else-if="product.type == 'variable' && !isOutOfStock"
      >
        <i class="fa-solid fa-sliders"></i>
        <span class="btn-text">{{ $t('product.chooseOptions') }}</span>
      </NuxtLink>

      <button
          type="button"
          class="btn btn-primary product-btn"
          :class="{ 'is-added': justAdded }"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          @click="addToCart(product)"
          v-else-if="!isOutOfStock"
      >
        <i :class="justAdded ? 'fa-solid fa-check' : 'fa fa-cart-plus'"></i>
        <span class="btn-text">
          <template v-if="justAdded">{{ $t('product.added') }}</template>
          <template v-else>
            <span class="label-long">{{ $t('common.addToCart') }}</span>
            <span class="label-short">{{ $t('product.add') }}</span>
          </template>
        </span>
      </button>

      <NuxtLink
          :to="productLink"
          class="btn btn-outline-primary product-btn"
          v-else
      >
        <i class="fa-regular fa-eye"></i>
        <span class="btn-text">{{ $t('product.view') }}</span>
      </NuxtLink>
    </div>
  </article>
</template>


<style scoped>
.product-card {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  background: #fff;
  border: 1px solid rgba(10, 99, 216, 0.12);
  border-radius: 16px;
  box-shadow: 0 2px 10px rgba(15, 30, 74, 0.05);
  transition: transform .2s ease, box-shadow .2s ease;
}

@media (hover: hover) {
  .product-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 30px rgba(15, 30, 74, 0.12);
  }

  .product-card:hover .product-img {
    transform: scale(1.04);
  }
}

/* Square, uncropped product shot whatever the column width */
.product-media {
  position: relative;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: #fff;
}

.product-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  transition: transform .3s ease;
}

.product-badge {
  --edge: 10px;
  position: absolute;
  top: var(--edge);
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding-block: 4px;
  padding-inline: 8px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: .01em;
  inset-inline-start: var(--edge);
  box-shadow: 0 2px 6px rgba(15, 30, 74, .15);
}

.product-badge i {
  font-size: 9px;
}

/* New: brand blue · Used: warm amber · Digital: brand violet */
.product-badge.is-new {
  background: linear-gradient(135deg, #0A63D8, #2f8bff);
  color: #fff;
}

.product-badge.is-used {
  background: linear-gradient(135deg, #ff9f1a, #ffbf3f);
  color: #3d2600;
}

.product-badge.is-digital {
  background: linear-gradient(135deg, #6a3df0, #8f6bff);
  color: #fff;
}

/* dir="ltr" keeps "-15%" readable, so place it with physical sides */
.product-badge.is-discount {
  left: auto;
  right: var(--edge);
  background: #dc3545;
  color: #fff;
}

:global([dir="rtl"] .product-badge.is-discount) {
  right: auto;
  left: var(--edge);
}

.product-body {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 6px;
  padding: 12px 14px 14px;
}

/* Two lines reserved so prices and buttons line up across a row */
.product-title {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.4;
  min-height: calc(2 * 1.4em);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-title a {
  color: var(--gs-ink, #0F1E4A);
  transition: color .15s ease;
}

.product-card:hover .product-title a {
  color: var(--primary, #0A63D8);
}

/* Keyboard users see which card they're on (the title link covers the card) */
.product-card:focus-within {
  box-shadow: 0 0 0 3px rgba(10, 99, 216, .35);
}

/* ---------- second photo on hover ---------- */
.hover-img {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity .35s ease, transform .3s ease;
}

@media (hover: hover) {
  .product-card:hover .hover-img {
    opacity: 1;
  }
}

/* ---------- out of stock ---------- */
.is-oos .product-img {
  filter: grayscale(.85);
  opacity: .55;
}

.oos-ribbon {
  position: absolute;
  inset-inline: 0;
  bottom: 0;
  z-index: 2;
  padding: 6px 10px;
  background: rgba(15, 30, 74, .82);
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  letter-spacing: .02em;
}

.is-oos .price {
  color: #8a8fa3;
}

.price-from {
  color: #6b7390;
  font-size: 12px;
  font-weight: 600;
}

.product-price {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  column-gap: 8px;
}

.price {
  font-size: 16px;
  font-weight: 800;
  color: var(--secondary, #0F1E4A);
  white-space: nowrap;
}

.price.is-sale {
  color: #dc3545;
}

.price-old {
  font-size: 12px;
  color: #8a8fa3;
  white-space: nowrap;
}

.product-stock {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
}

.product-stock .dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: currentColor;
}

.product-stock.in-stock { color: #198754; }
.product-stock.out-of-stock { color: #dc3545; }

/* Buttons sit above the card-wide stretched link and stick to the bottom */
.product-btn {
  position: relative;
  z-index: 2;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  min-height: 40px;
  padding: 8px 12px;
  font-size: 13px;
  line-height: 1.2;
}

.product-btn .btn-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.label-short {
  display: none;
}

/* "Added ✓" confirmation */
.product-btn.is-added {
  background: #198754 !important;
  box-shadow: 0 6px 16px rgba(25, 135, 84, .3);
}

/* Phones: two columns of ~170px */
@media (max-width: 576px) {
  .product-body {
    gap: 4px;
    padding: 10px 10px 12px;
  }

  .product-title {
    font-size: 12.5px;
  }

  .price {
    font-size: 14px;
  }

  .price-old {
    font-size: 11px;
  }

  .product-badge {
    --edge: 8px;
    padding: 3px 7px;
    font-size: 10px;
  }

  .product-btn {
    min-height: 36px;
    padding: 6px 8px;
    gap: 6px;
    font-size: 11.5px;
  }

  /* narrow cards: "Ajouter" instead of "Ajouter au Panier" */
  .label-long {
    display: none;
  }

  .label-short {
    display: inline;
  }

  .oos-ribbon {
    font-size: 10.5px;
    padding: 4px 6px;
  }
}

/* Very narrow screens: icon-only button */
@media (max-width: 359px) {
  .product-btn .btn-text {
    display: none;
  }

  .product-btn i {
    font-size: 15px;
  }
}
</style>
