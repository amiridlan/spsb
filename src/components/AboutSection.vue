<template>
  <section id="about" class="py-20 bg-white">
    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Image Side -->
        <div class="about-image relative">
          <div class="relative">
            <!-- Main Image Container -->
            <div class="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <div class="aspect-[4/3] bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                <svg class="w-64 h-64 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
            </div>

            <!-- Decorative Elements -->
            <div class="absolute -top-6 -left-6 w-48 h-48 bg-accent/20 rounded-full blur-3xl"></div>
            <div class="absolute -bottom-6 -right-6 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>

            <!-- Stats Card -->
            <div class="absolute -bottom-8 -right-8 bg-white rounded-xl shadow-xl p-6 stats-card">
              <div class="text-4xl font-bold text-secondary mb-2">15+</div>
              <div class="text-sm text-gray-600">Years of Excellence</div>
            </div>
          </div>
        </div>

        <!-- Content Side -->
        <div class="about-content">
          <h2 class="text-4xl md:text-5xl font-bold text-primary mb-6">About Us</h2>
          <p class="text-xl text-gray-600 mb-6 leading-relaxed">
            We are a leading provider of comprehensive facility management and event space solutions, 
            committed to delivering excellence in every project.
          </p>
          <p class="text-lg text-gray-600 mb-8 leading-relaxed">
            With over 15 years of industry experience, our team of dedicated professionals has 
            successfully managed hundreds of properties and hosted thousands of events. We combine 
            innovative technology with personalized service to exceed our clients' expectations.
          </p>

          <!-- Key Points -->
          <div class="space-y-4 mb-8">
            <div 
              v-for="(point, index) in keyPoints" 
              :key="index"
              class="flex items-start space-x-4 about-point"
            >
              <div class="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-primary mb-1">{{ point.title }}</h3>
                <p class="text-gray-600">{{ point.description }}</p>
              </div>
            </div>
          </div>

          <!-- Values -->
          <div class="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 class="text-2xl font-bold text-primary mb-4">Our Core Values</h3>
            <div class="grid grid-cols-2 gap-4">
              <div 
                v-for="(value, index) in values" 
                :key="index"
                class="flex items-center space-x-2"
              >
                <div class="w-2 h-2 bg-accent rounded-full"></div>
                <span class="text-gray-700 font-medium">{{ value }}</span>
              </div>
            </div>
          </div>

          <a href="#contact" @click.prevent="scrollToSection('#contact')" class="btn-primary inline-block">
            Partner With Us
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { KeyPoint } from '../types'

gsap.registerPlugin(ScrollTrigger)

const keyPoints: KeyPoint[] = [
  {
    title: 'Professional Excellence',
    description: 'Our team consists of certified professionals with extensive industry knowledge and expertise.'
  },
  {
    title: 'Client-Centric Approach',
    description: 'We prioritize understanding your unique needs and delivering customized solutions.'
  },
  {
    title: 'Innovative Solutions',
    description: 'Leveraging the latest technology and best practices to optimize your operations.'
  }
]

const values: string[] = [
  'Integrity',
  'Innovation',
  'Excellence',
  'Sustainability',
  'Collaboration',
  'Accountability'
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
  gsap.from('.about-image', {
    scrollTrigger: {
      trigger: '#about',
      start: 'top 70%',
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  })

  gsap.from('.about-content > *', {
    scrollTrigger: {
      trigger: '#about',
      start: 'top 70%',
    },
    x: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out'
  })

  gsap.from('.stats-card', {
    scrollTrigger: {
      trigger: '#about',
      start: 'top 60%',
    },
    scale: 0,
    opacity: 0,
    duration: 0.6,
    ease: 'back.out(1.7)'
  })
})
</script>