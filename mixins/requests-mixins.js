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
        if (typeof cb === 'function') cb(articles)
      }, () => {

      })
    }
  }
}
