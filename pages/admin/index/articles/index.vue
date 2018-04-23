<template>
  <section v-if="show">
    <h2>Listado de Artículos</h2>
    <table>
      <thead>
        <th>title</th><th>body</th><th>author</th>
      </thead>
      <tr v-for="(article, index) in articles" :key="index">
        <td>{{article.title}}</td><td>{{article.body}}</td><td>{{article.author}}</td>
        <td>
          <nuxt-link :to="'/articles/' + article._id">View</nuxt-link> -
          <nuxt-link :to="'/articles/edit?id=' + article._id">Edit</nuxt-link>
          <nuxt-link :to="'/articles/destroy?id=' + article._id">Eliminar</nuxt-link>
          <nuxt-link :to="'/admin/articles/' + article._id + '/publish'">Publicar</nuxt-link>
        </td>
      </tr>
    </table>
    <p><nuxt-link to="/articles/create">Crear un article</nuxt-link></p>
  </section>
</template>
<script>
import {getArticlesToModerate} from '~/api/articles'
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      articles: []
    }
  },
  created () {
    this.getArticlesToModerate()
  },
  computed: {
    ...mapGetters(['token']),
    show () {
      return this.articles.length > 0
    }
  },
  methods: {getArticlesToModerate}
}
</script>
