<template>
  <div id="app">
    <LoadingSpinner />
    <Header />
    <main class="min-h-screen">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import LoadingSpinner from './components/LoadingSpinner.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style>
html {
  scroll-behavior: smooth;
}

body {
  overflow-x: hidden;
}
</style>