import {key as cacheKey} from '~/plugins/persistence'

export function saveArticleInCache () {
  this.$store.commit('articleToCache', this.article)
}

export function putArticle () {
  let config = this.configAuthed
  this.makeRequest({url: this.articleUri, data: this.article, config}, 'put',
    ({article}) => {
      this.$store.commit('dropThisArticle', article._id)
      this.$router.push('/articles/' + article._id)
    }, (error) => {
      console.log(error)
    }
  )
}

export function populateArticles () {
  this.makeRequest({url: '/articles?state=2'}, 'get', ({articles}) => {
    this.$store.commit('articlesRecovery', articles)
  })
}

export function getMineArticle (id, successCb) {
  let url = `/articles/${id}?` + this.authQueried
  let article = this.$store.state[cacheKey].articles[id]

  if (article) return successCb(true, article)

  this.makeRequest({url}, 'get', ({article}) => {
    console.log('El articulo fue recuperado', article)
    successCb(false, article)
  }, (errResponse) => {
    console.log('hubo un error', errResponse)
  })
}

export function getArticle (id) {
  let url = `/articles/${id}`
  this.makeRequest({url}, 'get', ({article}) => {
    console.log('El articulo fue recuperado', article)
  }, (errResponse) => {
    console.log('hubo un error', errResponse)
  })
}
