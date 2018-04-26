import * as members from './members'
import * as events from './events'

const namespaced = true

const state = {
  articles: [],
  ...events.state,
  ...members.state
}

const mutations = {
  ...events.mutations,
  ...members.mutations
}

const getters = {
  ...events.getters,
  ...members.getters
}

export default {namespaced, state, mutations, getters}
