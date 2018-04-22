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
import {mapState} from 'vuex'
export default {
  data () {
    return {
      show: false
    }
  },
  asyncData (context) {
    console.log(context)

    // let query = {state: 2}
    // this.getArticles(query, null, articles => {
    //   this.show = true
    // })
  },
  computed: {
    ...mapState(['articles'])
  }
}
</script>
