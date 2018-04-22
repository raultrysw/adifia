const _ = require('lodash')
export const state = {
  articles: []
}

export const mutations = {
  articlesSubmit (state, articles) {
    state.articles = articles
  }

}
export const getters = {
  getArticle: state => idArticle => {
    const article = _.find(state.articles, {_id: idArticle})
    console.log('Buscando entre estos articulos...', state.articles, article)
    return article
  }
}
