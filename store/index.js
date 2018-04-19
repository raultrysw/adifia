import Vuex from 'vuex'
import {ROLS} from '~/settings'
import {encode, decode} from '../utils/user-token'

const VOCAL_LVL = ROLS.indexOf('Vocal')
const ADMIN_LVL = ROLS.indexOf('Vocal') + 1

const createStore = () => {
  return new Vuex.Store({
    state: {
      loggedIn: false,
      user: {}
    },
    mutations: {
      logIn (state, user) {
        const token = encode(user)
        state.user = user
        state.loggedIn = true
        localStorage.setItem('token', token)
      },
      logOut (state) {
        state.user = {}
        state.loggedIn = false
        localStorage.removeItem('token')
      }
    },
    getters: {
      isVocal (state) {
        return state.loggedIn && state.user.pvLvl >= VOCAL_LVL
      },
      isAdmin (state) {
        return state.loggedIn && state.user.pvLvl >= ADMIN_LVL
      },
      token () {
        return localStorage.getItem('token')
      }
    },
    actions: {
      sessionRestoring ({commit, getters}) {
        const token = getters.token
        if (!token) return
        const user = decode(token)
        commit('logIn', user)
      }
    }
  })
}

export default createStore
