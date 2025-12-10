import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/services/event-spaces',
    name: 'EventSpaces',
    component: () => import('../views/services/EventSpaces.vue')
  },
  {
    path: '/services/buildings',
    name: 'Buildings',
    component: () => import('../views/services/Buildings.vue')
  },
  {
    path: '/services/facility-management',
    name: 'FacilityManagement',
    component: () => import('../views/services/FacilityManagement.vue')
  },
  {
    path: '/company-profile',
    name: 'CompanyProfile',
    component: () => import('../views/CompanyProfile.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80
      }
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

export default router