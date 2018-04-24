<template>
  <section @keydown="saveArticleInCache" v-if="loaded">
    <h2>Editando {{$route.query.id}} <span v-if="loadedFromCache">(cargado desde cache)</span></h2>
    <my-form  :onSubmit="putArticle" :errors="errors" text="Actualizar artículo"
        urlCb="/articles" textCb="volver atras">
      <my-input type="text" text="Escribe un título"   placeholder="Título del artículo" v-model="article.title" />
      <editor @onKeyDown="saveArticleInCache" v-model="article.body"/>
    </my-form>
  </section>
</template>
<script>
import {saveArticleInCache, putArticle, getMineArticle} from '~/api/articles.js'
import Editor from '@tinymce/tinymce-vue'
import {mapGetters} from 'vuex'
export default {
  components: {Editor},
  data () {
    return {
      errors: [],
      loaded: false,
      loadedFromCache: false,
      article: {
        title: '',
        body: ''
      }
    }
  },
  created () {
    setTimeout(() => {
      this.getMineArticle(this.$route.params.id, (loadedFromCache, article) => {
        this.loaded = true
        this.article = article
        this.loadedFromCache = loadedFromCache
      })
    }, 200)
  },
  computed: {
    ...mapGetters(['token'])
  },
  methods: {putArticle, saveArticleInCache, getMineArticle}
}
</script>
