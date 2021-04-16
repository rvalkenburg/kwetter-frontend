import { createApp } from 'vue';
import router from './router/router'

import App from './App.vue';

//Bootstrap for styling
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";


createApp(App).use(router).mount('#app')
