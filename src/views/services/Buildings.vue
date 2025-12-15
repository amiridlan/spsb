<template>
  <div class="buildings-page">
    <!-- Page Hero -->
    <section class="relative py-24 bg-gradient-to-br from-primary via-primary to-primary/90 overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%231F8A70\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
      </div>

      <div class="container-custom relative z-10">
        <div class="max-w-4xl mx-auto text-center text-white">
          <div class="w-20 h-20 bg-secondary/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 fade-in scale-in">
            <svg class="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/>
            </svg>
          </div>
          <h1 class="text-5xl md:text-6xl font-bold mb-6 fade-in-up">Buildings Management</h1>
          <p class="text-xl md:text-2xl text-gray-300 leading-relaxed fade-in-up delay-200">
            Comprehensive commercial and residential building management services that maximize property value and tenant satisfaction.
          </p>
        </div>
      </div>
    </section>

    <!-- Service Categories -->
    <section class="py-20 bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-4xl md:text-5xl font-bold text-primary mb-4">Our Services</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive management for every aspect of your property
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div 
            v-for="(category, index) in categories" 
            :key="index"
            class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 animate-on-scroll"
            :class="`delay-${(index + 1) * 200}`"
          >
            <div class="flex items-start space-x-6">
              <div class="flex-shrink-0 w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center">
                <component :is="category.icon" class="w-8 h-8 text-secondary" />
              </div>
              <div class="flex-grow">
                <h3 class="text-2xl font-bold text-primary mb-3">{{ category.title }}</h3>
                <p class="text-gray-600 mb-4 leading-relaxed">{{ category.description }}</p>
                <ul class="space-y-2">
                  <li 
                    v-for="(item, iIndex) in category.items" 
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
        </div>
      </div>
    </section>


    <!-- Property Types -->
    <section class="py-20 bg-white">
      <div class="container-custom">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-4xl md:text-5xl font-bold text-primary mb-4">Property Types We Manage</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
             Specialized expertise across diverse property categories
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div 
        v-for="(type, index) in propertyTypes" 
        :key="index"
        class="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group animate-on-scroll"
        :class="`delay-${(index + 1) * 100}`"
      >
        <div class="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
          <component :is="type.icon" class="w-7 h-7 text-secondary group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 class="text-xl font-bold text-primary mb-2">{{ type.name }}</h3>
        <p class="text-gray-600 text-sm leading-relaxed">{{ type.description }}</p>
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

interface Category {
  title: string
  description: string
  icon: () => any
  items: string[]
}

interface Benefit {
  title: string
  description: string
}

interface Stat {
  value: string
  label: string
  description: string
}

interface PropertyType {
  name: string
  description: string
  icon: () => any
}

const categories: Category[] = [
  {
    title: 'Property Acquisition & Development',
    description: 'Strategic guidance for property investment and development projects.',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' })
    ]),
    items: [
      'Market analysis and feasibility studies',
      'Due diligence coordination',
      'Development project management',
      'Zoning and permitting assistance',
      'Investment portfolio optimization'
    ]
  },
  {
    title: 'Tenant Relations & Leasing',
    description: 'Comprehensive tenant management for optimal occupancy rates.',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' })
    ]),
    items: [
      'Tenant screening and selection',
      'Lease negotiations and renewals',
      '24/7 tenant support services',
      'Move-in/move-out coordination',
      'Conflict resolution and mediation'
    ]
  },
  {
    title: 'Building Maintenance & Repairs',
    description: 'Proactive maintenance programs to preserve property value.',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' })
      ]),
    items: [
      'Preventive maintenance scheduling',
      'Emergency repair response',
      'Vendor management and coordination',
      'Quality control inspections',
      'Capital improvement planning'
    ]
  },
  {
    title: 'Financial Management',
    description: 'Transparent financial administration and reporting.',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' })
    ]),
    items: [
      'Rent collection and processing',
      'Budget preparation and monitoring',
      'Financial reporting and analytics',
      'Tax preparation support',
      'Invoice processing and payments'
    ]
  }
]

const benefits: Benefit[] = [
  {
    title: 'Maximize Property Value',
    description: 'Our strategic approach ensures your property appreciates in value through proper maintenance, tenant satisfaction, and market positioning.'
  },
  {
    title: 'Reduce Operating Costs',
    description: 'Leverage our vendor relationships and efficient processes to minimize expenses while maintaining quality standards.'
  },
  {
    title: 'Expert Compliance Management',
    description: 'Stay compliant with all local, state, and federal regulations through our comprehensive knowledge and monitoring systems.'
  },
  {
    title: 'Peace of Mind',
    description: 'Focus on your core business while we handle day-to-day operations, emergencies, and tenant relations with professionalism.'
  }
]

const stats: Stat[] = [
  {
    value: '250+',
    label: 'Buildings Managed',
    description: 'Across multiple markets'
  },
  {
    value: '95%',
    label: 'Occupancy Rate',
    description: 'Portfolio average'
  },
  {
    value: '4.8/5',
    label: 'Tenant Satisfaction',
    description: 'Average rating'
  },
  {
    value: '24/7',
    label: 'Support Available',
    description: 'Emergency response'
  }
]

const propertyTypes: PropertyType[] = [
  {
    name: 'Office Buildings',
    description: 'Class A, B, and C office spaces from small to large-scale commercial properties.',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' })
    ])
  },
  {
    name: 'Retail Centers',
    description: 'Shopping centers, strip malls, and standalone retail properties.',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' })
    ])
  },
  {
    name: 'Multi-Family Residential',
    description: 'Apartment complexes, condominiums, and multi-unit residential buildings.',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' })
    ])
  },
  {
    name: 'Industrial Properties',
    description: 'Warehouses, distribution centers, and light manufacturing facilities.',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z' })
    ])
  },
  {
    name: 'Mixed-Use Developments',
    description: 'Properties combining residential, commercial, and retail spaces.',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z' })
    ])
  },
  {
    name: 'Specialty Properties',
    description: 'Medical offices, educational facilities, and other unique property types.',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' })
    ])
  }
]
</script>