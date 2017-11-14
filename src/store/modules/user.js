import * as types from '../mutation-types'

const state = {
  user: {
    // username: '大司马',
    // auth: ['company', 'personal', 'group', 'share', 'favorite', 'link', 'authorize', 'message']
  }
}

const getters = {
  user: state => state.user
}

const mutations = {
  [types.SET_USER] (state, user) {
    state.user = user
  }
}

export default {
  state,
  getters,
  mutations
}
