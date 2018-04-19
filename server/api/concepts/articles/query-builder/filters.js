export function extractArtcilesForAuthorId (id) {
  return query => query.where('author').equals(id)
}
