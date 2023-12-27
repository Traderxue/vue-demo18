import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"",
      component:()=>import("@/views/index.vue"),
      children:([
        {
          path:"",
          component:()=>import("@/views/home/home.vue")
        },
        {
          path:"/home",
          component:()=>import("@/views/home/home.vue")
        },
        {
          path:"/mining",
          component:()=>import("@/views/mining/mining.vue")
        },
        {
          path:"/scene",
          component:()=>import("@/views/scene/scene.vue")
        },
        {
          path:"/info",
          component:()=>import("@/views/info/info.vue")
        },
        {
          path:"/mine",
          component:()=>import("@/views/mine/mine.vue")
        }
      ])
    }
  ]
})

export default router
