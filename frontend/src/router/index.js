import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  
    {
      path: '/register',
      name: 'register',
     
      component: () => import('../views/Register/registerUser.vue')
    },
    {
      path: '/login',
      name: 'login',
     
      component: () => import('../views/LoginUser/loginUser.vue')
    },
    {
      path: '/homeAll',
      name: 'homeAll',
     
      component: () => import('../views/Home/homeAll.vue'),
      meta:{requireAuth:true}
    },
    {
      path: '/registerCont',
      name: 'registerCont',
     
      component: () => import('../views/Register/registerCont.vue'),
      meta:{requireAuth:true}
    },
    {
      path: '/allSearch',
      name: 'allSearch',
     
      component: () => import('../views/Home/searchHome.vue'),
      meta:{requireAuth:true}
    },
    {
      path: '/',
      name: 'homeNoUser',
     
      component: () => import('../views/Home/homeNoUser.vue'),
      meta:{requireAuthUser:true}
    }
    


  ]
})
// token
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuthUser)){
    if (localStorage.getItem('jwt')!=null){
      next({
        path: '/homeAll',
      });
    }else {
      next();
    }
  }else {
    next();
  }

  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/login',
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

//Nprogress
router.beforeResolve((to,from,next)=>{
  if(to.name){
    NProgress.start()
  }
  next()
})
router.afterEach((to,from)=>{
  NProgress.done()
})

export default router
