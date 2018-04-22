import {key as cacheKey} from '~/plugins/persistence'

const _ = require('lodash')
export const state = {
  articles: []
}

export const mutations = {
  articlesSubmit (state, articles) {
    state.articles = articles
  },
  articleToCache (state, article) {
    console.log('salvando el artículo')
    const key = article._id || 'new'
    state[cacheKey].articles[key] = article
  },
  dropThisArticle (state, articleId) {
    delete state[cacheKey].articles[articleId || 'new']
  }
}
export const getters = {
  getArticle: state => idArticle => {
    const article = _.find(state.articles, {_id: idArticle})
    console.log('Buscando entre estos articulos...', state.articles, article)
    return article
  }
}
