import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import AdminView from '../views/AdminView.vue'
import AboutView from '../views/AboutView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/menu',
      name: 'menuLink',
      component: MenuView
    },
    {
      path: '/admin',
      name: 'adminLink',
      component: AdminView
    },
    {
      path: '/about',
      name: 'aboutLink',
      component: AboutView
    }
  ]
})

export default router
