import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user_name: "",
    user_role: ""
  },
  mutations: {
    login(state, username, userrole) {
      state.user_name = username
      state.user_role = userrole
    }
  },
  actions: {
  },
  modules: {
  }
})
