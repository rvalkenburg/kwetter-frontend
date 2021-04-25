import { createWebHistory, createRouter } from 'vue-router';
import LoginView from '@/views/Login.vue';
import TimelineView from '@/views/Timeline.vue'

const history = createWebHistory();
const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            component: LoginView
        },
        {
            path: '/timeline',
            component: TimelineView
        },
    ]
})

export default router;