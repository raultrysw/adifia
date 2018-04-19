import Member from '../../../members/model'
function putAuthor (req, res, next) {
  const {email} = req.user
  Member.findOne({email}).exec((err, author) => {
    if (err) {
      console.log(err)
      next(err)
    }
    req.author = author
    req.body.author = author
    next()
  })
}

const get = []
const create = [putAuthor]
const update = []
const retrieve = []
const destroy = []

export {get, create, update, retrieve, destroy}
