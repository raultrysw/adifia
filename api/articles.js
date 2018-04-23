import {key as cacheKey} from '~/plugins/persistence'

export function saveArticleInCache () {
  this.$store.commit('articleToCache', this.article)
}

export function postArticle () {
  let options = this.configAuthed
  let url = '/articles'
  let data = {article: this.article}

  this.makeRequest({options, url, data}, 'post', ({articleCreated}) => {
    this.$store.commit('dropThisArticle')
    this.$router.push('/profile')
  }, error => {
    console.log('Hubo un error', error)
  })
}

export function saveContent () {
  this.$store.commit('articleToCache', this.article)
}

export function putArticle () {
  let config = this.configAuthed
  this.makeRequest({url: this.articleUri, data: this.article, config}, 'put',
    ({article}) => {
      this.$store.commit('dropThisArticle', article._id)
      this.$router.push('/profile')
    }, (error) => {
      console.log(error)
    }
  )
}

export function moderateArticle () {
  let url = this.uriToArticle
  let data = { state: 1 }
  let token = this.token
  this.makeRequest({ url, data, token }, 'put', ({ article }) => {
    this.published = true
  }, errorResponse => {
    console.log(errorResponse)
  })
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

export function getMineArticles () {
  const url = '/articles?mine=true&' + this.authQueried
  this.makeRequest({url}, 'get', ({articles}) => {
    this.articles = articles
  }, errorResponse => {
    console.log('Ha ocurrido un error')
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
