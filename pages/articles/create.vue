<template>
  <section @keydown="saveContent">
    <h2>Creando un articulo</h2>
    <my-form  :onSubmit="submitArticle" :errors="errors" text="Crear artículo"
        urlCb="/articles" textCb="volver atras">
      <my-input type="text" text="Escribe un título"   placeholder="Título del artículo" v-model="article.title" />
      <editor @onKeyDown="saveContent" v-model="article.body"/>
    </my-form>
  </section>
</template>
<script>
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
  mounted () {
    setTimeout(() => {
      if (!this.isVocal) this.$router.push('/')
      else {
        this.article = this.cachedArticle || {title: '', body: ''}
      }
    }, 100)
  },
  computed: {
    ...mapGetters(['isVocal', 'token']),
    cachedArticle () {
      let articlesString = localStorage.getItem('articles') || '{}'
      let articles = JSON.parse(articlesString)
      return articles.newArticle
    }
  },
  methods: {
    submitArticle () {
      let url = '/articles'
      const {token} = this
      this.makeRequest({url, data: this.article, token}, 'post',
        ({articleCreated}) => {
          debugger //eslint-disable-line
          console.log('Se ha creado', articleCreated)
          this.dropContent()
          this.$router.push('/articles/' + articleCreated._id)
        }, (error) => {
          debugger //eslint-disable-line

          console.log(error)
        }
      )
    },
    saveContent () {
      let articlesString = localStorage.getItem('articles') || '{}'
      let articles = JSON.parse(articlesString)
      articles.newArticle = this.article
      localStorage.setItem('articles', JSON.stringify(articles))
    },
    dropContent () {
      let articlesString = localStorage.getItem('articles') || '{}'
      let articles = JSON.parse(articlesString)
      articles.newArticle = {}
      localStorage.setItem('articles', JSON.stringify(articles))
    }
  }
}
</script>
