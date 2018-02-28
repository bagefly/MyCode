import Vue from 'vue'
import Router from 'vue-router'
import Stark from '@/components/Stark'
import Article from '@/components/Article'
import User from '@/components/User'
import Daily from '@/components/Daily'
const Study = { template: `<div>this study page</div>` }
const Work = { template: `<div>this work page</div>` }
const About = { template: `<div> 我是About组件 <router-view> </router-view> </div>` }
const Blog = { template: `<div>this Blog page</div>` }
const Info = { template: `<div>this Info page</div>` }

Vue.config.productionTip = false
Vue.use(Router)

export default new Router({
  linkActiveClass: 'shudong',
  mode: 'history',
  // mode:'hash',
  routes: [
    {
      path: '/user/:id?',
      component: User

    }, {
      path: '/',
      name: 'hello',
      component: Stark
    }, {
      path: '/daily',
      name: 'daily',
      component: Daily
    }, {
      path: '/study',
      name: 'study',
      component: Study
    }, {
      path: '/article/:page?',
      name: 'article',
      component: Article
    }, {
      path: '/work',
      name: 'work',
      component: Work
    }, {
      path: 'about',
      component: About,
      children: [{
        path: 'blog',
        name: 'blog',
        component: Blog
      }, {
        path: '/info',
        name: 'info',
        component: Info
      }]
    }]
})
