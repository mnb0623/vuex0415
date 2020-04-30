import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 10,
    hoge: true
  },
  mutations: {
    increment (state) {
      state.count = state.count + 2
    }
  },
  actions: {
    incrementAction ({commit}) {
      commit('increment')
    }
  },
  modules: {
  }
})
