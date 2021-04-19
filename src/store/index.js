import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user_name: "",
    user_role: ""
  },
  mutations: {
    login(state, data) {
      state.user_name = data.username
      state.user_role = data.userrole
    }
  },
  actions: {
  },
  modules: {
  }
})
