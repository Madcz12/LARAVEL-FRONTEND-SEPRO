import { createRouter, createWebHistory } from 'vue-router'
import ClienteView from '../views/ClienteView.vue'
import WelcomeView from '../views/WelcomeView.vue'
import LoginView from '../views/LoginView.vue'


const routes = [
    {
        path: '/',
        name: 'login',
        component: LoginView
    },
    {
        path: '/welcome',
        name: 'welcome',
        component: WelcomeView
    },
    {
        path: '/cliente',
        name: 'cliente',
        component: ClienteView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router