import {key as cacheKey} from '~/plugins/persistence'
import * as articleURLS from './url-builders/article'

//
// ─── RECUPERACION DE ARTICULOS CON GET ──────────────────────────────────────────
//

export function populateArticles () {
  let url = articleURLS.getLinkToPublishedArticles()
  this.makeRequest({ url }, 'get', ({ articles }) => {
    this.$store.commit('articlesRecovery', articles)
  })
}

export function getMineArticle (id, successCb) {
  let article = this.$store.state[cacheKey].articles[id]
  if (article) return successCb(true, article)

  let url = articleURLS.getLinkToOwnArticle(id, this.token)

  this.makeRequest(
    { url },
    'get',
    ({ article }) => {
      successCb(false, article)
    },
    errResponse => {
      console.log('hubo un error', errResponse)
    }
  )
}

export function getMineArticles () {
  const url = articleURLS.getLinkToOwnArticles(this.token)
  this.makeRequest(
    { url },
    'get',
    ({ articles }) => {
      this.articles = articles
    },
    errorResponse => {
      console.log('Ha ocurrido un error')
    }
  )
}

export function getArticlesToModerate () {
  let url = articleURLS.getLinkToArticlesToModerate(this.token)
  console.log(url)
  this.makeRequest(
    { url },
    'get',
    ({ articles }) => {
      this.articles = articles
    },
    errorResponse => {
      console.log(errorResponse)
    }
  )
}

//
// ─── PETICIONES PARA HACER MODIFICACIONES EN ARTíCULOS ──────────────────────────
//

// Crear un artículos nuevo
export function postArticle () {
  let options = this.configAuthed
  let url = articleURLS.getLinkToArticles()
  let data = this.article

  this.makeRequest({
    options,
    url,
    data
  },
  'post',
  ({
    articleCreated
  }) => {
    this.$store.commit('dropThisArticle')
    this.$router.push('/profile')
  },
  error => {
    console.log('Hubo un error', error)
  }
  )
}

// Modificar un artículo
export function putArticle () {
  let config = this.configAuthed
  this.makeRequest({
    url: articleURLS.getLinkToArticle(this.$route.params.id),
    data: this.article,
    config
  },
  'put',
  ({
    article
  }) => {
    this.$store.commit('dropThisArticle', article._id)
    this.$router.push('/profile')
  },
  error => {
    console.log(error)
  }
  )
}

// Publicar un artículo
export function publishArticle () {
  const {id} = this.$route.params

  let url = articleURLS.getLinkToArticle(id)
  let data = { state: 2 }
  let token = this.token

  this.makeRequest({ url, data, token }, 'put', ({ article }) => {
    console.log('se ha publicado correctamente el artículo')
    this.published = true
  }, errorResponse => {
    console.log(errorResponse)
  })
}

// Enviar para moderar un artículo
export function moderateArticle () {
  let url = articleURLS.getLinkToArticle(this.$route.params.id)
  let data = {
    state: 1
  }
  let token = this.token
  this.makeRequest({
    url,
    data,
    token
  }, 'put', ({
    article
  }) => {
    this.published = true
  }, errorResponse => {
    console.log(errorResponse)
  })
}

// Eliminar un artículos
export function deleteAnArticle () {
  const {id} = this.$route.query
  const url = articleURLS.getLinkToArticle(id)
  this.makeRequest({ url }, 'delete', () => {
    this.$router.push('/articles')
  }, data => {
    console.log(data)
  })
}

//
// ─── OTROS MÉTODOS ──────────────────────────────────────────────────────────────
//

// Guardar artículo en cache
export function saveArticleInCache () {
  this.$store.commit('articleToCache', this.article)
}
