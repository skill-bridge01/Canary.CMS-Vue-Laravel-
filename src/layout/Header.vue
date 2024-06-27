<script setup>
import { onMounted, ref, watch, watchEffect, computed } from "vue";
import { useI18n } from "vue-i18n";
const LOCALES = [
  {
    label: "EN",
    value: "en",
  },
  {
    label: "AR",
    value: "ar",
  },
];
const { t, locale } = useI18n();
const selectedLocale = ref(locale.value);
watchEffect(() => {
  locale.value = LOCALES.find((l) => l.value === selectedLocale.value).value;
});

console.log("local", locale.value);
</script>
<template>
  <main>
    <div class="max-w-[1440px] mx-auto px-5">
      <div class="pt-7 flex gap-0 justify-center">
        <div
          :class="[
            'bg-[#9367C7] xl:px-10 px-5 flex items-center',
            locale === 'en'
              ? 'rounded-tl-2xl rounded-bl-2xl'
              : 'rounded-tr-2xl rounded-br-2xl',
          ]"
        >
          <img class="" src="/images/logo.svg" alt="" />
        </div>
        <div
          :class="[
            'xl:px-20 px-10 py-5 flex justify-center xl:gap-14 gap-10 bg-[#45315D]  text-[#E2E2E2] text-base',
            locale === 'en'
              ? 'rounded-tr-2xl rounded-br-2xl'
              : 'rounded-tl-2xl rounded-bl-2xl',
          ]"
        >
          <router-link to="/home">{{ t("header.home") }}</router-link>
          <router-link to="/services">{{ t("header.service") }}</router-link>
          <router-link to="/library">{{ t("header.resource") }}</router-link>
          <p>{{ t("header.articles") }}</p>
          <p>{{ t("header.faq") }}</p>
          <p>{{ t("header.aboutUs") }}</p>
          <p>{{ t("header.contactUs") }}</p>
        </div>
        <select
          v-model="selectedLocale"
          class="border-none outline-none focus:outline-none"
        >
          <option v-for="l in LOCALES" :value="l.value">{{ l.label }}</option>
        </select>
      </div>
    </div>
  </main>
</template>
