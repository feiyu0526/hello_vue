import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import enLocale from './language/en-us.json'
import zhLocale from './language/zh-cn.json'
import 'element-ui/lib/theme-chalk/index.css'

import { mapMutations } from 'vuex'

Vue.use(VueI18n)
Vue.use(ElementUI)

const messages = {
  en: enLocale,
  zh: zhLocale
}

const i18n = new VueI18n({
  locale: 'zh',
  messages
})

Vue.config.productionTip = false

Vue.directive('auth', function (el, binding) {
  if (binding && !store.getters.user.auth.includes(binding.arg)) {
    el.parentNode.removeChild(el)
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  mounted () {
    document.getElementById('menu').style.height = window.screen.height + 'px'
  },
  i18n,
  store,
  data: {
    user: {
      username: '大司马',
      auth: ['company', 'personal', 'group', 'share', 'favorite', 'link', 'authorize', 'message', 'upload', 'add', 'more']
    }
  },
  created () {
    this._initUser()
  },
  methods: {
    _initUser () {
      this.setUser(this.user)
    },
    ...mapMutations({
      setUser: 'SET_USER'
    })
  }
})
