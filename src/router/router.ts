import { createWebHistory, createRouter } from 'vue-router'
import LoginView from '../views/Login.vue'

const history = createWebHistory();
const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            component: LoginView
        },
    ]
})

export default router;