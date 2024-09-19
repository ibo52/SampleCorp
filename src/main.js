import './assets/main.css'

import { createMemoryHistory, createRouter } from 'vue-router'
import { createApp } from 'vue'

import App from './pages/App.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import ContactUs from './pages/ContactUs.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: ContactUs },
    { path: '/reserved', component: Home }
  ]

  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })

createApp(App).use(router).mount('#app')
