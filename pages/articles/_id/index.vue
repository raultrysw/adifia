<template>
  <section v-if="loaded">
    <h1>{{article.title}}</h1>
    <div v-html="article.body"></div>
    <p>Escrito por {{article.author.name}} {{article.author.surname}}</p>
    <p><nuxt-link to="/articles">Volver atras</nuxt-link></p>
  </section>
</template>
<script>
export default {
  data () {
    return {
      loaded: false,
      article: {}
    }
  },
  created () {
    let article = this.$store.getters.getArticle(this.$route.params.id)
    this.article = article
    this.loaded = true
  },
  computed: {
    articleUrl () {
      return '/articles/' + this.$route.params.id
    }
  }
}
</script>
