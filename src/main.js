import './assets/css/main.css'

import { createMemoryHistory, createRouter } from 'vue-router'
import { createApp } from 'vue'

import App from './pages/App.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import ContactUs from './pages/ContactUs.vue'
import Test from './pages/Test.vue'
import Portfolio from './pages/Portfolio.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: ContactUs },
    { path: '/portfolio', component: Portfolio },
    { path: '/test', component: Test }
  ]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { top:0 }
    }
})

createApp(App).use(router).mount('#app')
