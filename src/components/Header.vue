<template>
  <header class="fixed top-0 left-0 right-0 z-40 bg-white shadow-md transition-all duration-300" :class="{ 'bg-white/95 backdrop-blur-sm': scrolled }">
    <nav class="container-custom">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="#home" class="flex items-center space-x-2">
            <div class="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-xl">CO</span>
            </div>
            <span class="text-2xl font-bold text-primary hidden sm:block">CorpName</span>
          </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a 
            v-for="item in navItems" 
            :key="item.name"
            :href="item.href"
            class="text-primary hover:text-secondary font-medium transition-colors duration-300 relative group"
            @click.prevent="scrollToSection(item.href)"
          >
            {{ item.name }}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle mobile menu"
        >
          <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-gray-200">
          <a 
            v-for="item in navItems" 
            :key="item.name"
            :href="item.href"
            class="block px-4 py-3 text-primary hover:bg-secondary/10 hover:text-secondary font-medium transition-colors rounded-lg"
            @click="handleMobileClick(item.href)"
          >
            {{ item.name }}
          </a>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import type { NavItem } from '../types'

const scrolled = ref<boolean>(false)
const mobileMenuOpen = ref<boolean>(false)

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About Us', href: '#about' },
  { name: 'Contact', href: '#contact' }
]

const handleScroll = (): void => {
  scrolled.value = window.scrollY > 50
}

const scrollToSection = (href: string): void => {
  const element = document.querySelector(href)
  if (element) {
    const offset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

const handleMobileClick = (href: string): void => {
  mobileMenuOpen.value = false
  scrollToSection(href)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  gsap.from('header', {
    y: -100,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>