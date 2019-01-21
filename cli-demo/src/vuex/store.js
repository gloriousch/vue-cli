import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 初始值
    bgColor: 'lightblue'

  },
  mutations: {
    // 改值值
    change(state, bgColor) {
      state.bgColor = bgColor;
    }
  },
  actions: {

  }
})
