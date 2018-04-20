import article from '../model'
import {pipe} from '../../../../../utils/pipe-objects'
import {extractArtcilesForAuthorId, filterPublishedArticles, filterArticlesToModerate} from './filters'

function buildQuery ({putOwnArticles, id, putPublishedArticles, putArticlesToModerate}) {
  let query = article.find()

  let filters = [
    [putOwnArticles, extractArtcilesForAuthorId(id)],
    [putPublishedArticles, filterPublishedArticles()],
    [putArticlesToModerate, filterArticlesToModerate()]
  ]

  return pipe(query, function () {
    this.through(filters)
    return this.retrieve()
  })
}

export function filterFor ({query, params, user, loginLvl}) {
  const email = loginLvl && user.email
  console.log('esta es la query', query)
  const state = {
    putOwnArticles: query.mine && email !== null,
    id: loginLvl && user._id,
    putPublishedArticles: query.state === '2',
    putArticlesToModerate: query.moderating === 'true'
  }

  console.log('Este es el filtraao que se va a pasar', state)

  return buildQuery(state)
}
