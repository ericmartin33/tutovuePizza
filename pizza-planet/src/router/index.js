import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import AdminView from '../views/AdminView.vue'
import AboutView from '../views/AboutView.vue'
import HistoryContent from '../components/HistoryContent.vue'
import LocationContent from '../components/LocationContent.vue'
import DeliveryContent from '../components/DeliveryContent.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: HomeView,
        delivery: DeliveryContent,
        history: HistoryContent,
      }
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
      component: AboutView,
      children: [{
        path: 'history',
        name: 'historyLink',
        component: HistoryContent,
      }, {
        path: 'locations',
        name: 'locationLink',
        component: LocationContent,
      }, {
        path: 'delivery',
        name: 'deliveryLink',
        component: DeliveryContent,
      },]
    }
  ]
})

export default router
