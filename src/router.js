import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './HomeView.vue'
import AboutView from './AboutView.vue'
import VideosView from './VideosView.vue'  

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/videos', component: VideosView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router