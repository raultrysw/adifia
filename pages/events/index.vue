<template>
  <section v-if="loaded">
    <h2>Listado de eventos</h2>
    <div>
      <div v-for="(event, index) in events" :key="index">
        <h1>{{event.title}} ({{event.date}} - {{event.time}})</h1>
        <div>{{event.description}}</div>
        <p><nuxt-link :to="'/events/' + event._id">Ver mas</nuxt-link></p>
      </div>
    </div>
    <nuxt-child />
  </section>
</template>
<script>
import {mapState} from 'vuex'
import {recoverAllEvents} from '~/api/events'
export default {
  created () {
    this.recoverAllEvents()
  },
  computed: {
    ...mapState(['events']),
    loaded () {
      return this.events.length > 0
    }
  },
  methods: {recoverAllEvents}
}
</script>
