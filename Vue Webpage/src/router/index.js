import Vue from 'vue'
import Router from 'vue-router'
import Sing_in from '../views/Sing_in.vue'
import Home_page from '../views/Home_page.vue'
import ditu from '../views/ditu.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'Sing_in',
            component: Sing_in
        },
        {
            path: '/Home',
            name: 'Home_page',
            component: Home_page
        },
        {
            path: '/ditu',
            name: 'ditu',
            component: ditu
        },
    ]
})