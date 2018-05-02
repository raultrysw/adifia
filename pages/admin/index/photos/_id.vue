<template>
  <section class="photo" v-if="loaded">
    <h3 class="photo__title">{{photo.title}}</h3>
    <div>
      <img class="photo__image" :src="photo.href" />
    </div>
    <p class="photo__description">{{photo.description}}</p>
    <p><a :href="linkToGoogleMaps">Ver en google maps</a></p>
    <p><nuxt-link to="/admin/photos">Volver atras</nuxt-link></p>
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
    photoUrl () {
      return '/photos/' + this.$route.params.id
    },
    loaded () {
      return this.photo !== undefined
    },
    photo () {
      return this.photos.filter(photo => photo._id === this.$route.params.id)[0]
    },
    linkToGoogleMaps () {
      const [lat, lng] = this.photo.location.split(':')
      return 'https://maps.google.com/?q=' + lat + ',' + lng
    }
  },
  methods: {...mapMutations(['submitPhotos']), recoverAllPhotos}
}
</script>
