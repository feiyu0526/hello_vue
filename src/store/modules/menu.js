import * as types from '../mutation-types'

const state = {
  menus: {

  }
}

const getters = {
  menus: state => state.menus
}

const mutations = {
  [types.SET_MENUS] (state, menus) {
    state.menus = menus
  }
}

export default {
  state,
  getters,
  mutations
}
