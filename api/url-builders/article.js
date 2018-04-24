import URL from './URL'

export const getLinkToArticles = () => {
  let url = new URL('/articles')
  return url.href
}

export const getLinkToPublishedArticles = () => {
  let url = new URL('/articles/')
  url.setQuery('state', 2)
  return url.href
}

export const getLinkToArticle = id => {
  let url = new URL('/articles/:id')
  url.setParam('id', id)
  return url.href
}

export const getLinkToOwnArticle = (id, token) => {
  let url = new URL('/articles/:id')
  url.setParam('id', id)
  url.setQuery('token', token)
  return url.href
}

export const getLinkToOwnArticles = token => {
  let url = new URL('/articles')
  url.setQuery('token', token)
  return url.href
}

export const getLinkToArticlesToModerate = token => {
  let url = new URL('/articles')
  url.setQuery('moderating', true)
  url.setQuery('token', token)
  return url.href
}
