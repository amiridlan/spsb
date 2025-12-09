<template>
  <section id="services" class="py-20 bg-gray-50 relative overflow-visible">
    <div class="container-custom overflow-visible">
      <!-- Section Header -->
      <div class="text-center mb-16 section-header">
        <h2 class="text-4xl md:text-5xl font-bold text-primary mb-4">Our Services</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Comprehensive solutions tailored to meet your business needs
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 services-grid overflow-visible">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="service-card bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col"
          @click="toggleService(index)"
        >
          <div class="p-8 flex-shrink-0">
            <!-- Icon -->
            <div class="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
              <component :is="service.icon" class="w-8 h-8 text-secondary group-hover:text-white transition-colors duration-300" />
            </div>

            <!-- Title -->
            <h3 class="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
              {{ service.title }}
            </h3>

            <!-- Short Description -->
            <p class="text-gray-600 mb-4 leading-relaxed">
              {{ service.description }}
            </p>

            <!-- Dropdown Toggle -->
            <button 
              class="flex items-center space-x-2 text-secondary font-semibold hover:text-primary transition-colors duration-300"
              @click.stop="toggleService(index)"
              type="button"
            >
              <span>{{ activeService === index ? 'Hide Details' : 'Learn More' }}</span>
              <svg 
                class="w-5 h-5 transition-transform duration-300"
                :class="{ 'rotate-180': activeService === index }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
          </div>

          <!-- Expandable Details -->
          <div 
            v-if="activeService === index"
            class="px-8 pb-8 border-t border-gray-100 pt-6 bg-gray-50 flex-shrink-0"
          >
            <ul class="space-y-3">
              <li 
                v-for="(feature, fIndex) in service.features" 
                :key="fIndex"
                class="flex items-start space-x-3"
              >
                <svg class="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span class="text-gray-700">{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="mt-16 text-center cta-section">
        <div class="bg-primary rounded-2xl p-12 text-white relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent"></div>
          <div class="relative z-10">
            <h3 class="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help your business thrive
            </p>
            <a href="#contact" @click.prevent="scrollToSection('#contact')" class="btn-accent inline-block">
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, h, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Service } from '../types'

gsap.registerPlugin(ScrollTrigger)

const activeService = ref<number | null>(null)

const services: Service[] = [
  {
    title: 'Event Spaces',
    description: 'Premium venues for corporate events, conferences, and special occasions.',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' })
    ]),
    features: [
      'Flexible space configurations for any event size',
      'State-of-the-art audio-visual equipment',
      'Professional event coordination services',
      'Catering and hospitality management',
      'Parking and accessibility accommodations'
    ]
  },
  {
    title: 'Buildings',
    description: 'Commercial and residential building management with excellence in mind.',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z' })
    ]),
    features: [
      'Property acquisition and development consulting',
      'Tenant relations and lease management',
      'Building maintenance and repairs',
      'Energy efficiency optimization',
      'Compliance and safety inspections'
    ]
  },
  {
    title: 'Facility Management',
    description: 'End-to-end facility management solutions for optimal operational efficiency.',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' })
      ]),
    features: [
      'Preventive and corrective maintenance programs',
      'HVAC, plumbing, and electrical systems management',
      'Janitorial and cleaning services coordination',
      'Security and access control systems',
      '24/7 emergency response support'
    ]
  }
]

const toggleService = (index: number): void => {
  activeService.value = activeService.value === index ? null : index
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

onMounted(async () => {
  await nextTick()

  // Set initial state to visible to prevent GSAP hiding issues
  gsap.set('.service-card', { opacity: 1, y: 0 })
  gsap.set('.section-header', { opacity: 1, y: 0 })
  gsap.set('.cta-section', { opacity: 1, y: 0 })

  // Then animate from initial state
  gsap.from('.section-header', {
    scrollTrigger: {
      trigger: '#services',
      start: 'top 80%',
      toggleActions: 'play none none none',
      once: true
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  })

  gsap.from('.service-card', {
    scrollTrigger: {
      trigger: '#services',
      start: 'top 80%',
      toggleActions: 'play none none none',
      once: true
    },
    y: 10,
    opacity: 0,
    duration: 0.3,
    ease: 'power3.out'
  })

  gsap.from('.cta-section', {
    scrollTrigger: {
      trigger: '.cta-section',
      start: 'top 90%',
      toggleActions: 'play none none none',
      once: true
    },
    y: 50,
    opacity: 0,
    duration: 0.3,
    ease: 'power3.out'
  })
})
</script>