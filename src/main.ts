import { createApp } from 'vue';
import router from './router/index';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import { store } from "@/store";

//Services
import ProfileService from './services/ProfileService';
import KweetService from './services/KweetService';
import LikeService from './services/LikeService';

//Interfaces
import IKweetService from './interfaces/IKweetService';
import IProfileService from './interfaces/IProfileService';
import ILikeService from './interfaces/ILikeService';

import App from './App.vue';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.VUE_APP_APIKEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID
}

firebase.initializeApp(firebaseConfig);

const profileService: IProfileService = new ProfileService();
const kweetService: IKweetService = new KweetService();
const likeService: ILikeService = new LikeService();

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.use(store);
app.config.globalProperties.$profileService = profileService;
app.config.globalProperties.$kweetService = kweetService;
app.config.globalProperties.$likeService = likeService;

app.mount('#app');
