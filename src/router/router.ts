import { createRouter, createWebHashHistory } from 'vue-router'

import _404Vue from '@/404.vue'

import indexVue from '@/views/Index/Index.vue'

import terminalsVue from '@/views/Terminals/Terminals.vue'
import terminalsViewVue from '@/views/Terminals/View.vue'

import filesVue from '@/views/Files/Files.vue'

import usersVue from '@/views/Users/Users.vue'

import settingsVue from '@/views/Settings/Settings.vue'

export default createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/index',
      redirect: '/'
    },
    {
      name: 'index',
      path: '/',
      component: indexVue
    },

    {
      name: 'terminals',
      path: '/terminals',
      component: terminalsVue,
    },
    {
      name: 'terminalsView',
      path: '/terminals/:id',
      component: terminalsViewVue
    },

    {
      name: 'files',
      path: '/files',
      component: filesVue
    },

    {
      name: 'users',
      path: '/users',
      component: usersVue
    },

    {
      name: 'settings',
      path: '/settings',
      component: settingsVue
    },

    {
      name: '404',
      path: '/:pathMatch(.*)',
      component: _404Vue
    }
  ]
})
