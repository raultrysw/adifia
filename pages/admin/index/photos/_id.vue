<template>
  <section>
    <p>likes {{photo.likes}}</p><p>title {{photo.title}}</p><p>description {{photo.description}}</p><p>location {{photo.location}}</p>

    <p><nuxt-link to="/photos">Volver atras</nuxt-link></p>
  </section>
</template>
<script>
export default {
  data () {
    return {
      photo: {}
    }
  },
  created () {
    this.makeRequest({url: this.photoUrl}, 'get',
      ({photo}) => {
        this.photo = photo
      }, (data) => {
        console.log(data)
      }
    )
  },
  computed: {
    photoUrl () {
      return '/photos/' + this.$route.params.id
    }
  }
}
</script>
