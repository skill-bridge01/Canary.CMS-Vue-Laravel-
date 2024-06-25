<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
<template>
  <div>
    <div class="relative flex">
      <div class="pt-14 px-12 flex items-center relative w-full">
        <img class="" src="/images/home/1-1.png" alt="" />
        <div class="flex flex-col items-end absolute right-24">
          <h1 class="text-3xl font-bold pb-10 text-[#45315D]">
            {{ t("home.title") }}
          </h1>
          <p class="text-xl font-normal max-w-2xl text-[#403D3D] text-right">
            {{ t("home.description") }}
          </p>
        </div>
      </div>

      <img class="absolute right-0" src="/images/home/1-2.svg" />
    </div>

    <img class="pt-28" src="/images/home/2.svg" />

    <!-- Section1 -->
    <div class="flex pt-24 pl-24 pr-16 justify-between">
      <div class="relative">
        <p class="absolute flex text-[#45315D] font-semibold text-base">
          {{ t("home.ourServices.viewAll") }}
        </p>
        <img src="/images/home/3.png" />
      </div>
      <div>
        <div class="relative">
          <p class="absolute right-8 text-2xl font-bold text-[#45315D] z-10">
            {{ t("home.ourServices.title") }}
          </p>
          <div
            class="react-circle absolute top-0 right-0 bg-red-600 w-20 h-10 rounded-tr-full rounded-br-full z-0"
          ></div>
        </div>
        <div class="pt-24 pb-9 flex items-center gap-10 justify-end">
          <p class="text-[#45315D] text-xl font-bold">
            {{ t("home.ourServices.subTitle") }}
          </p>
          <img src="/images/home/bar.svg" />
        </div>
        <p
          class="text-[#4B4B4B] text-right text-base font-semibold max-w-md pr-8"
        >
          {{ t("home.ourServices.description") }}
        </p>
        <div class="pt-12 flex gap-3 justify-end pr-8">
          <img src="/images/home/arrow-l.svg" />
          <img src="/images/home/arrow-r.svg" />
        </div>
      </div>
    </div>

    <!-- Section2 -->
    <div>
      <div class="pt-32 flex pl-24 pr-16 justify-between">
        <p class="text-[#45315D] font-semibold text-base">
          {{ t("home.ourServices.viewAll") }}
        </p>
        <div class="relative right-0">
          <p class="absolute right-8 text-2xl font-bold text-[#45315D] z-10">
            {{ t("resourceLibrary.title") }}
          </p>
          <div
            class="react-circle absolute top-0 right-0 bg-red-600 w-20 h-10 rounded-tr-full rounded-br-full z-0"
          ></div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  </div>
</template>

<style scoped>
.react-circle {
  background-image: linear-gradient(to right, #ff2400, #ff9280);
}
</style>
