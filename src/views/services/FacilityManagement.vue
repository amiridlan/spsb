<template>
  <div class="facility-management-page">
    <!-- Page Hero -->
    <section class="relative py-24 bg-gradient-to-br from-primary via-primary to-primary/90 overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%231F8A70\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
      </div>

      <div class="container-custom relative z-10">
        <div class="max-w-4xl mx-auto text-center text-white page-hero">
          <div class="w-20 h-20 bg-secondary/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg class="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
          <h1 class="text-5xl md:text-6xl font-bold mb-6">Facility Management</h1>
          <p class="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Comprehensive end-to-end facility management solutions that optimize operational efficiency and ensure seamless daily operations.
          </p>
        </div>
      </div>
    </section>

    <!-- Overview Section -->
    <section class="py-20 bg-white">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="overview-content">
            <h2 class="text-4xl font-bold text-primary mb-6">Complete Facility Solutions</h2>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              Our facility management services provide a holistic approach to maintaining and optimizing your building's 
              operations. From preventive maintenance and emergency repairs to janitorial services and security management, 
              we ensure every aspect of your facility runs smoothly and efficiently.
            </p>
            <p class="text-lg text-gray-600 leading-relaxed">
              With 24/7 support and a team of certified professionals, we deliver the peace of mind that comes from knowing 
              your facility is in expert hands, allowing you to focus on your core business objectives.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Services -->
    <section class="py-20 bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16 services-header">
          <h2 class="text-4xl md:text-5xl font-bold text-primary mb-4">Core Services</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive facility management across all critical areas
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(service, index) in coreServices" 
            :key="index"
            class="service-card bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
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

    <!-- Process Section -->
    <section class="py-20 bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-primary mb-4">Our Process</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            A systematic approach to facility excellence
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="space-y-8">
            <div 
              v-for="(step, index) in processSteps" 
              :key="index"
              class="process-step flex items-start space-x-6"
            >
              <div class="flex-shrink-0 w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {{ index + 1 }}
              </div>
              <div class="flex-grow pt-2">
                <h3 class="text-2xl font-bold text-primary mb-3">{{ step.title }}</h3>
                <p class="text-gray-600 leading-relaxed">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Section -->
    <section class="py-20 bg-gradient-to-br from-secondary to-primary">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="tech-content text-white">
            <h2 class="text-4xl font-bold mb-6">Technology-Driven Solutions</h2>
            <p class="text-xl text-gray-200 mb-8 leading-relaxed">
              We leverage cutting-edge technology to deliver superior facility management services, 
              providing real-time insights and proactive maintenance capabilities.
            </p>

            <div class="space-y-6">
              <div 
                v-for="(tech, index) in technologies" 
                :key="index"
                class="flex items-start space-x-4"
              >
                <div class="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <component :is="tech.icon" class="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 class="text-lg font-bold mb-2">{{ tech.title }}</h3>
                  <p class="text-gray-200 text-sm leading-relaxed">{{ tech.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="tech-image">
            <div class="relative">
              <div class="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <div class="aspect-square bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center p-8">
                  <svg class="w-full h-full text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                  </svg>
                </div>
              </div>
              <div class="absolute -top-6 -left-6 w-48 h-48 bg-accent/30 rounded-full blur-3xl"></div>
              <div class="absolute -bottom-6 -right-6 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Grid -->
    <section class="py-20 bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-primary mb-4">Why Choose Our Services</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            The advantages of partnering with industry leaders
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="(benefit, index) in benefits" 
            :key="index"
            class="benefit-card text-center group"
          >
            <div class="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
              <component :is="benefit.icon" class="w-10 h-10 text-accent group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 class="text-xl font-bold text-primary mb-3">{{ benefit.title }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Industries Served -->
    <section class="py-20 bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-primary mb-4">Industries We Serve</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Specialized expertise across diverse sectors
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div 
            v-for="(industry, index) in industries" 
            :key="index"
            class="industry-card bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group"
          >
            <div class="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
              <component :is="industry.icon" class="w-6 h-6 text-secondary group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 class="text-sm font-bold text-primary">{{ industry.name }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-white">
      <div class="container-custom">
        <div class="bg-primary rounded-2xl p-12 text-white relative overflow-hidden text-center">
          <div class="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent"></div>
          <div class="relative z-10 max-w-3xl mx-auto">
            <h2 class="text-4xl font-bold mb-6">Experience Superior Facility Management</h2>
            <p class="text-xl text-gray-300 mb-8">
              Let our experts handle your facility operations while you focus on growing your business
            </p>
            <div class="flex flex-wrap justify-center gap-4">
              <router-link to="/contact" class="btn-accent">
                Get Started Today
              </router-link>
              <a href="tel:+15551234567" class="btn-primary border-2 border-white bg-transparent hover:bg-white hover:text-primary">
                24/7 Support: (555) 123-4567
              </a>
            </div>
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

interface CoreService {
  title: string
  description: string
  icon: () => any
  items: string[]
}

interface ProcessStep {
  title: string
  description: string
}

interface Technology {
  title: string
  description: string
  icon: () => any
}

interface Benefit {
  title: string
  description: string
  icon: () => any
}

interface Industry {
  name: string
  icon: () => any
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

const processSteps: ProcessStep[] = [
  {
    title: 'Assessment & Planning',
    description: 'We conduct a comprehensive evaluation of your facility to understand unique requirements, identify improvement opportunities, and develop a customized management plan.'
  },
  {
    title: 'Implementation',
    description: 'Our team seamlessly integrates with your operations, deploying systems, training staff, and establishing protocols to ensure smooth service delivery from day one.'
  },
  {
    title: 'Monitoring & Optimization',
    description: 'Continuous monitoring of all systems using advanced technology, with regular performance reviews and proactive adjustments to optimize efficiency and reduce costs.'
  },
  {
    title: 'Reporting & Communication',
    description: 'Transparent reporting with detailed analytics, regular updates, and open communication channels to keep you informed about your facility\'s performance.'
  }
]

const technologies: Technology[] = [
  {
    title: 'IoT Sensors',
    description: 'Real-time monitoring of building systems for proactive maintenance and energy optimization.',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z' })
    ])
  },
  {
    title: 'CMMS Software',
    description: 'Computerized maintenance management system for efficient work order tracking and asset management.',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' })
    ])
  },
  {
    title: 'Mobile Applications',
    description: 'On-the-go access to facility data, work orders, and emergency notifications for instant response.',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' })
    ])
  },
  {
    title: 'Analytics Dashboard',
    description: 'Comprehensive data visualization for informed decision-making and performance tracking.',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' })
    ])
  }
]

