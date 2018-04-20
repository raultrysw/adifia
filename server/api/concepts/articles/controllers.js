import {filterFor} from './query-builder'
import Article from './model'
import httpCodes from '../../../http-codes'

export function retrieve (req, res, next) {
  const {createGoodResponse, createBadResponse} = req
  const query = filterFor(req)
  console.log(query.exec)
  query.sort('-createdAt').exec((err, articles) => {
    if (err) {
      res.locals = createBadResponse(httpCodes.INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    res.locals = createGoodResponse(httpCodes.OK, 'Todos los articles fueron recuperados', {articles})
    next()
  })
}

export function create (req, res, next) {
  const {createGoodResponse, createBadResponse} = req
  let article = new Article(req.body)
  article.save((err, articleCreated) => {
    if (err) {
      res.locals = createBadResponse(httpCodes.INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    req.articleCreated = articleCreated
    res.locals = createGoodResponse(httpCodes.CREATED, 'El Article fue creado correctamente', {articleCreated})
    next()
  })
}

export function get (req, res, next) {
  const {createGoodResponse, createBadResponse} = req
  Article.findById(req.params.id).populate('author', ['name', 'surname']).exec((err, article) => {
    if (err) {
      res.locals = createBadResponse(httpCodes.INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    res.locals = createGoodResponse(httpCodes.OK, 'El Article fue recuperado correctamente', {article})
    next()
  })
}

export function update (req, res, next) {
  const {createGoodResponse, createBadResponse} = req
  const $set = req.body
  Article.findByIdAndUpdate(req.params.id, {$set}, (err, article) => {
    if (err) {
      res.locals = createBadResponse(httpCodes.INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    res.locals = createGoodResponse(httpCodes.OK, 'El Article fue actualizado correctamente', {article})
    next()
  })
}

export function destroy (req, res, next) {
  const {createGoodResponse, createBadResponse} = req
  Article.findByIdAndRemove(req.params.id, (err, article) => {
    if (err) {
      res.locals = createBadResponse(httpCodes.INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    res.locals = createGoodResponse(httpCodes.OK, 'El Article fue eliminado correctamente', {article})
    next()
  })
}
