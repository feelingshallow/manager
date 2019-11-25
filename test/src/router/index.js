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
      component:()=>import('../views/main')
    },
    {
      path:'/person',
      name:'person',
      component:()=>import('../views/person/index'),
      children:[
        {path:'/person/main',
         name:'index',
         component:()=>import('../views/person/person')
      } 
      ]
    }
   
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
