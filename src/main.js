import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import LyTab from 'ly-tab'

Vue.use(LyTab)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
