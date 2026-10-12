<script setup lang="ts">
  import Header3 from "~/components/Header3.vue"

  const {
    cart,
    keyOf,
    removeItem,
    updateItem,
    totalPrice,
    itemsCount
  } = useLocalCart()

  const { t } = useI18n()

  useHead({
    title: () => t('seo.cart'),
    meta: [
      {
        name: 'description',
        content: () => t('seo.shortDescription')
      },
      { name: 'robots', content: 'noindex, follow' },
    ]
  })

  const formatPrice = (value: number | string) =>
      `${Number(value).toLocaleString('fr-FR')} ${t('common.currency')}`

  const productLink = (item: any) => item.slug ? `/shop/product/${item.slug}` : '/shop'
</script>

<template>
  <header class="site-header mo-left header style-2">
    <Header3 />
  </header>

  <div class="page-content bg-light">
    <section class="content-inner cart-page">
      <div class="container">

        <div class="page-title">
          <img src="~/assets/images/astro-cart.png" alt="" width="64" height="88" />
          <div>
            <h1>{{ $t('cart.title') }}</h1>
            <p v-if="cart.length">{{ $t('cart.itemsCount', { count: itemsCount }, itemsCount) }}</p>
          </div>
        </div>

        <div class="cart-layout" v-if="cart.length">

          <!-- Items -->
          <ul class="cart-items">
            <li v-for="item in cart" :key="keyOf(item)" class="cart-item">
              <NuxtLink :to="productLink(item)" class="item-media">
                <img :src="item.image" :alt="item.name" width="110" height="110" loading="lazy" />
              </NuxtLink>

              <div class="item-info">
                <NuxtLink :to="productLink(item)" class="item-name">{{ item.name }}</NuxtLink>

                <div v-if="item.variation?.length" class="item-options">
                  <span v-for="v in item.variation" :key="v.attribute">{{ v.value }}</span>
                </div>

                <span class="item-unit">{{ formatPrice(item.price) }}</span>
              </div>

              <div class="item-actions">
                <div class="qty" role="group" :aria-label="$t('common.quantity')">
                  <button type="button" :aria-label="$t('product.decrease')" @click="updateItem(keyOf(item), item.quantity - 1)">
                    <i :class="item.quantity > 1 ? 'fa-solid fa-minus' : 'fa-regular fa-trash-can'"></i>
                  </button>
                  <span>{{ item.quantity }}</span>
                  <button type="button" :aria-label="$t('product.increase')" @click="updateItem(keyOf(item), item.quantity + 1)">
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </div>

                <strong class="item-total">{{ formatPrice(Number(item.price) * item.quantity) }}</strong>
              </div>

              <button type="button" class="remove-btn" :aria-label="$t('cart.remove', { name: item.name })" @click="removeItem(keyOf(item))">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </li>
          </ul>

          <!-- Summary -->
          <aside class="cart-summary">
            <h2>{{ $t('cart.summary') }}</h2>

            <div class="summary-row">
              <span>{{ $t('common.subtotal') }} ({{ itemsCount }})</span>
              <span>{{ formatPrice(totalPrice) }}</span>
            </div>
            <div class="summary-row muted">
              <span>{{ $t('checkout.shippingMethod') }}</span>
              <span>{{ $t('cart.shippingNextStep') }}</span>
            </div>

            <div class="summary-total">
              <span>{{ $t('common.total') }}</span>
              <strong>{{ formatPrice(totalPrice) }}</strong>
            </div>

            <NuxtLink to="/checkout" class="btn btn-primary btn-lg btn-block">
              {{ $t('cart.checkout') }}
              <i class="fa-solid fa-arrow-right flip-rtl"></i>
            </NuxtLink>
            <NuxtLink to="/shop" class="btn btn-outline-primary btn-block mt-2">
              {{ $t('cart.continueShopping') }}
            </NuxtLink>

            <p class="cod-note">
              <i class="fa-solid fa-truck-fast" aria-hidden="true"></i>
              {{ $t('cart.shippingNotice') }}
            </p>

            <ul class="trust">
              <li><i class="iconly-Curved-ShieldDone"></i>{{ $t('cart.warranty') }}</li>
              <li><i class="iconly-Curved-TimeSquare"></i>{{ $t('cart.express') }}</li>
              <li><i class="iconly-Curved-User"></i>{{ $t('cart.support') }}</li>
              <li><i class="iconly-Curved-Star"></i>{{ $t('cart.certified') }}</li>
            </ul>
          </aside>
        </div>

        <!-- Empty -->
        <div class="cart-empty" v-else>
          <AstroBot mood="sad" :size="150" />
          <h2>{{ $t('cart.empty') }}</h2>
          <p>{{ $t('cart.emptyPageText') }}</p>
          <NuxtLink to="/shop" class="btn btn-primary btn-lg">
            {{ $t('cart.startShopping') }}
          </NuxtLink>
        </div>

      </div>
    </section>
  </div>
