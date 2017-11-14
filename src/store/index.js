import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import common from './modules/common'
import menus from './modules/menu'
import user from './modules/user'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // getters,
  // states,
  // mutations,
  modules: {
    common,
    menus,
    user
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
