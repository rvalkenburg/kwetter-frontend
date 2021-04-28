import { createWebHistory, createRouter } from 'vue-router';
import LoginView from '@/views/Login.vue';
import TimelineView from '@/views/Timeline.vue'
import Profile from '@/views/Profile.vue'
import firebase from "firebase";

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

router.beforeEach((to, from, next) => {
	const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
	firebase.auth().onAuthStateChanged(function(user: any) {
		if (requiresAuth && !user) {
			next("/");
		} else {
			next();
		}
	});
});

export default router;