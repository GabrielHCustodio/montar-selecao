import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import ListaJogadores from '@/components/ListaJogadores'

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: 'posicao/:tipo',
        name: 'posicao',
        props: true,
        components: {
          posicao: ListaJogadores
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
