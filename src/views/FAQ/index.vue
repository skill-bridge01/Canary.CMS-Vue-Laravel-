<script setup>
import { useI18n } from "vue-i18n";
import FAQ from "./components/FAQ.vue";
import "vue3-carousel/dist/carousel.css";

const { t, locale } = useI18n();
</script>
<template>
  <div class="max-w-[1440px] mx-auto px-24">
    <div class="pt-12">
      <div class="relative">
        <p
          class="absolute ltr:left-8 rtl:right-8 top-[3px] text-2xl font-bold text-[#45315D] z-10"
        >
          {{ t("faq.title") }}
        </p>

        <div
          :class="[
            ' absolute top-0 w-20 h-10 z-0',
            locale === 'en'
              ? 'react-circle-l rounded-tl-full rounded-bl-full left-0 '
              : 'react-circle-r rounded-tr-full rounded-br-full right-0 ',
          ]"
        ></div>
      </div>
    </div>
    <div class="relative pt-16 text-center">
      <img src="/images/faq/faq.svg" class="" />
      <div class="centered">
        <p class="text-[42px] font-normal text-[#FF9280]">{{ t("faq.title") }}</p>
        <p class="text-2xl font-normal text-white">{{ t("faq.discription") }}</p>
      </div>
    </div>
    <FAQ />
  </div>
</template>
<style>
.react-circle-l {
  background-image: linear-gradient(to right, #ff9280, #ff2400);
}
.react-circle-r {
  background-image: linear-gradient(to right, #ff2400, #ff9280);
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
