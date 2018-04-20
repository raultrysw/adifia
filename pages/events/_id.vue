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
import rswLocation from '~/components/rsw-location.vue'
export default {
  components: {rswLocation},
  data () {
    return {
      event: {},
      loaded: false
    }
  },
  created () {
    this.makeRequest({url: this.eventUrl}, 'get',
      ({event}) => {
        this.event = event
        this.loaded = true
      }, (data) => {
        console.log('hubo un error', data)
      }
    )
  },
  computed: {
    locationParsed () {
      const [lat, lng, text] = this.event.location.split(':')
      return {lng, lat, text}
    },
    eventUrl () {
      return '/events/' + this.$route.params.id
    }
  }
}
</script>
