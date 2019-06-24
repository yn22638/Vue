import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SchoolInformation from '@/components/SchoolInformation'
import Schoollocation from '@/components/Schoollocation'

import Teachermanagement from '@/components/Teachermanagement'

import App from '@/App'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SchoolInformation',
      component: SchoolInformation 
    },
    {
      path: '/SchoolInformation',
      name: 'SchoolInformation',
      component: SchoolInformation 
    },
    {
      path: '/Schoollocation',
      name: 'Schoollocation',
      component: Schoollocation 
    },
    {
      path: '/Teachermanagement',
      name: 'Teachermanagement',
      component: Teachermanagement 
    },
  ]
})
