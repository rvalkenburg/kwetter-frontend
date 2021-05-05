import { createWebHistory, createRouter } from 'vue-router';
import LoginView from '@/views/Login.vue';
import TimelineView from '@/views/Timeline.vue'
import Profile from '@/views/Profile.vue'
import { store } from '@/store/index'

const history = createWebHistory();
const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            component: LoginView,
            name: 'Login',
            meta: {
                requiresAuth: false,
             },
        },
        {
            path: '/timeline',
            component: TimelineView,
            name: 'Timeline',
            meta: {
                requiresAuth: true,
             },
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile,
            meta: {
                requiresAuth: true,
             },
        },
    ]
})

router.beforeEach((to, from, next) => {
	const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const authenticated = store.getters['auth/auth']
    const currentProfile = store.getters['profile/user']

        if(!requiresAuth){
            if (authenticated != null && currentProfile != null) {
                next("/timeline");
            } else {
                next();

            }
        }
        if(requiresAuth){
            if (authenticated == null || currentProfile == null) {
                next("/");
            } else {
                next();
            }
        }

});

export default router;