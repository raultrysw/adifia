import URL from './URL'

export const getLinkForPublishedEvents = () => {
  let url = new URL('/events')
  url.setQuery('published', true)
  return url.href
}
