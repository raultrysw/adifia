<template>
  <section>
    <p><span v-if="published">¡Artículos publicado!</span><span v-else>Publicando...</span></p>
  </section>
</template>

<script>
import {publishArticle} from '~/api/articles'
export default {
  data () {
    return {
      published: false
    }
  },
  created () {
    this.publishArticle()
  },
  methods: {publishArticle}
}
</script>
