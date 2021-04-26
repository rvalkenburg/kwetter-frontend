import { createWebHistory, createRouter } from 'vue-router';
import LoginView from '@/views/Login.vue';
import TimelineView from '@/views/Timeline.vue'
import Profile from '@/views/Profile.vue'

const history = createWebHistory();
const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            component: LoginView,
            meta: {
                requiresAuth: false,
             },
        },
        {
            path: '/timeline',
            component: TimelineView,
            meta: {
                requiresAuth: true,
             },
        },
        {
            path: '/profile',
            component: Profile,
            meta: {
                requiresAuth: true,
             },
        },
    ]
})

export default router;