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
    ...mapGetters(['isVocal', 'token'])
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
    }
  }
}
</script>
