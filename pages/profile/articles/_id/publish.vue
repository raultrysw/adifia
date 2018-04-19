<template>
  <section>
    <p><span v-if="published">¡Artículos publicado!</span><span v-else>Publicando...</span></p>
  </section>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      published: false
    }
  },
  created () {
    let url = this.uriToArticle
    let data = {state: 1}
    let token = this.token
    this.makeRequest({url, data, token}, 'put',
      ({article}) => {
        console.log('se ha publicado correctamente el artículo')
        this.published = true
      }, (errorResponse) => {
        console.log(errorResponse)
      }
    )
  },
  computed: {
    ...mapGetters(['token']),
    uriToArticle () {
      return '/articles/' + this.$route.params.id
    }
  }
}
</script>
