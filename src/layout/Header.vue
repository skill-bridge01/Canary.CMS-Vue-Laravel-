<template>
  <div class="pt-5 flex gap-0 justify-center">
    <div
      class="pr-14 pl-28 py-5 flex justify-center gap-14 bg-[#45315D] rounded-tl-2xl rounded-bl-2xl text-[#E2E2E2] text-base"
    >
      <p>اتصل بنا</p>
      <p>من نحن</p>
      <p>الأسئلة الشائعة</p>
      <p>المقالات</p>
      <p>مكتبة الموارد</p>
      <!-- <p>خدماتنا</p>
      <p>الرئيسية</p> -->
      <router-link to="/services"> خدماتنا </router-link>
      <router-link to="/home"> الرئيسية </router-link>
    </div>
    <div
      class="bg-[#9367C7] rounded-tr-2xl rounded-br-2xl px-10 flex items-center"
    >
      <img class="" src="/images/logo.svg" alt="" />
    </div>
  </div>
</template>
