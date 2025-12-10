<template>
  <div class="company-profile-page">
    <!-- Page Hero -->
    <section class="relative py-20 bg-gradient-to-br from-primary via-primary to-primary/90 overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%231F8A70\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
      </div>

      <div class="container-custom relative z-10">
        <div class="text-center text-white page-hero">
          <h1 class="text-5xl md:text-6xl font-bold mb-6">Company Profile</h1>
          <p class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Discover our journey, values, and commitment to excellence in delivering world-class facility management solutions.
          </p>
        </div>
      </div>
    </section>

    <!-- About Us Section -->
    <section class="py-20 bg-white">
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
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="py-20 bg-gray-50">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div class="mission-card bg-white rounded-2xl p-8 shadow-lg">
            <div class="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="text-3xl font-bold text-primary mb-4">Our Mission</h3>
            <p class="text-gray-600 leading-relaxed">
              To provide innovative, sustainable, and reliable facility management solutions that enhance the 
              operational efficiency and success of our clients' businesses while maintaining the highest standards 
              of quality and service excellence.
            </p>
          </div>

          <div class="vision-card bg-white rounded-2xl p-8 shadow-lg">
            <div class="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
            </div>
            <h3 class="text-3xl font-bold text-primary mb-4">Our Vision</h3>
            <p class="text-gray-600 leading-relaxed">
              To be the most trusted and preferred facility management partner globally, recognized for our 
              commitment to innovation, sustainability, and exceptional client relationships that drive long-term 
              value and success.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values -->
    <section class="py-20 bg-white">
      <div class="container-custom">
        <div class="text-center mb-12 values-header">
          <h2 class="text-4xl md:text-5xl font-bold text-primary mb-4">Our Core Values</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(value, index) in values" 
            :key="index"
            class="value-card bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group"
          >
            <div class="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
              <component :is="value.icon" class="w-6 h-6 text-secondary group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 class="text-xl font-bold text-primary mb-3">{{ value.name }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20 bg-gradient-to-br from-primary to-primary/90">
      <div class="container-custom">
        <div class="text-center mb-12 team-header">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">Our Leadership</h2>
          <p class="text-xl text-gray-300 max-w-2xl mx-auto">
            Meet the experts driving our success
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="(member, index) in team" 
            :key="index"
            class="team-card bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <div class="w-24 h-24 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">{{ member.name }}</h3>
            <p class="text-accent font-semibold mb-3">{{ member.position }}</p>
            <p class="text-gray-300 text-sm leading-relaxed">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gray-50">
      <div class="container-custom">
        <div class="bg-primary rounded-2xl p-12 text-white relative overflow-hidden text-center">
          <div class="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent"></div>
          <div class="relative z-10">
            <h3 class="text-3xl font-bold mb-4">Ready to Work With Us?</h3>
            <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your business succeed
            </p>
            <router-link to="/contact" class="btn-accent inline-block">
              Get in Touch
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { h, onMounted } from 'vue'
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

interface Value {
  name: string
  description: string
  icon: () => any
}

const values: Value[] = [
  {
    name: 'Integrity',
    description: 'We conduct our business with honesty, transparency, and ethical practices in all our interactions.',
    icon: () => h('svg', { fill: 'currentColor', viewBox: '0 0 20 20' }, [
      h('path', { 'fill-rule': 'evenodd', d: 'M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z', 'clip-rule': 'evenodd' })
    ])
  },
  {
    name: 'Innovation',
    description: 'We embrace new technologies and creative approaches to continuously improve our services.',
    icon: () => h('svg', { fill: 'currentColor', viewBox: '0 0 20 20' }, [
      h('path', { d: 'M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' })
    ])
  },
  {
    name: 'Excellence',
    description: 'We strive for the highest quality in every project, exceeding expectations consistently.',
    icon: () => h('svg', { fill: 'currentColor', viewBox: '0 0 20 20' }, [
      h('path', { d: 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' })
    ])
  },
  {
    name: 'Sustainability',
    description: 'We are committed to environmentally responsible practices and sustainable solutions.',
    icon: () => h('svg', { fill: 'currentColor', viewBox: '0 0 20 20' }, [
      h('path', { 'fill-rule': 'evenodd', d: 'M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z', 'clip-rule': 'evenodd' })
    ])
  },
  {
    name: 'Collaboration',
    description: 'We believe in the power of teamwork and building strong partnerships with our clients.',
    icon: () => h('svg', { fill: 'currentColor', viewBox: '0 0 20 20' }, [
      h('path', { d: 'M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z' })
    ])
  },
  {
    name: 'Accountability',
    description: 'We take full responsibility for our commitments and deliver on our promises.',
    icon: () => h('svg', { fill: 'currentColor', viewBox: '0 0 20 20' }, [
      h('path', { 'fill-rule': 'evenodd', d: 'M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z', 'clip-rule': 'evenodd' })
    ])
  }
]

interface TeamMember {
  name: string
  position: string
  bio: string
}

const team: TeamMember[] = [
  {
    name: 'John Anderson',
    position: 'Chief Executive Officer',
    bio: '20+ years of leadership experience in facility management and strategic business development.'
  },
  {
    name: 'Sarah Martinez',
    position: 'Chief Operations Officer',
    bio: 'Expert in operational excellence with a proven track record in large-scale facility operations.'
  },
  {
    name: 'Michael Chen',
    position: 'Chief Technology Officer',
    bio: 'Leading innovation in smart building technologies and digital transformation initiatives.'
  }
]

onMounted(() => {
  gsap.from('.page-hero', {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  })

  gsap.from('.about-image', {
    scrollTrigger: {
      trigger: '.about-image',
      start: 'top 80%',
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  })

  gsap.from('.about-content > *', {
    scrollTrigger: {
      trigger: '.about-content',
      start: 'top 80%',
    },
    x: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out'
  })

  gsap.from('.stats-card', {
    scrollTrigger: {
      trigger: '.stats-card',
      start: 'top 90%',
    },
    scale: 0,
    opacity: 0,
    duration: 0.6,
    ease: 'back.out(1.7)'
  })

  gsap.from('.mission-card, .vision-card', {
    scrollTrigger: {
      trigger: '.mission-card',
      start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
  })

  gsap.from('.value-card', {
    scrollTrigger: {
      trigger: '.values-header',
      start: 'top 70%',
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out'
  })

  gsap.from('.team-card', {
    scrollTrigger: {
      trigger: '.team-header',
      start: 'top 70%',
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out'
  })
})
</script>