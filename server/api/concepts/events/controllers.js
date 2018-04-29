import {filterFor} from './query-builder'
import Event from './model'
import httpCodes from '../../../http-codes'

export function retrieve (req, res, next) {
  const {createGoodResponse, createBadResponse} = req
  const query = filterFor(req)
  query.exec((err, events) => {
    if (err) {
      res.locals = createBadResponse(httpCodes.INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    let eventsPublished = events.filter(event => {
      let dateEvent = new Date(event.date + ' ' + event.time)
      let consumed = Date.now() - dateEvent.getTime() > 0
      return consumed
    })
    res.locals = createGoodResponse(httpCodes.OK, 'Todos los events fueron recuperados', {events: eventsPublished})
    next()
  })
}

export function create (req, res, next) {
  const {createGoodResponse, createBadResponse} = req
  let event = new Event(req.body)
  event.save((err, eventCreated) => {
    if (err) {
      res.locals = createBadResponse(httpCodes.INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    res.locals = createGoodResponse(httpCodes.CREATED, 'El Event fue creado correctamente', {eventCreated})
    next()
  })
}

export function get (req, res, next) {
  const {createGoodResponse, createBadResponse} = req
  Event.findById(req.params.id, (err, event) => {
    if (err) {
      res.locals = createBadResponse(httpCodes.INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    res.locals = createGoodResponse(httpCodes.OK, 'El Event fue recuperado correctamente', {event})
    next()
  })
}

export function update (req, res, next) {
  const {createGoodResponse, createBadResponse} = req
  const $set = req.body
  Event.findByIdAndUpdate(req.params.id, {$set}, (err, event) => {
    if (err) {
      res.locals = createBadResponse(httpCodes.INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    res.locals = createGoodResponse(httpCodes.OK, 'El Event fue actualizado correctamente', {event})
    next()
  })
}

export function destroy (req, res, next) {
  const {createGoodResponse, createBadResponse} = req
  Event.findByIdAndRemove(req.params.id, (err, event) => {
    if (err) {
      res.locals = createBadResponse(httpCodes.INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    res.locals = createGoodResponse(httpCodes.OK, 'El Event fue eliminado correctamente', {event})
    next()
  })
}
