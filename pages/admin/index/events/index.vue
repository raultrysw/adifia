<template>
  <section v-if="loaded">
    <h2>Listado de miembros</h2>
    <table>
      <thead>
        <th>title</th><th>description</th><th>location</th><th>time</th><th>date</th><th>story</th>
      </thead>
      <tr v-for="(event, index) in events" :key="index">
        <td>{{event.title}}</td><td>{{event.description}}</td><td>{{event.location}}</td><td>{{event.time}}</td><td>{{event.date}}</td><td>{{event.story}}</td>
        <td>
          <nuxt-link :to="'/events/' + event._id">View</nuxt-link> -
          <nuxt-link :to="'/events/edit?id=' + event._id">Edit</nuxt-link>
          <nuxt-link :to="'/events/destroy?id=' + event._id">Eliminar</nuxt-link>
        </td>
      </tr>
    </table>
    <p><nuxt-link to="/events/create">Crear un event</nuxt-link></p>
  </section>
</template>
<script>
export default {
  data () {
    return {
      events: [],
      loaded: false
    }
  },
  created () {
    const url = '/events'
    this.makeRequest({url}, 'get', ({events}) => {
      this.events = events
      this.loaded = true
    }, () => {

    })
  }
}
</script>
