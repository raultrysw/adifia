<template>
  <section>
    <p><span v-if="published">¡Artículos enviado!</span><span v-else>Enviando...</span></p>
  </section>
</template>

<script>
import {moderateArticle} from '~/api/articles.js'
export default {
  data () {
    return {
      published: false
    }
  },
  created () {
    this.moderateArticle()
  },
  computed: {
    uriToArticle () {
      return '/articles/' + this.$route.params.id
    }
  },
  methods: {moderateArticle}
}
</script>
