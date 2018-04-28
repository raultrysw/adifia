<template>
  <section v-if="loaded">
    <h1>{{event.title}} ({{event.date}} - {{event.time}})</h1>
    <p>{{event.description}}</p>
    <p>{{locationParsed.text}}</p>
    <rsw-location :lat="locationParsed.lat" height="20vh" :lng="locationParsed.lng" />
    <p>story {{event.story}}</p>    
  </section>
</template>
<script>
import {mapState} from 'vuex'
import {recoverEvents} from '~/api/events.js'
import rswLocation from '~/components/rsw-location.vue'
export default {
  components: {rswLocation},
  created () {
    if (this.events.length === 0) this.recoverEvents()
  },
  computed: {
    ...mapState(['events']),
    event () {
      return this.loaded &&
        this.events.find(event => event._id === this.$route.params.id)
    },
    title () {
      return this.event.title
    },
    loaded () {
      return this.events.length > 0
    },
    locationParsed () {
      debugger //eslint-disable-line      
      const [lat, lng, text] = this.event.location.split(':')
      return {lng, lat, text}
    },
    eventUrl () {
      return '/events/' + this.$route.params.id
    }
  },
  methods: {recoverEvents}
}
</script>
