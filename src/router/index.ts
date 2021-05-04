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
	firebase.auth().onAuthStateChanged(function(user: any) {
        console.log(user);
        console.log(to)
        if(!user){
            if (to.name === "Login") {
                next();
            } else {
                next('/');

            }
        }
        if(user){
            console.log('test')
            if (to.name == "Login") {
                console.log("should be directed")
                next("/timeline");
                return;
            } else {
                next();
            }
        }
	});
});

export default router;