import Vuex from 'vuex'
import {ROLS} from '~/settings'
import {encode, decode} from '../utils/user-token'
import {key} from '~/plugins/persistence'

import * as articlesStores from './articles'
import * as eventsStores from './events'

import administration from './administration/index.js'

const VOCAL_LVL = ROLS.indexOf('Vocal')
const ADMIN_LVL = ROLS.indexOf('Vocal') + 1

const createStore = () => {
  return new Vuex.Store({
    modules: {administration},
    state: {
      loggedIn: false,
      articles: [],
      events: [],
      user: {},
      [key]: {
        token: null,
        articles: {}
      },
      ...articlesStores.state,
      ...eventsStores.state
    },
    mutations: {
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
}

export default createStore
