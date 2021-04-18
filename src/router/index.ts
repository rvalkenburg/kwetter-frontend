import { createWebHistory, createRouter } from 'vue-router'
import LoginView from '../views/Login.vue'
import Home from '../views/Home.vue'

const history = createWebHistory();
const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/login',
            component: LoginView
        },
    ]
})

export default router;