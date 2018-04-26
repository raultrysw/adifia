import URL from './URL'

export const getLinkForPublishedEvents = () => {
  let url = new URL('/events')
  url.setQuery('published', true)
  return url.href
}

export const getLinkForEvents = () => {
  let url = new URL('/events')
  return url.href
}

export const getLinkForEvent = id => {
  let url = new URL('/events/:id')
  url.setParam('id', id)
  return url.href
}
