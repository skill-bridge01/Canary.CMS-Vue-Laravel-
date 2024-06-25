<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
</script>
<template>
  <div class=" bg-white">
    <Header />
    <div>
      <main>
        <div class="pt-9">
          <div>
            <router-view />
          </div>
          <Footer />
        </div>
      </main>
    </div>
  </div>
</template>
