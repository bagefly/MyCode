import Vue from 'vue'
import Router from 'vue-router'
import Stark from '@/components/Stark'
import Article from '@/components/Article'

const Study = { template: `<div>this study page</div>` }
const Work = { template: `<div>this work page</div>` }

Vue.config.productionTip = false
Vue.use(Router)

export default new Router({
  linkActiveClass: 'shudong',
  mode: 'history',
  // mode:'hash',
  routes: [{
    path: '/',
    name: 'hello',
    component: Stark
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
  }]
})
