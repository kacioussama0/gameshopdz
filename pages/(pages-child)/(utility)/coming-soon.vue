<script setup lang="ts">
import { onMounted, ref } from "vue";

const comingsoon = ref<number | any>({
  day: 0,
  hour: 0,
  sec: 0,
  min: 0,
});

onMounted(() => {
  let countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
  setInterval(function () {
    var now = new Date().getTime();

    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    comingsoon.value.day = Math.floor(distance / (1000 * 60 * 60 * 24))
      .toString()
      .padStart(2, "0");
    comingsoon.value.hour = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
      .toString()
      .padStart(2, "0");
    comingsoon.value.min = Math.floor(
      (distance % (1000 * 60 * 60)) / (1000 * 60)
    )
      .toString()
      .padStart(2, "0");
    comingsoon.value.sec = Math.floor((distance % (1000 * 60)) / 1000)
      .toString()
      .padStart(2, "0");

    if (distance < 0) {
      countDownDate = new Date("Jan 5, 2025 15:37:25").getTime();
    }
  }, 1000);
});

definePageMeta({
  layout: "utility",
});
</script>

<template>
  <section class="px-3 overflow-hidden bg-light">
    <div class="row dz-coming-soon">
      <div class="col-xxl-6 col-xl-6 col-lg-6 px-0">
        <div class="dz-coming-bx single-page">
          <div class="logo">
            <NuxtLink to="/"
              ><img src="../../../assets/images/logo.png" alt=""
            /></NuxtLink>
          </div>
          <div class="dz-content">
            <h2 class="dz-title pe-xl-4">
              Our awesome new site is almost ready to launch!
            </h2>
            <p>
              In the meantime, sign up for our monthly Newsletter to stay up yo
              date.
            </p>

            <form
              class="dzSubscribe"
              action="script/mailchamp.php"
              method="post"
            >
              <div class="dzSubscribeMsg"></div>
              <div class="ft-row m-b15 d-flex align-items-center">
                <input
                  name="dzEmail"
                  type="email"
                  placeholder="Your Email Address"
                  class="form-control bg-light"
                />
                <button
                  name="submit"
                  value="Submit"
                  type="submit"
                  class="btn btn-secondary"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div class="countdown-row">
            <div class="countdown">
              <div class="date">
                <span class="time" id="day">{{ comingsoon.day }}</span>
                <span class="text"> Days</span>
              </div>
              <div class="date">
                <span class="time" id="hour">{{ comingsoon.hour }}</span>
                <span class="text">Hours</span>
              </div>
              <div class="date">
                <span class="time" id="min">{{ comingsoon.min }}</span>
                <span class="text">Minutes</span>
              </div>
              <div class="date">
                <div class="time lost" id="second">{{ comingsoon.sec }}</div>
                <span class="text">Seconds</span>
              </div>
            </div>
          </div>
        </div>
        <img
          src="../../../assets/images/circle-lines.png"
          class="bg-img"
          alt=""
        />
      </div>
      <div class="col-xxl-6 col-xl-6 col-lg-6 px-0 d-lg-block d-none">
        <div class="dz-coming-bx2">
          <img
            src="../../../assets/images/circle-lines2.png"
            class="bg-img2"
            alt=""
          />
          <div class="dz-coming-media">
            <img src="../../../assets/images/lady.png" alt="" />
          </div>
        </div>
        <div class="banner-social-media style-1">
          <ul>
            <li>
              <NuxtLink
                target="_blank"
                to="https://www.instagram.com/dexignzone/"
                >Instagram</NuxtLink
              >
            </li>
            <li>
              <NuxtLink target="_blank" to="https://www.facebook.com/dexignzone"
                >Facebook</NuxtLink
              >
            </li>
            <li>
              <NuxtLink target="_blank" to="https://twitter.com/dexignzones"
                >twitter</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
