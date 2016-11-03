import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import posts from './modules/posts'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth,
    posts
  }
})

export default store
