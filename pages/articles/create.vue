<template>
  <section @keydown="saveArticleInCache">
    <h2>Creando un articulo</h2>
    <my-form  :onSubmit="postArticle" :errors="errors" text="Crear artículo"
        urlCb="/articles" textCb="volver atras">
      <my-input type="text" text="Escribe un título"   placeholder="Título del artículo" v-model="article.title" />
      <editor @onKeyDown="saveArticleInCache" v-model="article.body"/>
    </my-form>
  </section>
</template>
<script>
import {key} from '~/plugins/persistence'
import {postArticle, saveArticleInCache} from '~/api/articles.js'
import {mapGetters} from 'vuex'
import Editor from '@tinymce/tinymce-vue'

export default {
  components: {Editor},
  data () {
    return {
      errors: [],
      article: {
        title: '',
        body: ''
      }
    }
  },
  created () {
    this.article = this.$store.state[key].articles.new || {title: '', body: ''}
  },
  computed: {
    ...mapGetters(['isVocal', 'token'])
  },
  methods: {postArticle, saveArticleInCache}
}
</script>
