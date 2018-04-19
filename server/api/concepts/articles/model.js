const mongoose = require('mongoose')

let schema = new mongoose.Schema({
  title: {

  },
  body: {

  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  state: {
    type: Number,
    default: 0
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member'
  }
})

class ArticleClass {}

schema.loadClass(ArticleClass)

let articlesModel = mongoose.model('Article', schema)

export default articlesModel
