import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import ReceitasView from '../views/ReceitasView.vue'
import GastosView from '../views/GastosView.vue'
import FeedbackView from '../views/FeedbackView.vue'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: InicioView
  },
  {
    path: '/receitas',
    name: 'Receitas',
    component: ReceitasView
  },
  {
    path: '/gastos',
    name: 'Gastos',
    component: GastosView
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: FeedbackView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
