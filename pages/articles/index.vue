<template>
  <section v-if="show">
    <h1>Listado de artículos</h1>
    <div v-for="(article, index) in articles" :key="index">
      <h2><nuxt-link :to="'/articles/' + article._id">{{article.title}}</nuxt-link> {{article.state}}</h2>
      <div v-html="article.body"></div>
      <div><p>Escrito en {{article.createdAt | formatDate}}</p></div>
    </div>
    <p><nuxt-link to="/articles/create">Crear un article</nuxt-link></p>    
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
    }
  },
  methods: {populateArticles}
}
</script>
