<script setup lang="ts">
defineProps<{
  name: string;
  title: string;
  img: string;
}>();
</script>
<template>
  <div class="dz-bnr-inr bg-secondary overlay-black-light" :style="`background-image: url(${img})`">
    <div class="container">
      <div class="dz-bnr-inr-entry">
        <h1>{{ title }}</h1>
        <nav aria-label="breadcrumb" class="breadcrumb-row">
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <RouterLink to="/">{{ name }}</RouterLink>
            </li>
            <li class="breadcrumb-item">{{ title }}</li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
