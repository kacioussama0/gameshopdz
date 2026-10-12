<script setup lang="ts">
const { cart, loadCart, keyOf, removeItem, updateItem, totalPrice, itemsCount } = useLocalCart()

onMounted(loadCart)

const { t } = useI18n()

const formatPrice = (value: number | string) =>
    `${Number(value).toLocaleString('fr-FR')} ${t('common.currency')}`
</script>

<template>
  <div class="offcanvas offcanvas-end cart-drawer" data-bs-scroll="false" tabindex="-1" id="offcanvasRight" aria-labelledby="cart-drawer-title">
    <div class="drawer-header">
      <h2 class="drawer-title" id="cart-drawer-title">
        <i class="iconly-Curved-Buy" aria-hidden="true"></i>
        {{ $t('header.myCart') }}
        <span v-if="itemsCount" class="count">{{ itemsCount }}</span>
      </h2>
      <button type="button" class="close-btn" data-bs-dismiss="offcanvas" :aria-label="$t('common.close')">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>

    <!-- Items -->
    <template v-if="cart.length">
      <ul class="drawer-items">
        <li v-for="item in cart" :key="keyOf(item)" class="drawer-item">
          <NuxtLink :to="item.slug ? `/shop/product/${item.slug}` : '/cart'" class="item-media" data-bs-dismiss="offcanvas">
            <img :src="item.image" :alt="item.name" width="72" height="72" loading="lazy" />
          </NuxtLink>

          <div class="item-body">
            <NuxtLink :to="item.slug ? `/shop/product/${item.slug}` : '/cart'" class="item-name" data-bs-dismiss="offcanvas">
              {{ item.name }}
            </NuxtLink>

            <div v-if="item.variation?.length" class="item-options">
              <span v-for="v in item.variation" :key="v.attribute">{{ v.value }}</span>
            </div>

            <div class="item-row">
              <div class="qty" role="group" :aria-label="$t('common.quantity')">
                <button type="button" :aria-label="$t('product.decrease')" @click="updateItem(keyOf(item), item.quantity - 1)">
                  <i :class="item.quantity > 1 ? 'fa-solid fa-minus' : 'fa-regular fa-trash-can'"></i>
                </button>
                <span>{{ item.quantity }}</span>
                <button type="button" :aria-label="$t('product.increase')" @click="updateItem(keyOf(item), item.quantity + 1)">
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>

              <span class="item-total">{{ formatPrice(Number(item.price) * item.quantity) }}</span>
            </div>
          </div>

          <button type="button" class="remove-btn" :aria-label="$t('cart.remove', { name: item.name })" @click="removeItem(keyOf(item))">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
      </ul>

      <div class="drawer-footer">
        <div class="subtotal">
          <span>{{ $t('common.subtotal') }}</span>
          <strong>{{ formatPrice(totalPrice) }}</strong>
        </div>
        <p class="shipping-note">
          <i class="fa-solid fa-truck-fast" aria-hidden="true"></i>
          {{ $t('cart.shippingAtCheckout') }}
        </p>

        <NuxtLink to="/checkout" class="btn btn-primary btn-lg btn-block" data-bs-dismiss="offcanvas">
          {{ $t('cart.checkout') }}
          <i class="fa-solid fa-arrow-right flip-rtl"></i>
        </NuxtLink>
        <NuxtLink to="/cart" class="btn btn-outline-primary btn-block mt-2" data-bs-dismiss="offcanvas">
          {{ $t('cart.viewCart') }}
        </NuxtLink>
      </div>
    </template>

    <!-- Empty -->
    <div v-else class="drawer-empty">
      <AstroBot mood="sad" :size="120" />
      <h3>{{ $t('cart.empty') }}</h3>
      <p>{{ $t('cart.emptyCanvasText') }}</p>
      <NuxtLink to="/shop" class="btn btn-primary" data-bs-dismiss="offcanvas">
        {{ $t('cart.continueShopping') }}
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.cart-drawer {
  --bs-offcanvas-width: min(420px, 100vw);
  display: flex;
  flex-direction: column;
  background: #f6f7fb;
  border: 0 !important;
}

.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 20px;
  background: #fff;
  border-bottom: 1px solid #e8ebf3;
}

.drawer-title {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  font-size: 18px;
}

.drawer-title i {
  font-size: 22px;
  color: var(--gs-primary, #0A63D8);
}

.count {
  display: grid;
  place-items: center;
  min-width: 24px;
  height: 24px;
  padding: 0 7px;
  border-radius: 999px;
  background: var(--gs-gradient);
  color: #fff;
  font-size: 12px;
}

.close-btn {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border: 0;
  border-radius: 50%;
  background: #f1f3f8;
  color: var(--gs-ink, #0F1E4A);
}

.drawer-items {
  flex: 1;
  overflow-y: auto;
  margin: 0;
  padding: 12px;
  list-style: none;
}

.drawer-item {
  position: relative;
  display: grid;
  grid-template-columns: 72px 1fr;
  gap: 12px;
  padding: 12px;
  padding-inline-end: 36px;
  border-radius: 16px;
  background: #fff;
}

.drawer-item + .drawer-item {
  margin-top: 10px;
}

.item-media img {
  width: 72px;
  height: 72px;
  object-fit: contain;
  border-radius: 12px;
  border: 1px solid #eef1f7;
  background: #fff;
}

.item-body {
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
}

.item-name {
  color: var(--gs-ink, #0F1E4A);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.35;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.item-options {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.item-options span {
  padding: 1px 8px;
  border-radius: 999px;
  background: #eef1f7;
  color: #4a5168;
  font-size: 12px;
  font-weight: 600;
}

.item-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 2px;
}

.qty {
  display: inline-flex;
  align-items: center;
  padding: 3px;
  border: 1px solid #e1e5ef;
  border-radius: 999px;
  background: #fff;
}

.qty button {
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border: 0;
  border-radius: 50%;
  background: #f1f3f8;
  color: var(--gs-ink, #0F1E4A);
  font-size: 12px;
}

.qty span {
  min-width: 30px;
  text-align: center;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}

.item-total {
  font-weight: 800;
  white-space: nowrap;
}

.remove-btn {
  position: absolute;
  top: 10px;
  inset-inline-end: 10px;
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: #9aa1b5;
}

.remove-btn:hover {
  background: #fdecee;
  color: #dc3545;
}

.drawer-footer {
  padding: 16px 20px calc(20px + env(safe-area-inset-bottom));
  background: #fff;
  border-top: 1px solid #e8ebf3;
  box-shadow: 0 -8px 24px rgba(15, 30, 74, .06);
}

.subtotal {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  font-size: 16px;
}

.subtotal strong {
  font-size: 22px;
}

.shipping-note {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 6px 0 14px;
  color: #6b7390;
  font-size: 13px;
}

.drawer-empty {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 32px 24px;
  text-align: center;
}

.drawer-empty h3 {
  margin: 8px 0 0;
  font-size: 20px;
}

.drawer-empty p {
  margin-bottom: 12px;
  color: #6b7390;
}

:global([dir="rtl"] .flip-rtl) {
  transform: scaleX(-1);
}
</style>
