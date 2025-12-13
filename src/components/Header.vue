<template>
  <header class="fixed top-0 left-0 right-0 z-40 bg-white shadow-md transition-all duration-300 fade-in-down" :class="{ 'bg-white/95 backdrop-blur-sm': scrolled }">
    <nav class="container-custom">
      <div class="flex items-center justify-between h-30">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link to="/" class="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
            <div class="w-24 h-24 rounded-lg flex items-center justify-center">
              <img src="/spsb-trans.png" alt="SPSB Logo" class="w-full h-full object-contain" />
            </div>
            <span class="text-2xl font-bold text-primary hidden sm:block">Solatis Power Sdn Bhd</span>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link 
            to="/"
            class="text-primary hover:text-secondary font-medium transition-colors duration-300 relative group"
            :class="{ 'text-secondary': isActiveRoute('/') }"
          >
            Utama
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" :class="{ 'w-full': isActiveRoute('/') }"></span>
          </router-link>

          <!-- Services Dropdown -->
          <div 
            class="relative"
            @mouseenter="showServicesDropdown = true"
            @mouseleave="showServicesDropdown = false"
          >
            <button
              class="text-primary hover:text-secondary font-medium transition-colors duration-300 relative group flex items-center space-x-1"
              :class="{ 'text-secondary': isServicesActive }"
            >
              <span>Perkhidmatan Kami</span>
              <svg 
                class="w-4 h-4 transition-transform duration-300"
                :class="{ 'rotate-180': showServicesDropdown }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" :class="{ 'w-full': isServicesActive }"></span>
            </button>

            <!-- Dropdown Menu -->
            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 scale-95 -translate-y-2"
              enter-to-class="opacity-100 scale-100 translate-y-0"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="opacity-100 scale-100 translate-y-0"
              leave-to-class="opacity-0 scale-95 -translate-y-2"
            >
              <div 
                v-if="showServicesDropdown"
                class="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
              >
                <router-link
                  v-for="service in servicesMenu"
                  :key="service.to"
                  :to="service.to"
                  class="flex items-start space-x-3 px-4 py-3 hover:bg-secondary/10 transition-colors duration-200 group"
                  @click="showServicesDropdown = false"
                >
                  <component :is="service.icon" class="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <div class="font-semibold text-primary group-hover:text-secondary transition-colors">
                      {{ service.name }}
                    </div>
                    <div class="text-xs text-gray-500 mt-0.5">
                      {{ service.description }}
                    </div>
                  </div>
                </router-link>
              </div>
            </transition>
          </div>

          <router-link 
            to="/company-profile"
            class="text-primary hover:text-secondary font-medium transition-colors duration-300 relative group"
            :class="{ 'text-secondary': isActiveRoute('/company-profile') }"
          >
            Profil Syarikat
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" :class="{ 'w-full': isActiveRoute('/company-profile') }"></span>
          </router-link>

          <router-link 
            to="/contact"
            class="text-primary hover:text-secondary font-medium transition-colors duration-300 relative group"
            :class="{ 'text-secondary': isActiveRoute('/contact') }"
          >
            Hubungi Kami
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" :class="{ 'w-full': isActiveRoute('/contact') }"></span>
          </router-link>
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
          <router-link 
            to="/"
            class="block px-4 py-3 text-primary hover:bg-secondary/10 hover:text-secondary font-medium transition-colors rounded-lg"
            @click="mobileMenuOpen = false"
          >
            Utama
          </router-link>

          <!-- Mobile Services Submenu -->
          <div>
            <button
              @click="mobileServicesOpen = !mobileServicesOpen"
              class="w-full flex items-center justify-between px-4 py-3 text-primary hover:bg-secondary/10 hover:text-secondary font-medium transition-colors rounded-lg"
            >
              <span>Perkhidmatan Kami</span>
              <svg 
                class="w-4 h-4 transition-transform duration-300"
                :class="{ 'rotate-180': mobileServicesOpen }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            
            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="max-h-0 opacity-0"
              enter-to-class="max-h-96 opacity-100"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="max-h-96 opacity-100"
              leave-to-class="max-h-0 opacity-0"
            >
              <div v-if="mobileServicesOpen" class="pl-4 space-y-1 overflow-hidden">
                <router-link
                  v-for="service in servicesMenu"
                  :key="service.to"
                  :to="service.to"
                  class="flex items-center space-x-2 px-4 py-2 text-sm text-gray-600 hover:bg-secondary/10 hover:text-secondary transition-colors rounded-lg"
                  @click="mobileMenuOpen = false"
                >
                  <component :is="service.icon" class="w-4 h-4" />
                  <span>{{ service.name }}</span>
                </router-link>
              </div>
            </transition>
          </div>

          <router-link 
            to="/company-profile"
            class="block px-4 py-3 text-primary hover:bg-secondary/10 hover:text-secondary font-medium transition-colors rounded-lg"
            @click="mobileMenuOpen = false"
          >
            Profil Syarikat
          </router-link>

          <router-link 
            to="/contact"
            class="block px-4 py-3 text-primary hover:bg-secondary/10 hover:text-secondary font-medium transition-colors rounded-lg"
            @click="mobileMenuOpen = false"
          >
            Hubungi Kami
          </router-link>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, h, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const scrolled = ref<boolean>(false)
const mobileMenuOpen = ref<boolean>(false)
const showServicesDropdown = ref<boolean>(false)
const mobileServicesOpen = ref<boolean>(false)

const servicesMenu = [
  {
    name: 'Ruang Majlis',
    to: '/services/event-spaces',
    description: 'Tempah ruang premium untuk setiap majlis istimewa anda',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' })
    ])
  },
  {
    name: 'Bangunan Ofis',
    to: '/services/buildings',
    description: 'Sewa atau beli bangunan untuk perniagaan anda',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z' })
    ])
  },
  {
    name: 'Pengurusan Fasiliti',
    to: '/services/facility-management',
    description: 'Complete facility solutions',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' })
      ]),
  }
]

const isServicesActive = computed(() => {
  return route.path.startsWith('/services/')
})

const isActiveRoute = (path: string): boolean => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path === path
}

const handleScroll = (): void => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>