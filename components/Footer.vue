<script setup lang="ts">
// Top-level shop categories (same ids as the home page category banners)
const shopLinks = [
  { label: 'menu.games', to: '/shop?category=815' },
  { label: 'menu.consoles', to: '/shop?category=821' },
  { label: 'menu.used', to: '/shop?category=854' },
  { label: 'menu.accessories', to: '/shop?category=829' },
  { label: 'menu.digital', to: '/shop?category=844' },
  { label: 'menu.retro', to: '/shop?category=2714' },
]

const socials = [
  { label: 'Facebook', icon: 'fa-facebook-f', to: 'https://www.facebook.com/gameshopdz2' },
  { label: 'Instagram', icon: 'fa-instagram', to: 'https://www.instagram.com/gameshopbackup/' },
  { label: 'TikTok', icon: 'fa-tiktok', to: 'https://www.tiktok.com/@gameshop.dz' },
]

const phones = [
  { display: '0550 77 99 73', tel: '+213550779973' },
  { display: '0793 33 30 23', tel: '+213793333023' },
]

const year = new Date().getFullYear()
</script>

<template>
  <footer class="gs-footer new-gradient">
    <div class="container">
      <div class="footer-grid">

        <!-- Brand -->
        <section class="footer-brand">
          <NuxtLink to="/" class="footer-logo" aria-label="Gameshop">
            <img src="../assets/images/logo-white.svg" alt="Gameshop" width="160" height="48" />
          </NuxtLink>
          <p class="footer-about">{{ $t('footer.about') }}</p>

          <ul class="footer-socials">
            <li v-for="social in socials" :key="social.label">
              <a :href="social.to" target="_blank" rel="noopener" :aria-label="social.label">
                <i class="fa-brands" :class="social.icon"></i>
              </a>
            </li>
          </ul>
        </section>

        <!-- Shop -->
        <nav class="footer-col" :aria-label="$t('footer.shop')">
          <h2 class="footer-title">{{ $t('footer.shop') }}</h2>
          <ul class="footer-links">
            <li v-for="link in shopLinks" :key="link.to">
              <NuxtLink :to="link.to">{{ $t(link.label) }}</NuxtLink>
            </li>
            <li><NuxtLink to="/shop?on_sale=true">{{ $t('home.promotions') }}</NuxtLink></li>
          </ul>
        </nav>

        <!-- Help & contact -->
        <section class="footer-col">
          <h2 class="footer-title">{{ $t('footer.help') }}</h2>
          <ul class="footer-contact">
            <li>
              <i class="iconly-Curved-Location" aria-hidden="true"></i>
              <a href="https://www.google.com/maps?q=36.727715,3.154034" target="_blank" rel="noopener">{{ $t('footer.address') }}</a>
            </li>
            <li v-for="phone in phones" :key="phone.tel">
              <i class="iconly-Curved-Call" aria-hidden="true"></i>
              <a :href="`tel:${phone.tel}`" dir="ltr">{{ phone.display }}</a>
            </li>
            <li>
              <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
              <a href="https://wa.me/213550779973" target="_blank" rel="noopener">{{ $t('footer.whatsapp') }}</a>
            </li>
            <li>
              <i class="iconly-Curved-Buy" aria-hidden="true"></i>
              <NuxtLink to="/cart">{{ $t('bottomNav.cart') }}</NuxtLink>
            </li>
          </ul>
        </section>

        <!-- Map -->
        <section class="footer-map">
          <h2 class="footer-title">{{ $t('footer.store') }}</h2>
          <div class="map-frame">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1598.8926975884606!2d3.1540340000000002!3d36.727715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e526db9752f07%3A0x63b2fec8afa5c3e5!2sGame%20Shop!5e0!3m2!1sen!2sus!4v1771103548678!5m2!1sen!2sus"
                :title="$t('footer.store')"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                allowfullscreen
            ></iframe>
          </div>
        </section>
      </div>

      <!-- Bottom bar -->
      <div class="footer-bottom">
        <p class="copyright">© {{ year }} GameshopDZ. {{ $t('footer.rights') }}</p>

        <ul class="footer-payments" :aria-label="$t('footer.payments')">
          <li><i class="fa-solid fa-truck-fast" aria-hidden="true"></i>{{ $t('checkout.cod') }}</li>
          <li><i class="fa-solid fa-credit-card" aria-hidden="true"></i>CIB / Edahabia</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.gs-footer {
  position: relative;
  padding: 56px 0 24px;
  color: rgba(255, 255, 255, .78);
  font-size: 14px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.3fr .8fr 1fr 1.4fr;
  gap: 40px;
}

.footer-logo img {
  height: 48px;
  width: auto;
}

.footer-about {
  margin: 16px 0 20px;
  max-width: 320px;
  line-height: 1.7;
  color: rgba(255, 255, 255, .78);
}

.footer-title {
  margin-bottom: 16px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
}

.footer-links,
.footer-contact,
.footer-socials,
.footer-payments {
  margin: 0;
  padding: 0;
  list-style: none;
}

.footer-links li + li {
  margin-top: 10px;
}

.footer-links a,
.footer-contact a {
  color: rgba(255, 255, 255, .78);
  transition: color .15s ease;
}

.footer-links a:hover,
.footer-contact a:hover {
  color: #fff;
}

.footer-contact li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  line-height: 1.5;
}

.footer-contact li + li {
  margin-top: 12px;
}

.footer-contact i {
  flex: none;
  margin-top: 2px;
  font-size: 17px;
  color: #fff;
}

.footer-socials {
  display: flex;
  gap: 10px;
}

.footer-socials a {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(255, 255, 255, .25);
  border-radius: 50%;
  color: #fff;
  font-size: 16px;
  transition: all .15s ease;
}

.footer-socials a:hover {
  background: #fff;
  color: #164094;
}

.map-frame {
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, .2);
}

.map-frame iframe {
  display: block;
  width: 100%;
  height: 200px;
  border: 0;
}

.footer-bottom {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px 24px;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, .15);
}

.copyright {
  margin: 0;
  color: rgba(255, 255, 255, .7);
  font-size: 13px;
}

.footer-payments {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.footer-payments li {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, .1);
  color: #fff;
  font-size: 12.5px;
  font-weight: 600;
}

@media (max-width: 1199.98px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Phones: stacked, and room at the bottom for the floating nav bar */
@media (max-width: 991.98px) {
  .gs-footer {
    padding-bottom: calc(110px + env(safe-area-inset-bottom));
  }
}

@media (max-width: 575.98px) {
  .gs-footer {
    padding-top: 40px;
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 28px 20px;
  }

  .footer-brand,
  .footer-map {
    grid-column: 1 / -1;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
