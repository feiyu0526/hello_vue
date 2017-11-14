import * as types from '../mutation-types'

const state = {
  common: {
    isLoading: false
  }
}

const getters = {
  isLoading: state => state.common.isLoading
}

const mutations = {
  [types.SET_COMMON_LOADING] (state, isLoading) {
    state.common.isLoading = isLoading
  }
}

export default {
  state,
  getters,
  mutations
}
