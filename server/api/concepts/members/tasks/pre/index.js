import Member from '../../model'
import {ROLS} from '../../../../../../settings/index'
import httpCodes from '../../../../../http-codes'
const bcrypt = require('bcrypt')
const saltRounds = 10

function checkIfIsTheFirst (req, res, next) {
  Member.find({}).exec((err, users) => {
    if (err) {
      console.log(err)
      return next(err)
    }
    if (users.length === 0) {
      req.body.pvLvl = ROLS.length
    }
    next()
  })
}

function signPassword (req, res, next) {
  const {password} = req.body

  if (!req.body.password) return next()

  bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) {
      console.log(err)
      return next(err)
    }
    bcrypt.hash(password, salt, function (err, hash) {
      if (err) {
        console.log(err)
        return next(err)
      }
      req.body.password = hash
      next()
    })
  })
}

function checkIfAnEmailExists (req, res, next) {
  const {createBadResponse} = req
  Member.findOne({email: req.body.email}).exec((err, user) => {
    if (err) {
      res.locals = createBadResponse(httpCodes.INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    if (user !== null) {
      res.locals = createBadResponse(httpCodes.INTERNAL_ERROR, 'Hubieron errores en el documento', {
        errors: ['El email que has puesto ya existe']
      })
      return next(new Error(res.locals))
    }
    next()
  })
}

function checkIfAnAdminAlreadyExists (req, res, next) {
  const {createBadResponse} = req
  const {pvLvl} = req.body

  if (pvLvl === undefined || pvLvl < 2) return next()
  console.log('Mirando a ver si existe un usuario con el rol', pvLvl)
  Member.findOne({pvLvl}).exec((err, user) => {
    if (err) {
      res.locals = createBadResponse(httpCodes.INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    if (user !== null) {
      res.locals = createBadResponse(httpCodes.INTERNAL_ERROR, 'No pueden haber dos usuarios con ese rol', {
        errors: ['Ya hay un usuario con ese rol']
      })
      return next(new Error(res.locals))
    }
    console.log('No existe')
    next()
  })
}

const get = []
const create = [checkIfIsTheFirst, checkIfAnEmailExists, checkIfAnAdminAlreadyExists, signPassword]
const update = [checkIfAnAdminAlreadyExists]
const retrieve = []
const destroy = []
const logIn = []

export {get, create, update, retrieve, destroy, logIn}
