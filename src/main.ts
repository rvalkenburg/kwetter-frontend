import { createApp } from 'vue';
import router from './router/index';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import { store } from "@/store";

//Services
import AuthService from './services/AuthService';
import ProfileService from './services/ProfileService';


//Interfaces
import IAuthService from './interfaces/IAuthService';
import IProfileService from './interfaces/IProfileService';


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

const authService: IAuthService = new AuthService();
const profileService: IProfileService = new ProfileService();

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.use(store);
app.config.globalProperties.$authService = authService;
app.config.globalProperties.$profileService = profileService;

app.mount('#app');
