const _ = require('lodash')

export const state = {
  members: []
}

export const mutations = {
  submitMembers (state, members) {
    state.members = members
  },
  addMember (state, member) {
    state.members.push(member)
  },
  switchRol (state, { id, rol }) {
    let index = _.findIndex(state.members, { _id: id })
    state.members[index].pvLvl = rol
  },
  deleteMember (state, id) {
    let index = _.findIndex(state.members, { _id: id })
    state.members.splice(index, 1)
  }
}
export const getters = { getMember: state => id => {
  return _.find(state.members, { _id: id })
}}
