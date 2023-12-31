import { createApp } from 'vue'
import { createRouter, createWebHistory, Router } from 'vue-router'

import './scss/styles.scss'
import 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"

import App from './App.vue'
import Login from "./pages/Login.vue"
import Registration from "./pages/Registration.vue"

import Home from "./pages/HomeMenu.vue"
import HomeAdmin from "./pages/HomeAdmin.vue"

import Prodotto from './pages/Prodotto.vue'
import Carrello from "./pages/Cart.vue"
import NotFound from "./pages/NotFound.vue"

const router: Router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", component: Login},
        {path: "/Regitration", component: Registration},
        {path: "/Home", component: Home},
        {path: "/Admin", component: HomeAdmin},
        {path: "/Prodotto/:id", component: Prodotto},
        {path: "/Carrello", component: Carrello},
        {path: "/:pathMatch(.*)*", component: NotFound }
    ]
})

createApp(App).use(router).mount('#app')
