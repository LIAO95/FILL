import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/home'
import ThankYou from '@/components/complete'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/complete',
      name: 'ThankYou',
      component: ThankYou
    }
    // ,
    // { 
    //   path: '*',
    //   component: '/404'
    // }
  ]
})
