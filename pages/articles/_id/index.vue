<template>
  <section v-if="show">
    <h1>{{article.title}}</h1>
    <div v-html="article.body"></div>
    <p>Escrito por {{article.author.name}} {{article.author.surname}}</p>
    <p><nuxt-link to="/articles">Volver atras</nuxt-link></p>
  </section>
</template>
<script>
import {populateArticles} from '~/api/articles.js'
import {mapState} from 'vuex'
export default {
  created () {
    if (!this.articles.length) this.populateArticles()
  },
  computed: {
    ...mapState(['articles']),
    show () {
      return this.articles.length > 0
    },
    article () {
      const {id} = this.$route.params
      return this.show && this.articles.find(article => article._id === id)
    }
  },
  methods: {populateArticles}
}
</script>
