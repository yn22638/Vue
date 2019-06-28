import Vue from 'vue'
import Router from 'vue-router'
import Sing_in from '../views/Sing_in.vue'
import Home_page from '../views/Home_page.vue'
import ditu from '../views/ditu.vue'
import Student from '../views/Student.vue'
import Sutdentpreschool from '../views/Sutdentpreschool.vue'
import StuMore from '../views/StuMore.vue'

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
            path:'/Student',
            name:'Student',
            component:Student
        },
        {
            path:'/Sutdentpreschool',
            name:'Sutdentpreschool',
            component:Sutdentpreschool
        },
        {
            path:'/StuMore',
            name:'StuMore',
            component:StuMore
        },
    ]
})