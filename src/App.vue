<template>
  <div id="app">
    <LoadingSpinner />
    <Header />
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import LoadingSpinner from './components/LoadingSpinner.vue'
import Header from './components/Header.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'

onMounted(() => {
  // Smooth scrolling for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        const offset = 80
        const elementPosition = target.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    })
  })
})
</script>

<style>
html {
  scroll-behavior: smooth;
}

body {
  overflow-x: hidden;
}
</style>