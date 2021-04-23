import { createApp } from 'vue';
import router from './router/index';
import VueGapi from 'vue-gapi';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import { store } from "@/store";
//Services
import AuthService from './services/AuthService';

//Interfaces
import IAuthService from './interfaces/IAuthService';


import App from './App.vue';


const authService: IAuthService = new AuthService();


const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.use(store);
app.config.globalProperties.$authService = authService;

app.use(VueGapi, {
    apiKey: process.env.VUE_APP_APIKEY,
    clientId: process.env.VUE_APP_CLIENTID,
    discoveryDocs: ['https://people.googleapis.com/$discovery/rest?version=v1'],
    scope: 'openid profile email',
  }),
app.mount('#app');
console.log(app.config)
