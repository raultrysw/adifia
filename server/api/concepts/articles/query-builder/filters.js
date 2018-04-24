export function extractArtcilesForAuthorId (id) {
  return query => query.where('author').equals(id)
}
export function filterArticlesToModerate () {
  return query => query.where('state').equals('1')
}
export function filterPublishedArticles () {
  return query => query.where('state').equals('2')
}
