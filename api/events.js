export function recoverAllEvents () {
  const url = '/events?published=true'
  this.makeRequest({ url }, 'get', ({ events }) => {
    this.$store.commit('eventsRecovery', events)
  }, () => {})
}
