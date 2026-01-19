<script lang="ts" setup>
import { reactive } from "vue";

const inputReactive = reactive({ min: 40, max: 346 });
</script>

<template>
  <div class="range_container">
    <div class="sliders_control">
      <input id="fromSlider" type="range" min="0" max="400" steps="10" v-model="inputReactive.min" />
      <input id="toSlider" type="range" min="0" max="400" steps="10" v-model="inputReactive.max" />
    </div>
    <div data-v-fa9342e8="" class="sliders_control mt-3">
      <span class="example-val" id="slider-margin-value-min">Min Price: ${{ inputReactive.min }}</span>
      <span class="example-val" id="slider-margin-value-max">Max Price: ${{ inputReactive.max }}</span>
    </div>
  </div>
</template>

<style scoped>
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.range_container {
  --_marker-border-clr: var(--secondary);
  --_marker-size: 15px;
  --_track-heigt: 3px;

  --_tooltip-bg-clr: rgba(0, 0, 0, 0.4);
  --_tooltip-txt-clr: var(--_marker-border-clr);

  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
}
.sliders_control {
  position: relative;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  pointer-events: all;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: 3px solid var(--secondary);
  background-color: #ffffff;
  box-shadow: none;
  top: -4px;
  right: 0;
  cursor: pointer;
}

input[type="range"]::-moz-range-thumb {
  -webkit-appearance: none;
  pointer-events: all;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  border: 3px solid var(--secondary);
  background-color: #ffffff;
  box-shadow: none;
  top: -4px;
  right: 0;
  cursor: pointer;
}

input[type="range"]::-webkit-slider-thumb:hover {
  background: #f7f7f7;
}

input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  height: var(--_track-heigt);
  width: 100%;
  position: absolute;
  background-color: var(--_marker-border-clr);
  pointer-events: none;
}

#fromSlider {
  height: 0;
  z-index: 1;
}
</style>
