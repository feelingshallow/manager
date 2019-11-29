import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login'



Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/login'
  },
     {
       path:'/login',
       name:'login',
     component:login
    },
    {
      path:'/main',
      name:'main',
      component:()=>import('../views/main'),
      children:[
         {
           path:'/main/password',
           name:'password',
           component:()=>import('../views/uerManage/password')
         },
         {
           path:'/main/message',
           name:'message',
           component:()=>import('../views/uerManage/message')
         },
         {
           path:'/main/student',
           name:'student',
           component:()=>import('../views/student/student')
         }
      ]
    },
    
   
   
]

const router = new VueRouter({
  routes
})
 router.beforeEach((to,from,next)=>{
 if (to.path=='/login') {
     return  next()
 }
  var token=sessionStorage.getItem('Token')
  if (token) {
      return next();
  }else{
     return next('/login')
  }
  
 })
export default router
