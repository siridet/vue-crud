import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Test',
      name: 'Test',
      component: ()=> import("@/components/Test")
    },
    {
      path: '/Member',
      name: 'Member',
      component: ()=> import("@/view/MemberRegis")
    },
    {
      path: '/member/edit',
      name: 'member-edit',
       component: ()=> import("@/view/MemberEdit")
    },
    {
      path: '/regis'
      ,name: 'register'
      , component: ()=>import("@/view/Register")
    }
    //==============================
    , {
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
