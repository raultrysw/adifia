import Member from '../../../members/model'
function putArticle (req, res, next) {
  const {email} = req.user

  Member.findOne({email}, (err, author) => {
    author.articles.push(req.articleCreated)
    if (err) {
      console.log(err)
      return next(err)
    }
    author.save((err, authorWithArticle) => {
      if (err) {
        console.log(err)
        return next(err)
      }
      next()
    })
  })
}

const get = []
const create = [putArticle]
const update = []
const retrieve = []
const destroy = []

export {get, create, update, retrieve, destroy}
