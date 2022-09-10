import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: 'players/:tipo',
        name: 'players',
        props: true
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
