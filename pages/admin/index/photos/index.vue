<template>
  <section v-if="loaded">
    <h2>Listado de miembros</h2>
    <table>
      <thead>
        <th>likes</th><th>title</th><th>description</th><th>location</th>
      </thead>
      <tr v-for="(photo, index) in photos" :key="index">
        <td>{{photo.likes}}</td><td>{{photo.title}}</td><td>{{photo.description}}</td><td>{{photo.location}}</td>
        <td>
          <nuxt-link :to="'/photos/' + photo._id">View</nuxt-link> -
          <nuxt-link :to="'/photos/edit?id=' + photo._id">Edit</nuxt-link>
          <nuxt-link :to="'/photos/destroy?id=' + photo._id">Eliminar</nuxt-link>
        </td>
      </tr>
    </table>
    <p><nuxt-link to="/photos/create">Crear un photo</nuxt-link></p>
  </section>
</template>
<script>
export default {
  data () {
    return {
      photos: [],
      loaded: false
    }
  },
  created () {
    const url = '/photos'
    this.makeRequest({url}, 'get', ({photos}) => {
      this.photos = photos
      this.loaded = true
    }, () => {

    })
  }
}
</script>
