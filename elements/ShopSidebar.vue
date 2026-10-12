<script lang="ts" setup>
import { NEW_ARRIVALS_DAYS, PLATFORMS, PRICE_PRESETS, useShopFilters } from "~/composables/useShopFilters";

const emit = defineEmits<{ close: [] }>()

const { query, update, setPrice, activeCount, clearAll } = useShopFilters()

// Categories hidden from the shop (uncategorised and internal ones)
const HIDDEN_CATEGORIES = [29, 3039, 2216]

const { data: allCategories } = await useFetch<any[]>("/api/wc/categories", {
  key: "wc-categories",
  default: () => [],
})

const visible = computed(() =>
    (allCategories.value || []).filter(c => !HIDDEN_CATEGORIES.includes(c.id))
)

const topLevel = computed(() => visible.value.filter(c => c.parent === 0))

// Long list: show the biggest categories first, plus the active branch
const CATEGORY_LIMIT = 8
const showAllCategories = ref(false)

const shownCategories = computed(() => {
  if (showAllCategories.value || topLevel.value.length <= CATEGORY_LIMIT) return topLevel.value
  const biggest = [...topLevel.value].sort((a, b) => b.count - a.count).slice(0, CATEGORY_LIMIT)
  const active = topLevel.value.find(c => isInBranch(c))
  const keep = new Set([...biggest, ...(active ? [active] : [])].map(c => c.id))
  return topLevel.value.filter(c => keep.has(c.id))
})

const activeCategory = computed(() =>
    visible.value.find(c => String(c.id) === query.value.category)
)

// Sub-categories of the selected branch (or of its parent when a child is selected)
const subCategories = computed(() => {
  const active = activeCategory.value
  if (!active) return []
  const parentId = active.parent === 0 ? active.id : active.parent
  return visible.value.filter(c => c.parent === parentId)
})

const isInBranch = (category: any) => {
  const active = activeCategory.value
  return !!active && (active.id === category.id || active.parent === category.id)
}

const selectCategory = (id?: number) => update({ category: id })

