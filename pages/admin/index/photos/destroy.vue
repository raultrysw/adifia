<template>
  <section>
    <my-input v-model="userConfirmation" :text="warn" type="text" />
    <button @click="removePhoto">Borrar foto</button>
  </section>
</template>

<script>
import {removePhoto} from '~/api/photos'
import {mapState} from 'vuex'

export default {
  data () { return {userConfirmation: ''} },
  created () {
    if (!this.photos.length) return this.$router.push('/admin/photos')
    // this.removePhoto()
  },
  computed: {
    ...mapState(['photos']),
    warn () {
      return 'Si realmente quiere eliminar la foto ponga \'' + this.confirmation + '\''
    },
    confirmation () {
      return this.photo.title
    },
    photo () {
      return this.photos.filter(photo => photo._id === this.$route.query.id)[0]
    },
    photoUrl () {
      return '/photos/' + this.$route.query.id
    }
  },
  methods: {removePhoto}
}
</script>
