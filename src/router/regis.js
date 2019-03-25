import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

export default new Router({
  routes: [
      {
      path: '/regis/create'
      ,name: 'regis_create'
      , component: ()=>import("@/view/regis/create")
    } , {
      path: '/regis/list'
      ,name: 'regis_list'
      , component: ()=>import("@/view/regis/list")
    }, {
      path: '/regis/edit/:id'
      ,name: 'editRegis'
      , component: ()=>import("@/view/regis/edit")
    },


  ]
})
