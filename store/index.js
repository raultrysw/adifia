import Vuex from 'vuex'
import {ROLS} from '~/settings'
import {encode, decode} from '../utils/user-token'
import {key} from '~/plugins/persistence'

import * as articlesStores from './articles'
import * as eventsStores from './events'

import administration from './administration/index.js'

const VOCAL_LVL = ROLS.indexOf('Vocal')
const ADMIN_LVL = ROLS.indexOf('Vocal') + 1

let widths = {
  s: 320,
  m: 640,
  l: 1024,
  xl: 1440
}

const createStore = () => {
  let store = new Vuex.Store({
    modules: {administration},
    state: {
      currentTitle: '',
      loggedIn: false,
      articles: [],
      events: [],
      user: {},
      widths,
      [key]: {
        token: null,
        articles: {}
      },
      ...articlesStores.state,
      ...eventsStores.state
    },
    mutations: {
      setTitle (state, title) { state.currentTitle = title },
      logIn (state, user) {
        const token = encode(user)
        state.user = user
        state.loggedIn = true
        state.user = user
        state[key].token = token
      },
      logOut (state) {
        state.user = {}
        state.loggedIn = false
        state.user = {}
        state[key].token = null
      },
      updateBounds (state) {
        const innerWidth = window.innerWidth
        state.widthW = innerWidth
      },
      ...articlesStores.mutations,
      ...eventsStores.mutations
    },
    getters: {
      isVocal (state) {
        return state.loggedIn && state.user.pvLvl >= VOCAL_LVL
      },
      isAdmin (state) {
        return state.loggedIn && state.user.pvLvl >= ADMIN_LVL
      },
      token (state) {
        return state[key].token
      },
      ...articlesStores.getters
    },
    actions: {
      sessionRestoring ({commit, getters}) {
        const token = getters.token
        if (!token) return
        console.log('restaurando token')
        const user = decode(token)
        commit('logIn', user)
      }
    }
  })

  if (process.browser) {
    window.onload = () => store.commit('updateBounds')
    window.onresize = () => {
      store.commit('updateBounds')
    }
  }
  return store
}

export default createStore
