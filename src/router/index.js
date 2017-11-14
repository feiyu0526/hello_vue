import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Company from '@/components/business/company/company'
import Personal from '@/components/business/personal/personal'
import Group from '@/components/business/group/group'
import Share from '@/components/business/share/share'
import Favorite from '@/components/business/favorite/favorite'
import Link from '@/components/business/link/link'
import Authorize from '@/components/business/authorize/authorize'
import Message from '@/components/business/message/message'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/company',
      name: 'company',
      component: Company
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal
    },
    {
      path: '/group',
      name: 'group',
      component: Group
    },
    {
      path: '/share',
      name: 'share',
      component: Share
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: Favorite
    },
    {
      path: '/link',
      name: 'link',
      component: Link
    },
    {
      path: '/authorize',
      name: 'authorize',
      component: Authorize
    },
    {
      path: '/message',
      name: 'message',
      component: Message
    }
  ]
})
