import article from '../model'
import {pipe} from '../../../../../utils/pipe-objects'
import {extractArtcilesForAuthorId} from './filters'

function buildQuery ({putOwnArticles, id}) {
  let query = article.find()

  let filters = [
    [putOwnArticles, extractArtcilesForAuthorId(id)]
  ]

  return pipe(query, function () {
    this.through(filters)
    return this.retrieve()
  })
}

export function filterFor ({query, params, user, loginLvl}) {
  const email = loginLvl && user.email
  const state = {
    putOwnArticles: query.mine && email !== null,
    id: loginLvl && user._id
  }

  console.log('Este es el filtro que se va a pasar', state)

  return buildQuery(state)
}
