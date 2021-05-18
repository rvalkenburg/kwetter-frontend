import { createWebHistory, createRouter } from 'vue-router';
import LoginView from '@/views/Login.vue';
import TimelineView from '@/views/Timeline.vue'
import Profile from '@/views/Profile.vue'
import Search from '@/views/FindProfiles.vue'
import { store } from '@/store/index'
import { ActionTypes } from '@/store/modules/kweet/actions';

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
            path: '/search',
            component: Search,
            name: 'Search',
            meta: {
                requiresAuth: true,
             },
        },
        {
            path: '/profile/:id',
            name: 'Profile',
            component: Profile,
            props: true, 
            meta: {
                requiresAuth: true,
             },
        },
    ]
})

router.beforeEach((to, from, next) => {
	const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const authenticated = store.getters['auth/auth']
    const currentProfile = store.getters['auth/profile']
    store.dispatch(`kweet/${ActionTypes.RESET_KWEET}`)
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