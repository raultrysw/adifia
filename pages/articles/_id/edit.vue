<template>
  <section @keydown="saveContent" v-if="loaded">
    <h2>Editando {{$route.query.id}} <span v-if="loadedFromCache">(cargado desde cache)</span></h2>
    <my-form  :onSubmit="submitArticle" :errors="errors" text="Crear artículo"
        urlCb="/articles" textCb="volver atras">
      <my-input type="text" text="Escribe un título"   placeholder="Título del artículo" v-model="article.title" />
      <editor @onKeyDown="saveContent" v-model="article.body"/>
    </my-form>
  </section>
</template>
<script>
import Editor from '@tinymce/tinymce-vue'

export default {
  components: {Editor},
  data () {
    return {
      loaded: false,
      loadedFromCache: false,
      article: {
        title: '',
        body: ''
      }
    }
  },
  mounted () {
    this.article = this.cachedArticle
    debugger //eslint-disable-line
    if (!this.article) {
      this.makeRequest({url: this.articleUri}, 'get',
        ({article}) => {
          this.article = article
          this.loaded = true
        }, (error) => {
          console.log(error)
        }
      )
    } else {
      this.loadedFromCache = true
      this.loaded = true
    }
  },
  computed: {
    articleUri () {
      return '/articles/' + this.$route.params.id
    },
    cachedArticle () {
      let articlesString = localStorage.getItem('articles') || '{}'
      let articles = JSON.parse(articlesString)
      return articles[this.$route.params.id]
    }
  },
  methods: {
    submitArticle () {
      this.makeRequest({url: this.articleUri, data: this.article}, 'put',
        ({article}) => {
          this.$router.push('/articles/' + article._id)
        }, (error) => {
          console.log(error)
        }
      )
    },
    saveContent () {
      let articlesString = localStorage.getItem('articles') || '{}'
      let articles = JSON.parse(articlesString)
      articles[this.$route.params.id] = this.article
      localStorage.setItem('articles', JSON.stringify(articles))
    },
    dropContent () {
      let articlesString = localStorage.getItem('articles') || '{}'
      let articles = JSON.parse(articlesString)
      articles[this.$route.params.id] = {}
      localStorage.setItem('articles', JSON.stringify(articles))
    }
  }
}
</script>
