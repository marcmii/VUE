import { createRouter, createWebHistory } from 'vue-router'
import Projecte from '@/components/Projecte.vue'
import Afegir from '@/pages/afegir.vue'
import Visualitzar from '@/pages/visualitzar.vue'

const routes = [
  {
    path: '/',
    component: Projecte,
    children: [
      { path: '', redirect: '/afegir' },
      { path: 'afegir', component: Afegir, props: true },
      { path: 'visualitzar', component: Visualitzar, props: true },
    ] 
  }
]




const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
