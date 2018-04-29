import {filterFor} from './query-builder'
import Photo from './model'
import httpCodes from '../../../http-codes'

export function retrieve (req, res, next) {
  const {createGoodResponse, createBadResponse} = req
  const query = filterFor(req)
  query.exec((err, photos) => {
    if (err) {
      res.locals = createBadResponse(httpCodes.INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    res.locals = createGoodResponse(httpCodes.OK, 'Todos los photos fueron recuperados', {photos})
    next()
  })
}

export function create (req, res, next) {
  console.log(req.file, req.body)
  const {createGoodResponse, createBadResponse} = req
  let photo = new Photo(req.body)
  photo.save((err, photoCreated) => {
    if (err) {
      res.locals = createBadResponse(httpCodes.INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    req.locals = {
      photoId: photoCreated._id
    }
    res.locals = createGoodResponse(httpCodes.CREATED, 'El Photo fue creado correctamente', {photoCreated})
    next()
  })
}

export function get (req, res, next) {
  const {createGoodResponse, createBadResponse} = req
  Photo.findById(req.params.id, (err, photo) => {
    if (err) {
      res.locals = createBadResponse(httpCodes.INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    res.locals = createGoodResponse(httpCodes.OK, 'El Photo fue recuperado correctamente', {photo})
    next()
  })
}

export function update (req, res, next) {
  const {createGoodResponse, createBadResponse} = req
  const $set = req.body
  Photo.findByIdAndUpdate(req.params.id, {$set}, (err, photo) => {
    if (err) {
      res.locals = createBadResponse(httpCodes.INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    res.locals = createGoodResponse(httpCodes.OK, 'El Photo fue actualizado correctamente', {photo})
    next()
  })
}

export function destroy (req, res, next) {
  const {createGoodResponse, createBadResponse} = req
  Photo.findByIdAndRemove(req.params.id, (err, photo) => {
    if (err) {
      res.locals = createBadResponse(httpCodes.INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    res.locals = createGoodResponse(httpCodes.OK, 'El Photo fue eliminado correctamente', {photo})
    next()
  })
}
