<template>
  <section class="mobile-bottom-nav container rounded-pill d-lg-none">
    <div class="container">
      <div class="nav-wrapper">

        <NuxtLink to="/" class="nav-item" :class="`${route.path === '/' ? 'is-active' : ''}`" aria-label="Accueil">
          <i :class="`${route.path === '/' ? 'iconly-Bold-Home' : 'iconly-Curved-Home'}`"></i>
          <span>Accueil</span>
        </NuxtLink>

        <NuxtLink to="/cart" class="nav-item position-relative" :class="`${route.path.includes('/cart') ? 'is-active' : ''}`" aria-label="Panier">
          <div class="icon-wrapper">
            <span v-if="itemsCount > 0" class="badge">
              {{ itemsCount }}
            </span>
            <i :class="`${route.path.includes('/cart') ? 'iconly-Bold-Bag' : 'iconly-Curved-Bag'}`"></i>
          </div>
          <span>Panier</span>
        </NuxtLink>

        <NuxtLink to="/shop" class="nav-item" aria-label="Shop" :class="`${route.path.includes('/shop') ? 'is-active' : ''}`" >
          <i :class="`${route.path.includes('/shop') ? 'iconly-Bold-Game' : 'iconly-Curved-Game'}`"></i>
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

const route = useRoute();



defineProps({
  itemsCount: {
    type: Number,
    default: 0
  }
})
</script>

<style scoped>


.is-active {
  font-weight: bold;
  color: rgb(100 22 220 / 0.9);
}


.mobile-bottom-nav {
  position: fixed;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);

  width: calc(100% - 32px);
  max-width: 500px;

  background: linear-gradient(
      135deg,
      rgb(100 22 220 / 0.80),
      rgb(16 50 116 / 0.6)
  );

  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);

  border: 1px solid rgba(255, 255, 255, 0.2);

  box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.25);

  border-radius: 24px;

  z-index: 999;
  padding: 12px;
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
  color: rgba(255, 255, 255, 0.8);
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