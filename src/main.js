import Vue from 'vue'
import App from './App.vue'

// import Vuex from 'vuex'
// Vue.use(Vuex)

import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
  console.log(store.state.count)
  store.dispatch('incrementAction')
  console.log(store.state.count)
