const _ = require('lodash')

export const state = {
  events: []
}

export const mutations = {
  submitAllEvents (state, events) { state.events = events },
  submitAnEvent (state, event) { state.events.push(event) },
  removeEvent (state, eventId) {
    let index = _.findIndex(state.events, {_id: eventId})
    state.events.splice(index, 1)
  },
  publishEvent (state, eventId) {
    let index = _.findIndex(state.events, {_id: eventId})
    debugger //eslint-disable-line
    state.events[index].state = 1
  }
}

export const getters = {

}