</template>

<style scoped>
.page-title {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 28px;
}

.page-title img {
  width: 56px;
  height: auto;
}

.page-title h1 {
  margin: 0;
  font-size: clamp(26px, 3vw, 34px);
}

.page-title p {
  margin: 2px 0 0;
  color: #6b7390;
}

.cart-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 28px;
  align-items: start;
}

/* ---------- items ---------- */
.cart-items {
  margin: 0;
  padding: 0;
  list-style: none;
}

.cart-item {
  position: relative;
  display: grid;
  grid-template-columns: 110px minmax(0, 1fr) auto;
  align-items: center;
  gap: 18px;
  padding: 16px;
  padding-inline-end: 48px;
  border-radius: 18px;
  background: #fff;
  border: 1px solid #eef1f7;
}

.cart-item + .cart-item {
  margin-top: 12px;
}

.item-media img {
  width: 110px;
  height: 110px;
  object-fit: contain;
  border-radius: 14px;
  background: #fff;
  border: 1px solid #eef1f7;
}

.item-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
}

.item-name {
  color: var(--gs-ink, #0F1E4A);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.35;
}

.item-name:hover {
  color: var(--gs-primary, #0A63D8);
}

.item-options {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.item-options span {
  padding: 2px 10px;
  border-radius: 999px;
  background: #eef1f7;
  color: #4a5168;
  font-size: 12.5px;
  font-weight: 600;
}

.item-unit {
  color: #6b7390;
  font-size: 14px;
}

.item-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
}

.qty {
  display: inline-flex;
  align-items: center;
  padding: 4px;
  border: 1px solid #e1e5ef;
  border-radius: 999px;
  background: #fff;
}

.qty button {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border: 0;
  border-radius: 50%;
  background: #f1f3f8;
  color: var(--gs-ink, #0F1E4A);
}

.qty span {
  min-width: 36px;
  text-align: center;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}

.item-total {
  font-size: 18px;
  white-space: nowrap;
}

.remove-btn {
  position: absolute;
  top: 12px;
  inset-inline-end: 12px;
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: #9aa1b5;
}

.remove-btn:hover {
  background: #fdecee;
  color: #dc3545;
}

/* ---------- summary ---------- */
.cart-summary {
  position: sticky;
  top: 140px;
  padding: 22px;
  border-radius: 20px;
  background: #fff;
  border: 1px solid #eef1f7;
}

.cart-summary h2 {
  margin-bottom: 16px;
  font-size: 20px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 6px 0;
  font-size: 14px;
}

.summary-row.muted {
  color: #6b7390;
}

.summary-total {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 12px 0 18px;
  padding-top: 14px;
  border-top: 1px dashed #dfe3ee;
  font-size: 16px;
}

.summary-total strong {
  font-size: 26px;
}

.cod-note {
  display: flex;
  gap: 10px;
  margin: 16px 0 0;
  padding: 12px;
  border-radius: 12px;
  background: #f1f4fb;
  color: #4a5168;
  font-size: 13px;
  line-height: 1.5;
}

.cod-note i {
  margin-top: 2px;
  color: var(--gs-primary, #0A63D8);
}

.trust {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 16px 0 0;
  padding: 0;
  list-style: none;
}

.trust li {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--gs-ink, #0F1E4A);
  font-size: 12.5px;
  font-weight: 600;
}

.trust i {
  font-size: 18px;
  color: var(--gs-primary, #0A63D8);
}

/* ---------- empty ---------- */
.cart-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 48px 24px;
  border-radius: 24px;
  background: #fff;
  text-align: center;
}

.cart-empty h2 {
  margin: 12px 0 0;
  font-size: 24px;
}

.cart-empty p {
  max-width: 420px;
  margin-bottom: 16px;
  color: #6b7390;
}

:global([dir="rtl"] .flip-rtl) {
  transform: scaleX(-1);
}

/* ---------- responsive ---------- */
@media (max-width: 991.98px) {
  .cart-layout {
    grid-template-columns: 1fr;
  }

  .cart-summary {
    position: static;
  }
}

@media (max-width: 575.98px) {
  .cart-item {
    grid-template-columns: 84px minmax(0, 1fr);
    gap: 12px;
    padding: 12px;
    padding-inline-end: 40px;
  }

  .item-media img {
    width: 84px;
    height: 84px;
  }

  .item-name {
    font-size: 14px;
  }

  /* quantity + total move under the product info */
  .item-actions {
    grid-column: 1 / -1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
