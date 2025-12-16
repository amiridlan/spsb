<template>
  <div class="event-spaces-page">
    <!-- Page Hero -->
    <section class="relative py-24 mt-14 bg-gradient-to-br from-primary via-primary to-primary/90 overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0 bg-primary"></div>
      </div>

      <div class="container-custom relative z-10">
        <div class="max-w-4xl mx-auto text-center text-white">
          <div class="w-20 h-20 bg-secondary/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 fade-in scale-in">
            <svg class="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
          </div>
          <h1 class="text-5xl md:text-6xl font-bold mb-6 fade-in-up">Ruang Majlis</h1>
          <p class="text-xl md:text-2xl text-gray-300 leading-relaxed fade-in-up delay-200">
            Premium venues designed for corporate events, conferences, and special occasions that leave lasting impressions.
          </p>
        </div>
      </div>
    </section>

    <!-- Space Options -->
    <section class="py-20 bg-white">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-4xl md:text-5xl font-bold text-primary mb-4">Ruang yang Disediakan</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect venue for your event
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div 
            v-for="(space, index) in spaces" 
            :key="index"
            class="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 animate-on-scroll"
            :class="`delay-${(index + 1) * 200}`"
          >
            <div class="h-64 bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
              <svg class="w-32 h-32 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>
            <div class="p-8">
              <h3 class="text-2xl font-bold text-primary mb-3">{{ space.name }}</h3>
              <div class="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                <span class="flex items-center space-x-1">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                  </svg>
                  <span>{{ space.capacity }}</span>
                </span>
                <span class="flex items-center space-x-1">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                  </svg>
                  <span>{{ space.size }}</span>
                </span>
              </div>
              <p class="text-gray-600 mb-4 leading-relaxed">{{ space.description }}</p>
              <ul class="space-y-2 mb-6">
                <li 
                  v-for="(amenity, aIndex) in space.amenities.slice(0, 5)" 
                  :key="aIndex"
                  class="flex items-center space-x-2 text-sm text-gray-600"
                >
                  <svg class="w-4 h-4 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span>{{ amenity }}</span>
                </li>
              </ul>
              <div class="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                <button 
                  @click="openDetailsModal(space)"
                  class="flex-1 px-4 py-3 bg-white border-2 border-secondary text-secondary rounded-lg font-semibold hover:bg-secondary hover:text-white transition-colors duration-300"
                >
                  Maklumat Lanjut
                </button>
                <button 
                  @click="openBookingModal(space)"
                  class="flex-1 px-4 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-secondary/90 transition-colors duration-300"
                >
                  Tempah Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Grid -->
    <section class="py-20 bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-4xl md:text-5xl font-bold text-primary mb-4">What We Offer</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need for a successful event
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(feature, index) in features" 
            :key="index"
            class="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group animate-on-scroll"
            :class="`delay-${(index + 1) * 100}`"
          >
            <div class="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
              <component :is="feature.icon" class="w-8 h-8 text-secondary group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 class="text-xl font-bold text-primary mb-3">{{ feature.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-br from-primary to-primary/90">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center text-white animate-on-scroll">
          <h2 class="text-4xl font-bold mb-6">Ready to Book Your Event Space?</h2>
          <p class="text-xl text-gray-300 mb-8">
            Contact us today to discuss your event requirements and schedule a venue tour
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <router-link to="/contact" class="btn-accent">
              Contact Us
            </router-link>
            <a href="tel:+15551234567" class="btn-primary border-2 border-white bg-transparent hover:bg-white hover:text-primary">
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Details Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div 
          v-if="showDetailsModal" 
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          @click="closeDetailsModal"
        >
          <div 
            class="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            @click.stop
          >
            <div class="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
              <h3 class="text-2xl font-bold text-primary">{{ selectedSpace?.name }}</h3>
              <button 
                @click="closeDetailsModal"
                class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            <div class="p-6">
              <div class="mb-6">
                <div class="flex items-center space-x-6 text-gray-600 mb-4">
                  <span class="flex items-center space-x-2">
                    <svg class="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                    </svg>
                    <span class="font-medium">{{ selectedSpace?.capacity }}</span>
                  </span>
                  <span class="flex items-center space-x-2">
                    <svg class="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                    </svg>
                    <span class="font-medium">{{ selectedSpace?.size }}</span>
                  </span>
                </div>
                <p class="text-gray-700 leading-relaxed text-lg">{{ selectedSpace?.description }}</p>
              </div>

              <div class="mb-6">
                <h4 class="text-xl font-bold text-primary mb-4">Full Description</h4>
                <p class="text-gray-700 leading-relaxed">{{ selectedSpace?.fullDescription }}</p>
              </div>

              <div class="mb-6">
                <h4 class="text-xl font-bold text-primary mb-4">Amenities & Features</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div 
                    v-for="(amenity, index) in selectedSpace?.amenities" 
                    :key="index"
                    class="flex items-center space-x-3 text-gray-700"
                  >
                    <svg class="w-5 h-5 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <span>{{ amenity }}</span>
                  </div>
                </div>
              </div>

              <div class="mb-6">
                <h4 class="text-xl font-bold text-primary mb-4">Ideal For</h4>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="(event, index) in selectedSpace?.idealFor" 
                    :key="index"
                    class="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium"
                  >
                    {{ event }}
                  </span>
                </div>
              </div>

              <div class="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
                <button 
                  @click="openBookingModalFromDetails"
                  class="flex-1 px-6 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-secondary/90 transition-colors duration-300"
                >
                  Tempah Sekarang
                </button>
                <button 
                  @click="closeDetailsModal"
                  class="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- Booking Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div 
          v-if="showBookingModal" 
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          @click="closeBookingModal"
        >
          <div 
            class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            @click.stop
          >
            <div class="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
              <h3 class="text-2xl font-bold text-primary">Tempah {{ selectedSpace?.name }}</h3>
              <button 
                @click="closeBookingModal"
                class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            <div class="p-6">
              <div class="bg-secondary/10 rounded-lg p-4 mb-6">
                <h4 class="font-semibold text-primary mb-3">Atau hubungi kami terus:</h4>
                <div class="space-y-2">
                  <div class="flex items-center space-x-3">
                    <svg class="w-5 h-5 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                    <div>
                      <p class="font-medium text-gray-900">{{ staffContact.name }}</p>
                      <a :href="`tel:${staffContact.phone}`" class="text-secondary hover:underline">
                        {{ staffContact.phone }}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <form @submit.prevent="handleBookingSubmit" class="space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Nama Penuh *</label>
                    <input 
                      v-model="bookingForm.fullName"
                      type="text" 
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                      placeholder="Masukkan nama penuh"
                    >
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Nombor Telefon *</label>
                    <input 
                      v-model="bookingForm.phone"
                      type="tel" 
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                      placeholder="Contoh: 012-3456789"
                    >
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input 
                    v-model="bookingForm.email"
                    type="email" 
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    placeholder="email@example.com"
                  >
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Organisasi/Syarikat</label>
                  <input 
                    v-model="bookingForm.organization"
                    type="text"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    placeholder="Nama organisasi atau syarikat"
                  >
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Tarikh Acara *</label>
                    <input 
                      v-model="bookingForm.eventDate"
                      type="date" 
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    >
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Jangkaan Tetamu *</label>
                    <input 
                      v-model="bookingForm.guestCount"
                      type="number" 
                      required
                      min="1"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                      placeholder="Bilangan tetamu"
                    >
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Jenis Acara *</label>
                  <select 
                    v-model="bookingForm.eventType"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  >
                    <option value="">Pilih jenis acara</option>
                    <option value="conference">Persidangan/Conference</option>
                    <option value="seminar">Seminar/Workshop</option>
                    <option value="corporate">Acara Korporat</option>
                    <option value="wedding">Majlis Perkahwinan</option>
                    <option value="birthday">Hari Jadi</option>
                    <option value="meeting">Mesyuarat/Meeting</option>
                    <option value="other">Lain-lain</option>
                  </select>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Butiran Tambahan</label>
                  <textarea 
                    v-model="bookingForm.additionalDetails"
                    rows="4"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    placeholder="Terangkan butiran acara, keperluan khas, atau soalan anda..."
                  ></textarea>
                </div>

                <div class="flex items-start space-x-2">
                  <input 
                    v-model="bookingForm.agreeTerms"
                    type="checkbox" 
                    required
                    id="agreeTerms"
                    class="mt-1 w-4 h-4 text-secondary border-gray-300 rounded focus:ring-2 focus:ring-secondary"
                  >
                  <label for="agreeTerms" class="text-sm text-gray-600">
                    Saya bersetuju dengan terma dan syarat perkhidmatan tempahan ruang acara
                  </label>
                </div>

                <div class="flex flex-col sm:flex-row gap-3 pt-4">
                  <button 
                    type="submit"
                    class="flex-1 px-6 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-secondary/90 transition-colors duration-300"
                  >
                    Hantar Tempahan
                  </button>
                  <button 
                    type="button"
                    @click="closeBookingModal"
                    class="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300"
                  >
                    Batal
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { h, ref } from 'vue'
import { useScrollAnimation } from '../../composables/useScrollAnimation'

