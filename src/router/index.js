import Vue from 'vue'
import Router from 'vue-router'

import Home from './../pages/Home/Home.vue'
import Chat from './../pages/Chat/Chat.vue'
import Mine from './../pages/Mine/Mine.vue'
import Recommend from './../pages/Recommend/Recommend.vue'
import Search from './../pages/Search/Search.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: Home},
    {path: '/chat', component: Chat},
    {path: '/mine', component: Mine},
    {path: '/recommend', component: Recommend},
    {path: '/search', component: Search}
  ]
})
