<template>
  <section>
    <div v-for="(article, index) in articles" :key="index">
      <h3>{{article.title}} ({{article.state}})</h3>
      <p>Escrito el {{article.createdAt | formatDate}}
        <span>
          <nuxt-link v-if="article.state === 0" :to="'/profile/articles/' + article._id + '/publish'">Enviar para moderar</nuxt-link>
          <nuxt-link v-if="article.state === 0" :to="'/articles/' + article._id + '/edit'">Editar</nuxt-link>
          <span v-else-if="article.state === 1">Moderando</span>
          <span v-else>Publicado</span>
        </span>
      </p>
    </div>
    <nuxt-child />
  </section>
</template>
<script>
import {getMineArticles} from '~/api/articles.js'
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      title: 'Área privada',
      articles: []
    }
  },
  mounted () {
    this.getMineArticles()
  },
  computed: {
    ...mapGetters(['token'])
  },
  methods: {getMineArticles}
}
</script>

