<template>
  <section v-if="loaded">
    <h2>Listado de eventos</h2>
    <table>
      <thead>
        <th>title</th><th>description</th><th>location</th><th>time</th><th>date</th><th>story</th>
      </thead>
      <tr v-for="(event, index) in events" :key="index">
        <td>{{event.title}}</td><td>{{event.description}}</td><td>{{event.location}}</td><td>{{event.time}}</td><td>{{event.date}}</td><td>{{event.story}}</td>
        <td>
          <nuxt-link :to="'/admin/events/' + event._id">View</nuxt-link> -
          <nuxt-link :to="'/admin/events/edit?id=' + event._id">Edit</nuxt-link>
          <nuxt-link :to="'/admin/events/destroy?id=' + event._id">Eliminar</nuxt-link>
          <nuxt-link v-if="Number(event.state) < 1" :to="'/admin/events/' + event._id + '/publish'">publicar</nuxt-link>
        </td>
      </tr>
    </table>
    <p><nuxt-link to="/admin/events/create">Crear un event</nuxt-link></p>
    <nuxt-child />
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
    loaded () { return this.events.length > 0 }
  },
  methods: {recoverAllEvents, ...mapMutations('administration', ['submitAllEvents'])}
}
</script>