const benefits: Benefit[] = [
  {
    title: 'Cost Savings',
    description: 'Reduce operational expenses through preventive maintenance and energy optimization.',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' })
    ])
  },
  {
    title: 'Increased Uptime',
    description: 'Minimize disruptions with proactive maintenance and rapid emergency response.',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M13 10V3L4 14h7v7l9-11h-7z' })
    ])
  },
  {
    title: 'Expert Team',
    description: 'Access to certified professionals with specialized expertise across all facility systems.',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' })
    ])
  },
  {
    title: 'Compliance',
    description: 'Stay compliant with all regulations through our comprehensive knowledge and monitoring.',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' })
    ])
  }
]

const industries: Industry[] = [
  {
    name: 'Corporate Offices',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' })
])
},
{
name: 'Healthcare',
icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' })
])
},
{
name: 'Education',
icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' })
])
},
{
name: 'Retail',
icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' })
])
},
{
name: 'Hospitality',
icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' })
])
},
{
name: 'Manufacturing',
icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z' })
])
},
{
name: 'Technology',
icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' })
])
},
{
name: 'Government',
icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z' })
])
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
gsap.from('.service-card', {
scrollTrigger: {
trigger: '.services-header',
start: 'top 70%',
},
y: 50,
opacity: 0,
duration: 0.8,
stagger: 0.1,
ease: 'power3.out'
})
gsap.from('.process-step', {
scrollTrigger: {
trigger: '.process-step',
start: 'top 80%',
},
x: -50,
opacity: 0,
duration: 0.8,
stagger: 0.2,
ease: 'power3.out'
})
gsap.from('.tech-content > *', {
scrollTrigger: {
trigger: '.tech-content',
start: 'top 80%',
},
x: -50,
opacity: 0,
duration: 0.8,
stagger: 0.15,
ease: 'power3.out'
})
gsap.from('.tech-image', {
scrollTrigger: {
trigger: '.tech-image',
start: 'top 80%',
},
x: 50,
opacity: 0,
duration: 0.8,
ease: 'power3.out'
})
gsap.from('.benefit-card', {
scrollTrigger: {
trigger: '.benefit-card',
start: 'top 80%',
},
y: 30,
opacity: 0,
duration: 0.8,
stagger: 0.1,
ease: 'power3.out'
})
gsap.from('.industry-card', {
scrollTrigger: {
trigger: '.industry-card',
start: 'top 80%',
},
scale: 0.9,
opacity: 0,
duration: 0.6,
stagger: 0.05,
ease: 'power3.out'
})
})
</script>