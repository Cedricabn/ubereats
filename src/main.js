import { createApp } from 'vue'
import App from './App.vue'
import { createRouter,createWebHashHistory } from 'vue-router'
import Home from './page/Home.vue'
import Restaurant from './page/Restaurant.vue'
import Commander from './page/Commander.vue'
import Apropos from './page/Apropos.vue'

const routes =[
{path: "/",component:Home},
{name:'Restaurant',path: "/Restaurant/:name",component:Restaurant},

{path: "/Commander",component:Commander},
{path: "/Apropos",component:Apropos},

]
const router =createRouter({
history: createWebHashHistory(),
routes
});

const VueApp=createApp(App)
VueApp.use(router)
VueApp.mount('#app')

