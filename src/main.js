import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './styles/styles.scss'
//npm install -D sass-loader@10 sass <-- Instalar SASS
createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
