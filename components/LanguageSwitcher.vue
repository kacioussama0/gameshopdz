<script setup lang="ts">
const { locale, locales, setLocale, t } = useI18n()

// Only two languages: the button always offers the one that isn't active
const nextLocale = computed(() =>
    locales.value.find(l => l.code !== locale.value)!
)

const switchLocale = () => setLocale(nextLocale.value.code)
</script>

<template>
  <button
      type="button"
      class="lang-switch"
      :lang="nextLocale.code"
      :title="t('lang.switch')"
      :aria-label="t('lang.switch')"
      @click="switchLocale"
  >
    <!-- Inline SVG flags (emoji flags don't render on Windows); fills are inline
         styles because the theme recolours SVG shapes inside the header -->
    <svg v-if="nextLocale.code === 'ar'" class="flag" viewBox="0 0 900 600" aria-hidden="true">
      <rect width="450" height="600" style="fill: #006233"/>
      <rect x="450" width="450" height="600" style="fill: #fff"/>
      <path style="fill: #d21034" d="M579.904 225a150 150 0 1 0 0 150 120 120 0 1 1 0-150M585.675 300 450 255.917l83.852 115.412V228.671L450 344.083z"/>
    </svg>
    <svg v-else class="flag" viewBox="0 0 3 2" aria-hidden="true">
      <rect width="1" height="2" style="fill: #0055a4"/>
      <rect x="1" width="1" height="2" style="fill: #fff"/>
      <rect x="2" width="1" height="2" style="fill: #ef4135"/>
    </svg>
    <span>{{ nextLocale.name }}</span>
  </button>
</template>

<style scoped>
/* Matches the header's icon links: white glyph, no chrome, label like the menu items */
.lang-switch {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0 10px;
  border: 0;
  background: transparent;
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  transition: opacity .2s ease;
}

.flag {
  flex: none;
  width: 22px;
  height: 15px;
  border-radius: 3px;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, .35);
}

.lang-switch:hover,
.lang-switch:focus-visible {
  opacity: .75;
}

.lang-switch:focus-visible {
  outline: 2px solid rgba(255, 255, 255, .6);
  outline-offset: 4px;
  border-radius: 4px;
}

.lang-switch[lang="ar"] span {
  font-family: "Cairo", sans-serif;
}

.lang-switch[lang="fr"] span {
  font-family: "DM Sans", sans-serif;
}
</style>
