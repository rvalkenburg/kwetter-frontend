import { createApp } from 'vue';
import router from './router/index';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import { store } from "@/store";

//Services
import ProfileService from './services/ProfileService';
import KweetService from './services/KweetService';
import LikeService from './services/LikeService';
import FollowService from './services/FollowService';
import AuthService from './services/AuthService';

//Interfaces
import IKweetService from './interfaces/IKweetService';
import IProfileService from './interfaces/IProfileService';
import ILikeService from './interfaces/ILikeService';
import IFollowService from './interfaces/IFollowService';
import IAuthService from './interfaces/IAuthService';


import App from './App.vue';
import firebase from 'firebase/app';
import { ActionTypes } from './store/modules/auth/actions';

//Axios
import interceptorsSetup from './services/HttpCommon.ts'
interceptorsSetup()

const firebaseConfig = {
  apiKey: process.env.ENVIRONMENTAL_VARIABLES_VUE_APP_APIKEY,
  authDomain: process.env.ENVIRONMENTAL_VARIABLES_VUE_APP_AUTH_DOMAIN,
  projectId: process.env.ENVIRONMENTAL_VARIABLES_VUE_APP_PROJECT_ID,
  storageBucket: process.env.ENVIRONMENTAL_VARIABLES_VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.ENVIRONMENTAL_VARIABLES_VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.ENVIRONMENTAL_VARIABLES_VUE_APP_APP_ID
}

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(async user => {
    if (user !== null && user !== undefined) {
      await store.dispatch(`auth/${ActionTypes.SET_AUTH}`, user);
    } else {
      await store.dispatch(`auth/${ActionTypes.SET_AUTH}`, null);
    }
  }
);

const profileService: IProfileService = new ProfileService();
const kweetService: IKweetService = new KweetService();
const likeService: ILikeService = new LikeService();
const followService: IFollowService = new FollowService();
const authService: IAuthService = new AuthService();

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.use(store);
app.config.globalProperties.$profileService = profileService;
app.config.globalProperties.$kweetService = kweetService;
app.config.globalProperties.$likeService = likeService;
app.config.globalProperties.$followService = followService;
app.config.globalProperties.$authService = authService;

app.mount('#app');
