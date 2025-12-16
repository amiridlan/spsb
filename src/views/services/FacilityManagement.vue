<template>
  <div class="facility-management-page">
    <!-- Page Hero -->
    <section class="relative py-24 mt-14 bg-gradient-to-br from-primary via-primary to-primary/90 overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0 bg-primary"></div>
      </div>

      <div class="container-custom relative z-10">
        <div class="max-w-4xl mx-auto text-center text-white">
          <div class="w-20 h-20 bg-secondary/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 fade-in scale-in">
            <svg class="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
          <h1 class="text-5xl md:text-6xl font-bold mb-6 fade-in-up">Facility Management</h1>
          <p class="text-xl md:text-2xl text-gray-300 leading-relaxed fade-in-up delay-200">
            Comprehensive end-to-end facility management solutions that optimize operational efficiency and ensure seamless daily operations.
          </p>
        </div>
      </div>
    </section>

    <!-- Industries Served -->
    <section class="py-20 bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-4xl md:text-5xl font-bold text-primary mb-4">Syarikat Yang Kami Khidmati</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Dipercayai oleh syarikat-syarikat terkemuka
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="(company, index) in companies" 
            :key="index"
            class="bg-white rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 group animate-on-scroll border-2 border-gray-100 hover:border-secondary"
            :class="`delay-${(index + 1) * 100}`"
          >
            <!-- Logo Placeholder -->
            <div class="w-32 h-32 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 border-2 border-dashed border-gray-300 group-hover:border-secondary">
              <div class="text-center">
                <svg class="w-16 h-16 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <span class="text-xs text-gray-400 font-medium">Logo</span>
              </div>
            </div>
            
            <!-- Company Name -->
            <h3 class="text-lg font-bold text-primary leading-tight group-hover:text-secondary transition-colors duration-300">
              {{ company.name }}
            </h3>
            
            <!-- Optional: Company Type/Category -->
            <p v-if="company.category" class="text-sm text-gray-500 mt-2">
              {{ company.category }}
            </p>
          </div>
        </div>

        <!-- Additional Info -->
        <div class="mt-12 text-center animate-on-scroll delay-500">
          <router-link to="/contact" class="btn-secondary inline-flex items-center space-x-2">
            <span>Sertai Senarai Pelanggan Kami</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Core Services -->
    <section class="py-20 bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-4xl md:text-5xl font-bold text-primary mb-4">Core Services</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive facility management across all critical areas
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(service, index) in coreServices" 
            :key="index"
            class="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group animate-on-scroll"
            :class="`delay-${(index + 1) * 100}`"
          >
            <div class="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
              <component :is="service.icon" class="w-8 h-8 text-secondary group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 class="text-xl font-bold text-primary mb-3">{{ service.title }}</h3>
            <p class="text-gray-600 mb-4 leading-relaxed">{{ service.description }}</p>
            <ul class="space-y-2">
              <li 
                v-for="(item, iIndex) in service.items" 
                :key="iIndex"
                class="flex items-start space-x-2 text-sm text-gray-600"
              >
                <svg class="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { useScrollAnimation } from '../../composables/useScrollAnimation'

useScrollAnimation()

interface CoreService {
  title: string
  description: string
  icon: () => any
  items: string[]
}

interface Company {
  name: string
  category?: string
}

const coreServices: CoreService[] = [
  {
    title: 'HVAC Management',
    description: 'Complete heating, ventilation, and air conditioning system oversight.',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' })
    ]),
    items: [
      'Regular system inspections',
      'Filter replacement programs',
      'Energy efficiency optimization',
      'Emergency repair services'
    ]
  },
  {
    title: 'Electrical Systems',
    description: 'Professional electrical maintenance and safety compliance.',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M13 10V3L4 14h7v7l9-11h-7z' })
    ]),
    items: [
      'Lighting system management',
      'Power distribution monitoring',
      'Electrical safety inspections',
      'Backup generator maintenance'
    ]
  },
  {
    title: 'Plumbing Services',
    description: 'Comprehensive plumbing system care and maintenance.',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' })
    ]),
    items: [
      'Preventive pipe maintenance',
      'Fixture repairs and upgrades',
      'Water quality monitoring',
      'Leak detection and repair'
    ]
  },
  {
    title: 'Janitorial Services',
    description: 'Professional cleaning and sanitation programs.',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' })
    ]),
    items: [
      'Daily cleaning services',
      'Specialized floor care',
      'Restroom sanitation',
      'Waste management'
    ]
  },
  {
    title: 'Security Systems',
    description: 'Advanced security and access control management.',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' })
    ]),
    items: [
      'Access control systems',
      'CCTV monitoring',
      'Security personnel coordination',
      'Emergency response protocols'
    ]
  },
  {
    title: 'Emergency Support',
    description: '24/7 emergency response and crisis management.',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636' })
    ]),
    items: [
      '24/7 hotline support',
      'Rapid response teams',
      'Disaster recovery planning',
      'Emergency coordination'
    ]
  }
]

const companies: Company[] = [
  {
    name: 'Perbadanan Setiausaha  Kerajaan Negeri Perak (SSI)',
    category: 'Bangunan Korporat'
  },
  {
    name: 'Kompleks Menembak Darul Ridzuan (KMDR)',
    category: 'Kemudahan Tempat Bersukan'
  },
  {
    name: 'CASSIA',
    category: 'Ruang Majlis'
  },
  {
    name: 'Silver Smart Sdn. Bhd.',
    category: 'Bangunan Korporat'
  },
  {
    name: 'Perak FC',
    category: 'Bangunan Korporat'
  },
  {
    name: 'Suruhanjaya Perkhidmatan Awam Negeri Perak (SPA)',
    category: 'Bangunan Korporat'
  },
  {
    name: 'Texas Chicken Soho IPOH',
    category: 'Restoran'
  }
]
</script>