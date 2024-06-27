<script setup>
import { useI18n } from "vue-i18n";
import { Form } from "vee-validate";
import BaseInput from "@/components/BaseInput.vue";
import BaseTextarea from "@/components/BaseTextarea.vue";
import * as Yup from "yup";
const schema = Yup.object().shape({
  name: Yup.string().min(6).required(),
  email: Yup.string().email().required(),
  message: Yup.string().min(6).required(),
});

const { t, locale } = useI18n();
</script>
<template>
  <div class="max-w-[1440px] mx-auto relative">
    <div class="">
      <img
        class="absolute ltr:left-0 rtl:right-0 top-7 z-0"
        :src="[
          locale === 'en'
            ? '/images/home/contact-envelope-l.svg'
            : '/images/home/contact-envelope-r.svg',
        ]"
      />
      <img
        class="absolute ltr:right-0 rtl:left-0 top-7"
        :src="[
          locale === 'en'
            ? '/images/home/contact-message-l.svg'
            : '/images/home/contact-message-r.svg',
        ]"
      />
    </div>
    <div class="px-16">
      <div class="relative">
        <p
          class="absolute ltr:left-8 rtl:right-8 top-[3px] text-2xl font-bold text-[#45315D] z-10"
        >
          {{ t("contact.title") }}
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
    <div class="pt-20 px-16">
      <div class="grid grid-cols-2 gap-10 items-center">
        <Form
          class="z-10 text-start shadow-form  rounded-[10px] pt-[52px] pb-11 px-10"
          @submit=""
          :validation-schema="schema"
        >
          <p class="text-3xl text-[#313131] font-bold pl-1 rtl:pr-1 pb-4">
            {{ t("contact.formTitle") }}
          </p>
          <div class="pb-6">
            <p class="px-4 pb-[6px]">
              <span class="text-[#313131] text-xs font-bold">{{
                t("contact.name.title")
              }}</span
              ><span class="text-[#FF0000] text-sm">*</span>
            </p>
            <base-input
              input-type="text"
              name="name"
              :placeholder="t('contact.name.placeholder')"
              class="w-full font-readex text-base font-light"
            />
          </div>
          <div class="pb-6">
            <p class="px-4 pb-[6px]">
              <span class="text-[#313131] text-xs font-bold">{{
                t("contact.email.title")
              }}</span
              ><span class="text-[#FF0000] text-sm">*</span>
            </p>
            <base-input
              input-type="email"
              name="email"
              :placeholder="t('contact.email.placeholder')"
              class="w-full font-readex text-base font-light"
            />
          </div>
          <div class="">
            <p class="px-4 pb-[6px]">
              <span class="text-[#313131] text-xs font-bold">{{
                t("contact.message.title")
              }}</span
              ><span class="text-[#FF0000] text-sm">*</span>
            </p>
            <base-textarea
              input-type="text"
              name="message"
              :placeholder="t('contact.message.placeholder')"
              class="w-full font-readex text-base font-light"
            />
          </div>
        </Form>
        <img
          :src="[
            locale === 'en'
              ? '/images/home/contact-l.svg'
              : '/images/home/contact-r.svg',
          ]"
        />
      </div>
    </div>
  </div>
</template>
<style></style>
