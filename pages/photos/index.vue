<template>
  <section class="photos-container">
    <h2>Listado de fotos</h2>
    <nuxt-child />
    <div class="photos-list" v-if="loaded">
      <div class="photos-list__photo" v-for="(photo, index) in photos" :key="index" :style="styleFor(photo)">
        <h1 class="photos-list__photo-title"><nuxt-link :to="'/admin/photos/' + photo._id">{{photo.title}}</nuxt-link></h1>
        <div class="photos-list__photo-footer">
          <p><a target="_blank" :href="linkToGoogleMaps(photo)">Ver en google maps</a></p>
        </div>
      </div>
    </div>
    <nuxt-link class="fab" to="/photos/create"><font-awesome icon="plus" /></nuxt-link>
  </section>
</template>
<script>
import {recoverAllPhotos} from '~/api/photos'
import {mapMutations, mapState} from 'vuex'

function linkToGoogleMaps (photo) {
  const [lat, lng] = photo.location.split(':')
  return 'https://maps.google.com/?q=' + lat + ',' + lng
}

function styleFor (photo) {
  return {
    backgroundImage: 'url(' + photo.href + ')'
  }
}

export default {
  data () { return {title: 'Foto denuncia'} },
  created () {
    this.recoverAllPhotos()
  },
  computed: {
    ...mapState(['photos']),
    loaded () {
      return this.photos.length > 0
    }

  },
  methods: {...mapMutations(['submitPhotos']), recoverAllPhotos, linkToGoogleMaps, styleFor}
}
</script>
