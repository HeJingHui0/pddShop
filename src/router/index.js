import Vue from 'vue'
import Router from 'vue-router'

import Home from './../pages/Home/Home.vue'
import Chat from './../pages/Chat/Chat.vue'
import Mine from './../pages/Mine/Mine.vue'
import Recommend from './../pages/Recommend/Recommend.vue'
import Search from './../pages/Search/Search.vue'
import Login from '../components/Login/Login.vue'

import Hot from './../pages/Home/Children/Hot.vue'
import Box from './../pages/Home/Children/Box.vue'
import Dress from './../pages/Home/Children/Dress.vue'
import Ele from './../pages/Home/Children/Ele.vue'
import Food from './../pages/Home/Children/Food.vue'
import General from './../pages/Home/Children/General.vue'
import Man from './../pages/Home/Children/Man.vue'
import Mbaby from './../pages/Home/Children/Mbaby.vue'
import Shirt from './../pages/Home/Children/Shirt.vue'

import Minesetting from '../pages/Mine/Minesetting.vue'
import Minedetail from '../pages/Mine/Minedetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: Home,
      children: [
        {path: '/home', redirect: '/home/hot'},
        {path: 'hot', component: Hot, meta: {showTabbar: true}},
        {path: 'box', component: Box},
        {path: 'dress', component: Dress},
        {path: 'ele', component: Ele},
        {path: 'food', component: Food},
        {path: 'general', component: General},
        {path: 'man', component: Man},
        {path: 'mbaby', component: Mbaby},
        {path: 'shirt', component: Shirt}
      ]
    },
    {path: '/chat', component: Chat, meta: {showTabbar: true}},
    {path: '/mine', component: Mine, meta: {showTabbar: true}},
    {path: '/recommend', component: Recommend, meta: {showTabbar: true}},
    {path: '/search', component: Search, meta: {showTabbar: true}},
    {path: '/login', component: Login},
    {path: '/minesetting', component: Minesetting},
    {path: '/detail', component: Minedetail}
  ]
})
