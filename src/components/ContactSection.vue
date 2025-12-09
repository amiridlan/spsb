<template>
  <section id="contact" class="py-20 bg-gradient-to-br from-primary to-primary/90">
    <div class="container-custom">
      <div class="max-w-5xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-12 contact-header">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p class="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to start your project? Contact us today and let's discuss how we can help.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <!-- Contact Info -->
          <div class="lg:col-span-2 space-y-6 contact-info">
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 class="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div class="space-y-4">
                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <div class="text-accent font-semibold mb-1">Address</div>
                    <div class="text-gray-300">
                      123 Business Avenue<br>
                      Suite 100<br>
                      City, State 12345
                    </div>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <div class="text-accent font-semibold mb-1">Phone</div>
                    <div class="text-gray-300">(555) 123-4567</div>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <div class="text-accent font-semibold mb-1">Email</div>
                    <div class="text-gray-300">info@corpname.com</div>
                  </div>
                </div>
              </div>

              <div class="mt-8 pt-6 border-t border-white/20">
                <div class="text-accent font-semibold mb-3">Business Hours</div>
                <div class="text-gray-300 space-y-1">
                  <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                  <div>Saturday: 10:00 AM - 4:00 PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="lg:col-span-3 contact-form">
            <div class="bg-white rounded-xl shadow-2xl p-8">
              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="firstName" class="block text-sm font-semibold text-primary mb-2">
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      v-model="formData.firstName"
                      type="text"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label for="lastName" class="block text-sm font-semibold text-primary mb-2">
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      v-model="formData.lastName"
                      type="text"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label for="email" class="block text-sm font-semibold text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    v-model="formData.email"
                    type="email"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label for="phone" class="block text-sm font-semibold text-primary mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    v-model="formData.phone"
                    type="tel"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label for="service" class="block text-sm font-semibold text-primary mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    v-model="formData.service"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="event-spaces">Event Spaces</option>
                    <option value="buildings">Buildings</option>
                    <option value="facility-management">Facility Management</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label for="message" class="block text-sm font-semibold text-primary mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    v-model="formData.message"
                    required
                    rows="5"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full btn-primary flex items-center justify-center space-x-2"
                  :class="{ 'opacity-50 cursor-not-allowed': isSubmitting }"
                >
                  <span v-if="!isSubmitting">Send Message</span>
                  <span v-else class="flex items-center space-x-2">
                    <svg class="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </span>
                </button>

                <!-- Success Message -->
                <transition
                  enter-active-class="transition duration-300 ease-out"
                  enter-from-class="opacity-0 scale-95"
                  enter-to-class="opacity-100 scale-100"
                  leave-active-class="transition duration-200 ease-in"
                  leave-from-class="opacity-100 scale-100"
                  leave-to-class="opacity-0 scale-95"
                >
                  <div v-if="showSuccess" class="bg-secondary/10 border border-secondary text-secondary px-4 py-3 rounded-lg">
                    <div class="flex items-center space-x-2">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                      <span class="font-semibold">Thank you! Your message has been sent successfully.</span>
                    </div>
                  </div>
                </transition>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import {gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { ContactFormData } from '../types'

gsap.registerPlugin(ScrollTrigger)

const isSubmitting = ref<boolean>(false)
const showSuccess = ref<boolean>(false)
const formData = reactive<ContactFormData>({
firstName: '',
lastName: '',
email: '',
phone: '',
service: '',
message: ''
})
const handleSubmit = async (): Promise<void> => {
try {
isSubmitting.value = true

// Simulate API call
await new Promise(resolve => setTimeout(resolve, 1500))

// Reset form
Object.keys(formData).forEach(key => {
  formData[key as keyof ContactFormData] = ''
})

// Show success message
showSuccess.value = true
setTimeout(() => {
  showSuccess.value = false
}, 5000)
} catch (error) {
console.error('Form submission error:', error)
} finally {
isSubmitting.value = false
}
}
onMounted(() => {
gsap.from('.contact-header', {
scrollTrigger: {
trigger: '#contact',
start: 'top 80%',
},
y: 50,
opacity: 0,
duration: 0.8,
ease: 'power3.out'
})
gsap.from('.contact-info', {
scrollTrigger: {
trigger: '#contact',
start: 'top 70%',
},
x: -50,
opacity: 0,
duration: 0.8,
ease: 'power3.out'
})
gsap.from('.contact-form', {
scrollTrigger: {
trigger: '#contact',
start: 'top 70%',
},
x: 50,
opacity: 0,
duration: 0.8,
ease: 'power3.out'
})
})
</script>