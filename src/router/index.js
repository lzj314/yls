import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/index.vue'
import Course from '@/views/course/index.vue'
import Case from '@/views/case/index.vue'
import Mine from '@/views/mine/personal.vue'
import Play from '@/views/mine/playCourse.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/course',
      component: Course
    },
    {
      path: '/case',
      component: Case
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path:'/play',
      component:Play
    }
  ]
})
