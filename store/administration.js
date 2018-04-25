const namespaced = true
const _ = require('lodash')
const state = {
  articles: [],
  events: [],
  members: []
}

const mutations = {
  submitMembers (state, members) {
    state.members = members
  },
  addMember (state, member) {
    state.members.push(member)
  },
  switchRol (state, {id, rol}) {
    console.log('Cambiando rol a', rol)

    let index = _.findIndex(state.members, {_id: id})
    state.members[index].pvLvl = rol
  },
  deleteMember (state, id) {
    let index = _.findIndex(state.members, { _id: id })
    state.members.splice(index, 1)
  }
}

const getters = {
  getMember: state => id => {
    return _.find(state.members, {_id: id})
  }
}

export default {namespaced, state, mutations, getters}