// WooCommerce returns HTML entities in names ("Cartes &amp; Abonnement")
const decode = (name: string) =>
    name.replace(/&amp;/g, "&").replace(/&#039;/g, "'").replace(/&quot;/g, '"')

/* ---------- price ---------- */
const minPrice = ref(query.value.minPrice ?? "")
const maxPrice = ref(query.value.maxPrice ?? "")

watch(() => [query.value.minPrice, query.value.maxPrice], ([min, max]) => {
  minPrice.value = min ?? ""
  maxPrice.value = max ?? ""
})

const applyPrice = () => {
  let min = Number(minPrice.value) || undefined
  let max = Number(maxPrice.value) || undefined
  if (min && max && min > max) [min, max] = [max, min]
  setPrice(min, max)
}

const isPresetActive = (preset: typeof PRICE_PRESETS[number]) =>
    String(preset.min ?? "") === (query.value.minPrice ?? "") &&
    String(preset.max ?? "") === (query.value.maxPrice ?? "")

const togglePreset = (preset: typeof PRICE_PRESETS[number]) =>
    isPresetActive(preset) ? setPrice() : setPrice(preset.min, preset.max)

const { t } = useI18n()
const formatAmount = (value: number) => value.toLocaleString("fr-FR")
const presetLabel = (preset: typeof PRICE_PRESETS[number]) => {
  const currency = t("common.currency")
  if (preset.min === undefined) return t("shop.filters.under", { amount: `${formatAmount(preset.max!)} ${currency}` })
  if (preset.max === undefined) return t("shop.filters.over", { amount: `${formatAmount(preset.min)} ${currency}` })
  return `${formatAmount(preset.min)} – ${formatAmount(preset.max)} ${currency}`
}
</script>

<template>
  <aside class="shop-filters">
    <div class="filters-head">
      <h6 class="filters-title">
        <i class="flaticon-filter"></i>
        {{ $t('shop.filter') }}
        <span v-if="activeCount" class="count">{{ activeCount }}</span>
      </h6>

      <button v-if="activeCount" type="button" class="link-btn" @click="clearAll">
        {{ $t('shop.filters.clearAll') }}
      </button>

      <button type="button" class="close-btn d-xl-none" :aria-label="$t('common.close')" @click="emit('close')">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>

    <!-- Availability & deals -->
    <details class="filter-group" open>
      <summary class="group-title">{{ $t('shop.filters.availability') }}</summary>

      <label class="switch-row">
        <input
            type="checkbox"
            class="form-check-input"
            role="switch"
            :checked="query.inStock"
            @change="update({ stock_status: ($event.target as HTMLInputElement).checked ? 'instock' : undefined })"
        />
        <span>{{ $t('shop.filters.inStock') }}</span>
      </label>

      <label class="switch-row">
        <input
            type="checkbox"
            class="form-check-input"
            role="switch"
            :checked="query.onSale"
            @change="update({ on_sale: ($event.target as HTMLInputElement).checked ? 'true' : undefined })"
        />
        <span>{{ $t('shop.filters.onSale') }}</span>
      </label>

      <label class="switch-row">
        <input
            type="checkbox"
            class="form-check-input"
            role="switch"
            :checked="query.newArrivals"
            @change="update({ new: ($event.target as HTMLInputElement).checked ? '1' : undefined })"
        />
        <span>{{ $t('shop.filters.newArrivals', { days: NEW_ARRIVALS_DAYS }) }}</span>
      </label>
    </details>

    <!-- Platform shortcuts (game categories) -->
    <details class="filter-group" open>
      <summary class="group-title">{{ $t('shop.filters.platform') }}</summary>

      <div class="chips">
        <button
            v-for="platform in PLATFORMS"
            :key="platform.id"
            type="button"
            class="chip"
            :class="{ active: query.category === String(platform.id) }"
            :aria-pressed="query.category === String(platform.id)"
            @click="selectCategory(query.category === String(platform.id) ? undefined : platform.id)"
        >
          <i :class="platform.icon"></i>
          {{ platform.label }}
        </button>
      </div>
    </details>

    <!-- Price -->
    <details class="filter-group" open>
      <summary class="group-title">{{ $t('common.price') }} ({{ $t('common.currency') }})</summary>

      <div class="chips">
        <button
            v-for="(preset, i) in PRICE_PRESETS"
            :key="i"
            type="button"
            class="chip"
            :class="{ active: isPresetActive(preset) }"
            :aria-pressed="isPresetActive(preset)"
            @click="togglePreset(preset)"
        >
          {{ presetLabel(preset) }}
        </button>
      </div>

      <form class="price-inputs" @submit.prevent="applyPrice">
        <input
            v-model="minPrice"
            type="number"
            inputmode="numeric"
            min="0"
            step="100"
            class="form-control"
            :placeholder="$t('shop.filters.min')"
            :aria-label="$t('shop.filters.min')"
        />
        <span class="sep">–</span>
        <input
            v-model="maxPrice"
            type="number"
            inputmode="numeric"
            min="0"
            step="100"
            class="form-control"
            :placeholder="$t('shop.filters.max')"
            :aria-label="$t('shop.filters.max')"
        />
        <button type="submit" class="btn btn-secondary new-gradient apply-btn" :aria-label="$t('shop.filters.apply')">
          <i class="fa-solid fa-check"></i>
        </button>
      </form>
    </details>

    <!-- Categories -->
    <details class="filter-group" open>
      <summary class="group-title">{{ $t('shop.categories') }}</summary>

      <ul class="category-list">
        <li>
          <button type="button" class="category" :class="{ active: !query.category }" @click="selectCategory()">
            <span>{{ $t('shop.filters.allCategories') }}</span>
          </button>
        </li>

        <li v-for="category in shownCategories" :key="category.id">
          <button
              type="button"
              class="category"
              :class="{ active: isInBranch(category) }"
              :aria-current="String(category.id) === query.category ? 'true' : undefined"
              @click="selectCategory(category.id)"
          >
            <span class="name">{{ decode(category.name).toLowerCase() }}</span>
            <span class="qty">{{ category.count }}</span>
          </button>

          <ul v-if="isInBranch(category) && subCategories.length" class="sub-list">
            <li v-for="sub in subCategories" :key="sub.id">
              <button
                  type="button"
                  class="category sub"
                  :class="{ active: String(sub.id) === query.category }"
                  @click="selectCategory(sub.id)"
              >
                <span class="name">{{ decode(sub.name).toLowerCase() }}</span>
                <span class="qty">{{ sub.count }}</span>
              </button>
            </li>
          </ul>
        </li>
      </ul>

      <button v-if="topLevel.length > CATEGORY_LIMIT" type="button" class="more-btn" @click="showAllCategories = !showAllCategories">
        {{ showAllCategories ? $t('shop.filters.showLess') : $t('shop.filters.showMore', { count: topLevel.length - CATEGORY_LIMIT }) }}
        <i class="fa-solid" :class="showAllCategories ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
      </button>
    </details>
  </aside>
</template>

<style scoped>
.shop-filters {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background: #fff;
  border: 1px solid rgba(10, 99, 216, 0.12);
  border-radius: 16px;
}

.filters-head {
  display: flex;
  align-items: center;
  gap: 12px;
}

.filters-title {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  margin-inline-end: auto;
  font-size: 18px;
}

.count {
  display: grid;
  place-items: center;
  min-width: 22px;
  height: 22px;
  padding: 0 6px;
  border-radius: 999px;
  background: linear-gradient(135deg, #0f2f6d, #164094, #6a3df0);
  color: #fff;
  font-size: 12px;
}

.link-btn {
  border: 0;
  background: none;
  padding: 0;
  color: var(--primary, #0A63D8);
  font-size: 13px;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.close-btn {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border: 0;
  border-radius: 50%;
  background: #f1f3f8;
  color: var(--secondary, #0F1E4A);
}

.filter-group {
  padding-top: 18px;
  border-top: 1px solid #edf0f6;
}

/* Collapsible groups */
.filter-group > summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  cursor: pointer;
}

.filter-group > summary::-webkit-details-marker {
  display: none;
}

.filter-group > summary::after {
  content: "";
  width: 8px;
  height: 8px;
  margin-inline-end: 4px;
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: rotate(45deg);
  transition: transform .2s ease;
}

.filter-group:not([open]) > summary::after {
  transform: rotate(-45deg);
}

:global([dir="rtl"] .filter-group:not([open]) > summary::after) {
  transform: rotate(135deg);
}

.filter-group:not([open]) > summary {
  margin-bottom: 0;
}

.more-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  padding: 6px 10px;
  border: 0;
  border-radius: 10px;
  background: none;
  color: var(--primary, #0A63D8);
  font-size: 13px;
  font-weight: 700;
}

.more-btn:hover {
  background: rgba(10, 99, 216, 0.06);
}

.group-title {
  margin-bottom: 12px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .02em;
  text-transform: uppercase;
  color: #6b7390;
}

.switch-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 0;
  cursor: pointer;
  font-size: 14px;
}

.switch-row .form-check-input {
  width: 2.2em;
  height: 1.2em;
  margin: 0;
  cursor: pointer;
  border-radius: 2em;
  background-color: #dfe3ee;
  border-color: #dfe3ee;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
  background-position: left center;
  background-repeat: no-repeat;
  transition: background-position .15s ease-in-out, background-color .15s ease;
  appearance: none;
}

.switch-row .form-check-input:checked {
  background-color: var(--primary, #0A63D8);
  border-color: var(--primary, #0A63D8);
  background-position: right center;
}

:global([dir="rtl"] .switch-row .form-check-input) { background-position: right center; }
:global([dir="rtl"] .switch-row .form-check-input:checked) { background-position: left center; }

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border: 1px solid #dfe3ee;
  border-radius: 999px;
  background: #fff;
  color: var(--secondary, #0F1E4A);
  font-size: 12.5px;
  white-space: nowrap;
  transition: all .15s ease;
}

.chip:hover {
  border-color: var(--primary, #0A63D8);
}

.chip.active {
  border-color: transparent;
  background: linear-gradient(135deg, #0f2f6d, #164094, #6a3df0);
  color: #fff;
}

.price-inputs {
  display: flex;
  align-items: center;
  gap: 8px;
}

.price-inputs .form-control {
  min-width: 0;
  height: 40px;
  padding: 6px 10px;
  border-radius: 10px;
  font-size: 14px;
}

.sep {
  color: #9aa1b5;
}

.apply-btn {
  flex: none;
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  padding: 0;
  border-radius: 10px;
}

.category-list,
.sub-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.sub-list {
  margin: 2px 0 6px;
  padding-inline-start: 12px;
  border-inline-start: 2px solid #edf0f6;
}

.category {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  padding: 7px 10px;
  border: 0;
  border-radius: 10px;
  background: none;
  color: var(--secondary, #0F1E4A);
  font-size: 14px;
  text-align: start;
  transition: background .15s ease;
}

.category:hover {
  background: #f4f6fb;
}

.category.active {
  background: rgba(10, 99, 216, 0.08);
  color: var(--primary, #0A63D8);
  font-weight: 700;
}

.category.sub {
  font-size: 13px;
  padding: 5px 10px;
}

.category .name {
  text-transform: capitalize;
}

.qty {
  flex: none;
  min-width: 28px;
  padding: 1px 7px;
  border-radius: 999px;
  background: #f1f3f8;
  color: #6b7390;
  font-size: 11px;
  font-weight: 600;
  text-align: center;
}
</style>
