let queryString = require('querystring')
export default {
  methods: {
    getMembers (cb) {
      const url = '/members'
      this.makeRequest({url}, 'get', ({members}) => {
        if (typeof cb === 'function') cb(members)
      }, () => {

      })
    },
    getArticles (query, token, cb) {
      const url = '/articles?' + queryString.stringify(query)
      console.log(url)
      this.makeRequest({url, data: {}, token}, 'get', ({articles}) => {
        this.$store.commit('articlesSubmit', articles)
        if (typeof cb === 'function') cb(articles)
      }, () => {

      })
    },
    getArticle (id, token, cb) {
      const url = '/articles/' + id + '/'
      this.makeRequest({url, data: {}, token}, 'get', (response) => {
        let article = response && response.article
        console.log('cb', cb)
        if (article && typeof cb === 'function') {
          console.log('Invocando el callback')
          cb(article)
        }
      }, () => {
        console.log('error al recuperar el articulo', id, cb)
      })
    }
  }
}
