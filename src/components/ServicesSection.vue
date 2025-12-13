<template>
  <section id="services" class="py-20 bg-gray-50 relative overflow-visible">
    <div class="container-custom overflow-visible">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-on-scroll">
        <h2 class="text-4xl md:text-5xl font-bold text-primary mb-4">Perkhidmatan Kami</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Comprehensive solutions tailored to meet your business needs
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-visible">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col animate-on-scroll"
          :class="`delay-${(index + 1) * 100}`"
        >
          <div class="p-8 flex-grow flex flex-col">
            <!-- Icon -->
            <div class="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
              <component :is="service.icon" class="w-8 h-8 text-secondary group-hover:text-white transition-colors duration-300" />
            </div>

            <!-- Title -->
            <h3 class="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
              {{ service.title }}
            </h3>

            <!-- Short Description -->
            <p class="text-gray-600 mb-6 leading-relaxed flex-grow">
              {{ service.description }}
            </p>

            <!-- Features List -->
            <ul class="space-y-2 mb-6">
              <li 
                v-for="(feature, fIndex) in service.features.slice(0, 3)" 
                :key="fIndex"
                class="flex items-start space-x-2 text-sm text-gray-600"
              >
                <svg class="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>{{ feature }}</span>
              </li>
            </ul>

            <!-- Navigation Button -->
            <router-link
              :to="service.route"
              class="btn-primary text-center inline-flex items-center justify-center space-x-2 group-hover:scale-105"
            >
              <span>Learn More</span>
              <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </router-link>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="mt-16 text-center animate-on-scroll">
        <div class="bg-primary rounded-2xl p-12 text-white relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent"></div>
          <div class="relative z-10">
            <h3 class="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help your business thrive
            </p>
            <router-link to="/contact" class="btn-accent inline-block">
              Contact Us Today
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h, onMounted } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'
import type { Service } from '../types'

useScrollAnimation()

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
      'Professional event coordination services'
    ],
    route: '/services/event-spaces'
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
      'Building maintenance and repairs'
    ],
    route: '/services/buildings'
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
      'Janitorial and cleaning services coordination'
    ],
    route: '/services/facility-management'
  }
]
</script>