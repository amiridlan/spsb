<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary to-primary/90 overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0 bg-primary"></div>
    </div>

    <!-- Animated Shapes -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl float-animation"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl float-animation delay-500"></div>
    </div>

    <div class="container-custom relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="text-white">
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight fade-in-up">
            Building the 
            <span class="text-accent">Future</span> 
            Together
          </h1>
          <p class="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed fade-in-up delay-200">
            Innovative solutions for event spaces, buildings, and comprehensive facility management services.
          </p>
          <div class="flex flex-wrap gap-4 fade-in-up delay-300">
            <a href="#services" @click.prevent="scrollToServices" class="btn-accent">
              Explore Services
            </a>
            <router-link to="/contact" class="btn-primary border-2 border-white bg-transparent hover:bg-white hover:text-primary">
              Get in Touch
            </router-link>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20">
            <div class="fade-in-up delay-400">
              <div class="text-3xl md:text-4xl font-bold text-accent mb-2">500+</div>
              <div class="text-sm text-gray-300">Projects Completed</div>
            </div>
            <div class="fade-in-up delay-500">
              <div class="text-3xl md:text-4xl font-bold text-accent mb-2">15+</div>
              <div class="text-sm text-gray-300">Years Experience</div>
            </div>
            <div class="fade-in-up delay-600">
              <div class="text-3xl md:text-4xl font-bold text-accent mb-2">98%</div>
              <div class="text-sm text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>

        <!-- Image/Illustration -->
        <div class="hidden lg:block fade-in-right delay-400">
          <div class="relative">
            <div class="absolute inset-0 bg-secondary/20 rounded-3xl transform rotate-6"></div>
            <div class="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:scale-105 transition-transform duration-500">
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
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 fade-in delay-700">
      <div class="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
        <div class="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const scrollToServices = (): void => {
  const element = document.querySelector('#services')
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
</script>