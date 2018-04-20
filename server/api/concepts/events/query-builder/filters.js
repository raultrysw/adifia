export function filterForPublished () {
  return query => query.where('state').equals(1)
}
export function sortByDateDesc () {
  return query => query.sort('-createdAt')
}
