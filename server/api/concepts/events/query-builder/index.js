import event from '../model'
import {pipe} from '../../../../../utils/pipe-objects'
import {filterForPublished, sortByDateDesc} from './filters'

function buildQuery ({filterPublished, sortByDate}) {
  let query = event.find()

  let filters = [
    [filterPublished, filterForPublished()],
    [sortByDate, sortByDateDesc()]
  ]

  return pipe(query, function () {
    this.through(filters)
    return this.retrieve()
  })
}

export function filterFor ({query, params, user, loginLvl}) {
  console.log(query)
  const state = {
    filterPublished: query.published === 'true',
    sortByDate: true
  }

  return buildQuery(state)
}