useScrollAnimation()

interface Feature {
  title: string
  description: string
  icon: () => any
}

interface Space {
  name: string
  capacity: string
  size: string
  description: string
  fullDescription: string
  amenities: string[]
  idealFor: string[]
}

interface BookingForm {
  fullName: string
  phone: string
  email: string
  organization: string
  eventDate: string
  guestCount: number | null
  eventType: string
  additionalDetails: string
  agreeTerms: boolean
}

const showDetailsModal = ref(false)
const showBookingModal = ref(false)
const selectedSpace = ref<Space | null>(null)

const staffContact = {
  name: 'Ahmad bin Abdullah',
  phone: '012-345 6789'
}

const bookingForm = ref<BookingForm>({
  fullName: '',
  phone: '',
  email: '',
  organization: '',
  eventDate: '',
  guestCount: null,
  eventType: '',
  additionalDetails: '',
  agreeTerms: false
})

const openDetailsModal = (space: Space) => {
  selectedSpace.value = space
  showDetailsModal.value = true
  document.body.style.overflow = 'hidden'
}

const closeDetailsModal = () => {
  showDetailsModal.value = false
  document.body.style.overflow = ''
}

const openBookingModal = (space: Space) => {
  selectedSpace.value = space
  showBookingModal.value = true
  document.body.style.overflow = 'hidden'
}

