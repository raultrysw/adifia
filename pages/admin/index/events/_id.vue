<template>
  <section v-if="loaded">
    <p>title {{event.title}}</p>
    <p>description {{event.description}}</p>
    <p>location {{event.location}}</p>
    <p>time {{event.time}}</p>
    <p>story {{event.story}}</p>

    <p><nuxt-link to="/admin/events">Volver atras</nuxt-link></p>
  </section>
</template>
<script>
import {mapMutations, mapState} from 'vuex'
import {recoverAllEvents} from '~/api/events'

export default {
  created () {
    this.recoverAllEvents()
  },
  computed: {
    ...mapState('administration', ['events']),
    loaded () { return this.events.length > 0 },
    event () {
      return this.loaded && this.events.filter(event => event._id === this.$route.params.id)[0]
    }
  },
  methods: {recoverAllEvents, ...mapMutations('administration', ['submitAllEvents'])}
}
</script>
