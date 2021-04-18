import { createApp } from 'vue';
import router from './router/router'

import App from './App.vue';

//Bootstrap for styling
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import installElementPlus from './plugins/element'
import store from './store'

const app = createApp(App).use(store).use(router);
app.use(router);
app.mount('#app');