const closeBookingModal = () => {
  showBookingModal.value = false
  document.body.style.overflow = ''
  bookingForm.value = {
    fullName: '',
    phone: '',
    email: '',
    organization: '',
    eventDate: '',
    guestCount: null,
    eventType: '',
    additionalDetails: '',
    agreeTerms: false
  }
}

const openBookingModalFromDetails = () => {
  closeDetailsModal()
  showBookingModal.value = true
}

const handleBookingSubmit = () => {
  console.log('Booking form submitted:', {
    space: selectedSpace.value?.name,
    ...bookingForm.value
  })
  alert(`Terima kasih! Tempahan anda untuk ${selectedSpace.value?.name} telah diterima. Kami akan menghubungi anda tidak lama lagi.`)
  closeBookingModal()
}

const features: Feature[] = [
  {
    title: 'Flexible Configurations',
    description: 'Easily adaptable layouts for any event size, from intimate gatherings to large conferences.',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z' })
    ])
  },
  {
    title: 'Advanced AV Equipment',
    description: 'State-of-the-art audiovisual technology including projectors, sound systems, and video conferencing.',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' })
    ])
  },
  {
    title: 'Professional Coordination',
    description: 'Dedicated event coordinators to ensure every detail is perfectly executed.',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' })
    ])
  },
  {
    title: 'Catering Services',
    description: 'Full-service catering options with customizable menus for all dietary requirements.',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' })
    ])
  },
  {
    title: 'High-Speed WiFi',
    description: 'Reliable, enterprise-grade internet connectivity throughout all event spaces.',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0' })
    ])
  },
  {
    title: 'Convenient Parking',
    description: 'Ample parking facilities and accessible entry points for all attendees.',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' }),
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M15 11a3 3 0 11-6 0 3 3 0 016 0z' })
    ])
  }
]

const spaces: Space[] = [
  {
    name: 'CASSIA',
    capacity: 'Up to 300 guests',
    size: '5,000 sq ft',
    description: 'Our largest and most elegant space, perfect for conferences, galas, and large celebrations.',
    fullDescription: 'CASSIA is our premier event venue, offering an impressive 5,000 square feet of versatile space that can accommodate up to 300 guests. This grand hall features soaring ceilings, elegant architectural details, and floor-to-ceiling windows that flood the space with natural light. The sophisticated design seamlessly blends modern amenities with timeless elegance, making it the perfect backdrop for your most important events. Whether you\'re hosting a corporate conference, product launch, wedding reception, or gala dinner, CASSIA provides the perfect canvas to bring your vision to life.',
    amenities: [
      'Professional lighting system',
      'Built-in stage and podium',
      'Multiple screen displays',
      'Premium sound system',
      'Separate breakout rooms',
      'Green room for speakers/performers',
      'Dedicated coat check area',
      'Climate control system'
    ],
    idealFor: [
      'Corporate Conferences',
      'Wedding Receptions',
      'Gala Dinners',
      'Product Launches',
      'Award Ceremonies',
      'Trade Shows'
    ]
  },
  {
    name: 'Mini CASSIA',
    capacity: 'Up to 100 guests',
    size: '800 sq ft',
    description: 'Sophisticated boardroom-style space ideal for corporate meetings and presentations.',
    fullDescription: 'Mini CASSIA offers an intimate yet professional setting for smaller gatherings and corporate events. This 800 square foot venue is designed with versatility in mind, featuring movable partitions that allow for various seating arrangements. The space is equipped with cutting-edge technology and premium furnishings, creating an environment that fosters productivity and collaboration. The elegant décor and attention to detail make Mini CASSIA ideal for executive meetings, workshops, training sessions, and intimate celebrations that require a more personal touch.',
    amenities: [
      'Video conferencing equipment',
      'Interactive whiteboard',
      'Executive seating',
      'Private entrance',
      'Complimentary refreshments',
      'High-speed WiFi',
      'Adjustable lighting',
      'Soundproofing'
    ],
    idealFor: [
      'Board Meetings',
      'Training Workshops',
      'Business Presentations',
      'Team Building Events',
      'Small Seminars',
      'Intimate Celebrations'
    ]
  }
]
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active > div,
.modal-leave-active > div {
  transition: transform 0.3s ease;
}

.modal-enter-from > div,
.modal-leave-to > div {
  transform: scale(0.95);
}
</style>