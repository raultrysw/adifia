import * as eventsURLS from './url-builders/events'

export function recoverAllEvents () {
  const url = eventsURLS.getLinkForPublishedEvents()
  this.makeRequest({ url }, 'get', ({ events }) => {
    this.$store.commit('eventsRecovery', events)
  }, () => {})
}
