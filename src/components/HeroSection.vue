<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary to-primary/90 overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%231F8A70\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
    </div>

    <!-- Animated Shapes -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="hero-shape absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
      <div class="hero-shape absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
    </div>

    <div class="container-custom relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="text-white hero-content">
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Building the 
            <span class="text-accent">Future</span> 
            Together
          </h1>
          <p class="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Innovative solutions for event spaces, buildings, and comprehensive facility management services.
          </p>
          <div class="flex flex-wrap gap-4">
            <a href="#services" @click.prevent="scrollToSection('#services')" class="btn-accent">
              Explore Services
            </a>
            <a href="#contact" @click.prevent="scrollToSection('#contact')" class="btn-primary border-2 border-white bg-transparent hover:bg-white hover:text-primary">
              Get in Touch
            </a>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20">
            <div class="hero-stat">
              <div class="text-3xl md:text-4xl font-bold text-accent mb-2">500+</div>
              <div class="text-sm text-gray-300">Projects Completed</div>
            </div>
            <div class="hero-stat">
              <div class="text-3xl md:text-4xl font-bold text-accent mb-2">15+</div>
              <div class="text-sm text-gray-300">Years Experience</div>
            </div>
            <div class="hero-stat">
              <div class="text-3xl md:text-4xl font-bold text-accent mb-2">98%</div>
              <div class="text-sm text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>

        <!-- Image/Illustration -->
        <div class="hero-image hidden lg:block">
          <div class="relative">
            <div class="absolute inset-0 bg-secondary/20 rounded-3xl transform rotate-6"></div>
            <div class="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div class="aspect-square bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center">
                <svg class="w-48 h-48 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 scroll-indicator">
      <div class="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
        <div class="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

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
  const tl = gsap.timeline({ delay: 1.5 })
  
  tl.from('.hero-content h1', {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  })
  .from('.hero-content p', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.5')
  .from('.hero-content .flex', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.4')
  .from('.hero-stat', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power3.out'
  }, '-=0.4')
  .from('.hero-image', {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  }, '-=1')
  .from('.scroll-indicator', {
    opacity: 0,
    duration: 0.5
  }, '-=0.3')

  // Floating animation for shapes
  gsap.to('.hero-shape', {
    y: 30,
    duration: 3,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
    stagger: 0.5
  })
})
</script>