<template>
  <footer class="bg-primary text-white pt-16 pb-6">
    <div class="container-custom">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <!-- Logo and Address -->
        <div class="space-y-4">
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-xl">CO</span>
            </div>
            <span class="text-2xl font-bold">CorpName</span>
          </div>
          <div class="text-gray-300 space-y-2">
            <p class="flex items-start space-x-2">
              <svg class="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span>123 Business Avenue<br>Suite 100<br>City, State 12345</span>
            </p>
            <p class="flex items-center space-x-2">
              <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span>info@corpname.com</span>
            </p>
            <p class="flex items-center space-x-2">
              <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span>(555) 123-4567</span>
            </p>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-xl font-bold mb-4 text-accent">Quick Links</h3>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.name">
              <a 
                :href="link.href" 
                class="text-gray-300 hover:text-accent transition-colors duration-300 flex items-center space-x-2"
                @click.prevent="scrollToSection(link.href)"
              >
                <span class="w-1 h-1 bg-secondary rounded-full"></span>
                <span>{{ link.name }}</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Social Media -->
        <div>
          <h3 class="text-xl font-bold mb-4 text-accent">Follow Us</h3>
          <div class="flex space-x-4">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="w-12 h-12 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              :aria-label="social.name"
            >
              <component :is="social.icon" class="w-6 h-6" />
            </a>
          </div>
          <p class="text-gray-300 mt-6 text-sm leading-relaxed">
            Stay connected with us on social media for the latest updates and news.
          </p>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-white/10 pt-8 text-center">
        <p class="text-gray-400 text-sm">
          &copy; {{ currentYear }} CorpName. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { h, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { NavItem, SocialLink } from '../types'

gsap.registerPlugin(ScrollTrigger)

const currentYear: number = new Date().getFullYear()

const quickLinks: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About Us', href: '#about' },
  { name: 'Contact', href: '#contact' }
]

const socialLinks: SocialLink[] = [
  { 
    name: 'Instagram', 
    href: 'https://instagram.com',
    icon: () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' })
    ])
  },
  { 
    name: 'Facebook', 
    href: 'https://facebook.com',
    icon: () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' })
    ])
  },
  { 
    name: 'TikTok', 
    href: 'https://tiktok.com',
    icon: () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { d: 'M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z' })
    ])
  }
]

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

onMounted(() => {
  gsap.from('footer > div > div', {
    scrollTrigger: {
      trigger: 'footer',
      start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
  })
})
</script>