import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MissionView from '../views/MissionView.vue'
import AboutView from '../views/AboutView.vue'
import InitiativesMalaysia from '../views/InitiativesMalaysia.vue'
import InitiativesUnicef from '../views/InitiativesUnicef.vue'
import AboutTeam from '../views/AboutTeam.vue'
import AboutContact from '../views/AboutContact.vue'
import AboutPartners from '../views/AboutPartners.vue'
import BlogView from '../views/BlogView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/mission',
    name: 'Mission',
    component: MissionView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
      name: 'Unicef',
      path:'/unicef',
      component: InitiativesUnicef
  },
  {
      name:'Malaysia',
      path: '/malaysia',
      component: InitiativesMalaysia
    },
  {
      
      name: 'Team',
      path:'/team',
      component: AboutTeam
  },
      {
      name:'Contact',
      path: '/contact',
      component: AboutContact
    },
    {
      name:'Partners',
      path: '/partners',
      component: AboutPartners
    },
    {
      name:'Blog',
      path: '/blog',
      component: BlogView
    }
  ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
