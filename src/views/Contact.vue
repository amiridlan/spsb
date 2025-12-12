<template>
  <div class="contact-page">
    <!-- Page Hero -->
    <section class="relative py-20 bg-gradient-to-br from-primary via-primary to-primary/90 overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%231F8A70\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
      </div>

      <div class="container-custom relative z-10">
        <div class="text-center text-white">
          <h1 class="text-5xl md:text-6xl font-bold mb-6 fade-in-up">Get In Touch</h1>
          <p class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto fade-in-up delay-200">
            Ready to start your project? Contact us today and let's discuss how we can help your business thrive.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20 bg-white">
      <div class="container-custom">
        <div class="max-w-5xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Contact Cards -->
            <div class="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 animate-on-scroll">
              <div class="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mb-6 mx-auto">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div class="text-center">
                <div class="text-primary font-bold text-xl mb-3">Visit Us</div>
                <div class="text-gray-600 leading-relaxed">
                  123 Business Avenue<br>
                  Suite 100<br>
                  City, State 12345
                </div>
              </div>
            </div>

            <div class="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 animate-on-scroll delay-100">
              <div class="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mb-6 mx-auto">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div class="text-center">
                <div class="text-primary font-bold text-xl mb-3">Call Us</div>
                <div class="text-gray-600">
                  <a href="tel:+15551234567" class="hover:text-secondary transition-colors text-lg font-semibold">
                    (555) 123-4567
                  </a>
                  <div class="text-sm text-gray-500 mt-2">Mon-Fri: 9AM - 6PM</div>
                </div>
              </div>
            </div>

            <div class="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 animate-on-scroll delay-200">
              <div class="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mb-6 mx-auto">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div class="text-center">
                <div class="text-primary font-bold text-xl mb-3">Email Us</div>
                <div class="text-gray-600">
                  <a href="mailto:info@corpname.com" class="hover:text-secondary transition-colors text-lg font-semibold">
                    info@corpname.com
                  </a>
                  <div class="text-sm text-gray-500 mt-2">We'll respond within 24 hours</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Business Hours & Social Media -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <!-- Business Hours Card -->
            <div class="bg-gradient-to-br from-secondary to-primary rounded-xl p-8 text-white animate-on-scroll delay-300">
              <h3 class="text-2xl font-bold mb-6 flex items-center space-x-2">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Business Hours</span>
              </h3>
              <div class="space-y-3 text-gray-100">
                <div class="flex justify-between items-center pb-3 border-b border-white/20">
                  <span class="text-lg">Monday - Friday</span>
                  <span class="font-bold text-accent">9:00 AM - 6:00 PM</span>
                </div>
                <div class="flex justify-between items-center pb-3 border-b border-white/20">
                  <span class="text-lg">Saturday</span>
                  <span class="font-bold text-accent">10:00 AM - 4:00 PM</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-lg">Sunday</span>
                  <span class="font-bold text-accent">Closed</span>
                </div>
              </div>
            </div>

            <!-- Social Media Card -->
            <div class="bg-gray-50 rounded-xl p-8 animate-on-scroll delay-400">
              <h3 class="text-2xl font-bold text-primary mb-6">Follow Us</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Stay connected with us on social media for the latest updates, news, and special offers.
              </p>
              <div class="flex space-x-4">
                <a 
                  v-for="social in socialLinks" 
                  :key="social.name"
                  :href="social.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-14 h-14 bg-white hover:bg-secondary rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-md hover:text-white border-2 border-gray-200 hover:border-secondary"
                  :aria-label="social.name"
                >
                  <component :is="social.icon" class="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-20 bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-12 animate-on-scroll">
          <h2 class="text-4xl md:text-5xl font-bold text-primary mb-4">Find Us</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Visit our office or reach out through any of the channels above
          </p>
        </div>
        
        <!-- Placeholder for map -->
        <div class="bg-gray-300 rounded-xl h-96 flex items-center justify-center shadow-lg animate-on-scroll delay-200 hover:shadow-2xl transition-all duration-300">
          <div class="text-center">
            <svg class="w-20 h-20 text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
            </svg>
            <p class="text-gray-600 font-medium text-lg mb-2">Map Integration Placeholder</p>
            <p class="text-sm text-gray-500">123 Business Avenue, Suite 100, City, State 12345</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'
import type { SocialLink } from '../types'

useScrollAnimation()

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
</script>