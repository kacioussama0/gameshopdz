<template>
  <section class="mobile-bottom-nav new-gradient d-lg-none">
    <div class="container">
      <div class="nav-wrapper">

        <NuxtLink to="/" class="nav-item" aria-label="Accueil">
          <i class="iconly-Curved-Home"></i>
          <span>Accueil</span>
        </NuxtLink>

        <NuxtLink to="/cart" class="nav-item position-relative" aria-label="Panier">
          <div class="icon-wrapper">
            <span v-if="itemsCount > 0" class="badge">
              {{ itemsCount }}
            </span>
            <i class="iconly-Curved-Bag"></i>
          </div>
          <span>Panier</span>
        </NuxtLink>

        <NuxtLink to="/shop" class="nav-item" aria-label="Shop">
          <i class="iconly-Curved-Game"></i>
          <span>Shop</span>
        </NuxtLink>

        <a href="tel:0550779973" class="nav-item" aria-label="Contact">
          <i class="iconly-Curved-Call"></i>
          <span>Contact</span>
        </a>

      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  itemsCount: {
    type: Number,
    default: 0
  }
})
</script>

<style scoped>
.mobile-bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(45deg, #111, #333);
  z-index: 999;
  padding: 8px 25px;
}

.nav-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: white;
  text-decoration: none;
}

.nav-item i {
  font-size: 20px;
}

.icon-wrapper {
  position: relative;
}

.badge {
  position: absolute;
  top: -5px;
  right: -10px;
  background: red;
  color: white;
  font-size: 11px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>