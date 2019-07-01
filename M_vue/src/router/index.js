import Vue from 'vue'
import Router from 'vue-router'
import Sing_in from '../views/Sing_in.vue'
import Home_page from '../views/Home_page.vue'
import Student from '../views/Student.vue'
import Teachers from '../views/Teachers.vue'
import ditu from '../views/ditu.vue'
import Bbs from '../views/Bbs.vue'
import News from '../views/News.vue'
import Messageboard from '../views/Messageboard'

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
        {
            path: '/Students',
            name: 'Student',
            component: Student
        },
        {
            path: '/Teachers',
            name: 'Teachers',
            component: Teachers
        },
        {
            path: '/Bbs',
            name: 'Bbs',
            component: Bbs
        },
        {
            path: '/New',
            name: 'News',
            component: News
        },
        {
            path: '/Messageboard',
            name: 'Messageboard',
            component: Messageboard
        },
    ]
})