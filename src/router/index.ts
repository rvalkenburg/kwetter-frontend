import { createWebHistory, createRouter } from 'vue-router';
import LoginView from '@/views/Login.vue';
import TimelineView from '@/views/Timeline.vue'
import Profile from '@/views/Profile.vue'
import firebase from "firebase";
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
        const loggedInUser = store.getters['profile/user'];
        if(to.name == 'Login' && loggedInUser != null){
            next({ path: '/timeline' });
        }
		if (requiresAuth && !user) {
			next("/");
		} else {
            next();
		}
        if(user == null && loggedInUser == null){
            firebase.auth().signOut()
            next("/");
        }
	});
});

export default router;