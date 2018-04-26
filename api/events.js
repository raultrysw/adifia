import * as eventsURLS from './url-builders/events'

export function recoverEvents () {
  const url = eventsURLS.getLinkForPublishedEvents()
  this.makeRequest({ url }, 'get', ({ events }) => {
    this.$store.commit('eventsRecovery', events)
  }, () => {})
}

export function recoverAllEvents () {
  const url = eventsURLS.getLinkForEvents()
  this.makeRequest({url}, 'get', ({events}) => {
    this.submitAllEvents(events)
  }, (errorResponse) => { console.log(errorResponse) })
}

export function postEvent () {
  let url = eventsURLS.getLinkForEvents()
  this.makeRequest(
    { url, data: this.event },
    'post',
    ({ eventCreated }) => {
      this.submitAnEvent(eventCreated)
      this.$router.push('/admin/events/' + eventCreated._id)
    },
    error => {
      console.log(error)
    }
  )
}

export function putEvent () {
  let url = eventsURLS.getLinkForEvent(this.$route.query.id)
  this.makeRequest(
    { url, data: this.event },
    'put',
    ({ event }) => {
      this.$router.push('/admin/events/' + event._id)
    },
    error => {
      console.log(error)
    }
  )
}
export function deleteEvent () {
  let url = eventsURLS.getLinkForEvent(this.$route.query.id)
  this.makeRequest({ url }, 'delete', () => {
    this.removeEvent(this.$route.query.id)
    this.$router.push('/admin/events')
  }, data => {
    console.log(data)
  })
}

export function makeEventPublished () {
  const { token } = this
  const data = { state: 1 }
  const url = eventsURLS.getLinkForEvent(this.$route.params.id)
  this.makeRequest({ url, data, token }, 'put', () => {
    this.publishEvent(this.$route.params.id)
    this.published = true
  }, () => console.log('hubo un errror'))
}
