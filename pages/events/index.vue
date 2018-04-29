<template>
  <section v-if="loaded">
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
import {recoverEvents} from '~/api/events'
export default {
  data () { return {title: 'Lista de eventos'} },
  created () {
    this.recoverEvents()
  },
  computed: {
    ...mapState(['events']),
    loaded () {
      return this.events && this.events.length > 0
    }
  },
  methods: {recoverEvents}
}
</script>
