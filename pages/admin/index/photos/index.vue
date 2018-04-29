<template>
  <section class="photos-container">
    <h2>Listado de fotos</h2>
    <div class="photos-list" v-if="loaded">
      <div class="photos-list__photo" v-for="(photo, index) in photos" :key="index">
        <h1>{{photo.title}}</h1>
        <img class="photo-list__photo-image" :src="photo.href" />
        <p>{{photo.likes}} ver en google maps</p>
        <div class="action-bar">
          <nuxt-link :to="'/admin/photos/' + photo._id">View</nuxt-link>
          <nuxt-link :to="'/admin/photos/edit?id=' + photo._id">Edit</nuxt-link>
          <nuxt-link :to="'/admin/photos/destroy?id=' + photo._id">Eliminar</nuxt-link>
        </div>
      </div>
    </div>
    <nuxt-link class="fab" to="/admin/photos/create">Crear un photo</nuxt-link>
  </section>
</template>
<script>
import {recoverAllPhotos} from '~/api/photos'
import {mapMutations, mapState} from 'vuex'
export default {
  created () {
    this.recoverAllPhotos()
  },
  computed: {
    ...mapState(['photos']),
    loaded () {
      return this.photos.length > 0
    }
  },
  methods: {...mapMutations(['submitPhotos']), recoverAllPhotos}
}
</script>
