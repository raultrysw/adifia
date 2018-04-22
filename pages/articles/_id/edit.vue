<template>
  <section v-if="loaded">
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
import {mapGetters} from 'vuex'
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
  created () {
    setTimeout(() => {
      this.getArticle(this.$route.params.id, this.token, ({article}) => {
        console.log('articulo recuperado', article)
      })
    }, 200)
  },
  computed: {
    ...mapGetters(['token']),
    articleUri () {
      return '/articles/' + this.$route.params.id
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
    }
  }
}
</script>
