<template>
  <section>
    <h1>Area privada</h1>
    <div v-for="(article, index) in articles" :key="index">
      <h2>{{article.title}} ({{article.state}})</h2>
      <p>Escrito el {{article.createdAt | formatDate}}
        <span>
          <nuxt-link v-if="article.state === 0" :to="'/profile/articles/' + article._id + '/publish'">Enviar para moderar</nuxt-link>
          <span v-else-if="article.state === 1">Moderando</span>
          <span v-else>Publicado</span>
        </span>
      </p>
    </div>
    <nuxt-child />
  </section>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      articles: []
    }
  },
  mounted () {
    let query = {
      mine: true
    }
    this.getArticles(query, this.token, (articles) => {
      this.articles = articles
      console.log('se recuperaron los articulos', articles)
    })
  },
  computed: {
    ...mapGetters(['token'])
  }
}
</script>

