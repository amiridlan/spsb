<template>
  <div class="event-spaces-page">
    <!-- Page Hero -->
    <section class="relative py-24 bg-gradient-to-br from-primary via-primary to-primary/90 overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%231F8A70\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
      </div>

      <div class="container-custom relative z-10">
        <div class="max-w-4xl mx-auto text-center text-white page-hero">
          <div class="w-20 h-20 bg-secondary/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg class="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
          </div>
          <h1 class="text-5xl md:text-6xl font-bold mb-6">Event Spaces</h1>
          <p class="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Premium venues designed for corporate events, conferences, and special occasions that leave lasting impressions.
          </p>
        </div>
      </div>
    </section>

    <!-- Overview Section -->
    <section class="py-20 bg-white">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="overview-content">
            <h2 class="text-4xl font-bold text-primary mb-6">World-Class Event Venues</h2>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              Our event spaces are meticulously designed to accommodate a wide range of events, from intimate board meetings 
              to large-scale conferences and celebrations. Each venue combines modern aesthetics with cutting-edge technology 
              to ensure your event runs smoothly and leaves a lasting impression on your attendees.
            </p>
            <p class="text-lg text-gray-600 leading-relaxed">
              Whether you're hosting a product launch, corporate training, wedding reception, or networking event, our 
              versatile spaces can be customized to match your vision and requirements perfectly.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Grid -->
    <section class="py-20 bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16 features-header">
          <h2 class="text-4xl md:text-5xl font-bold text-primary mb-4">What We Offer</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need for a successful event
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(feature, index) in features" 
            :key="index"
            class="feature-card bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
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

    <!-- Space Options -->
    <section class="py-20 bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-primary mb-4">Available Spaces</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect venue for your event
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div 
            v-for="(space, index) in spaces" 
            :key="index"
            class="space-card bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
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
              <ul class="space-y-2">
                <li 
                  v-for="(amenity, aIndex) in space.amenities" 
                  :key="aIndex"
                  class="flex items-center space-x-2 text-sm text-gray-600"
                >
                  <svg class="w-4 h-4 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span>{{ amenity }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-br from-primary to-primary/90">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center text-white cta-section">
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
  </div>
</template>

<script setup lang="ts">
import { h, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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
  amenities: string[]
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
    name: 'Grand Ballroom',
    capacity: 'Up to 500 guests',
    size: '5,000 sq ft',
    description: 'Our largest and most elegant space, perfect for conferences, galas, and large celebrations.',
    amenities: [
      'Professional lighting system',
      'Built-in stage and podium',
      'Multiple screen displays',
      'Premium sound system',
      'Separate breakout rooms'
    ]
  },
  {
    name: 'Executive Conference Room',
    capacity: 'Up to 50 guests',
    size: '800 sq ft',
    description: 'Sophisticated boardroom-style space ideal for corporate meetings and presentations.',
    amenities: [
      'Video conferencing equipment',
      'Interactive whiteboard',
      'Executive seating',
      'Private entrance',
      'Complimentary refreshments'
    ]
  },
  {
    name: 'Innovation Hub',
    capacity: 'Up to 100 guests',
    size: '1,500 sq ft',
    description: 'Modern, flexible space designed for workshops, training sessions, and collaborative events.',
    amenities: [
      'Modular furniture',
      'Multiple breakout areas',
      'Tech charging stations',
      'Natural lighting',
      'Collaboration tools'
    ]
  },
  {
    name: 'Garden Terrace',
    capacity: 'Up to 150 guests',
    size: '2,000 sq ft',
    description: 'Beautiful outdoor venue with covered areas, perfect for receptions and networking events.',
    amenities: [
      'Climate-controlled sections',
      'Ambient lighting',
      'Outdoor bar setup',
      'Garden views',
      'Weather contingency plan'
    ]
  }
]

onMounted(() => {
  gsap.from('.page-hero > *', {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
  })

  gsap.from('.overview-content > *', {
    scrollTrigger: {
      trigger: '.overview-content',
      start: 'top 80%',
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
  })

  gsap.from('.feature-card', {
    scrollTrigger: {
      trigger: '.features-header',
      start: 'top 70%',
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out'
  })

  gsap.from('.space-card', {
    scrollTrigger: {
      trigger: '.space-card',
      start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
  })

  gsap.from('.cta-section > *', {
    scrollTrigger: {
      trigger: '.cta-section',
      start: 'top 80%',
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out'
  })
})
</script>