import httpCodes from '../../../../../http-codes'
import Credentials from '../../../../../../prototypes/credentials'

import {encode} from '../../../../../../utils/user-token'

const bcrypt = require('bcrypt')

function comparePasswords (req, res, next) {
  const {createBadResponse, createGoodResponse} = req
  const password = req.body.password
  const {hash, user} = req.locals
  bcrypt.compare(password, hash, function (err, result) {
    console.log('\nINFOOOO', result, '\ncomparaciónd econtraseñas')
    console.log(password)
    console.log(hash, '\n\n')
    if (err) {
      console.log(err)
      next(err)
    }
    if (!result) {
      res.locals = createBadResponse(httpCodes.NOT_FOUND, 'No se encontró el usuario', {errors: ['La contraseña no es correcta']})
      return next(res.locals)
    }
    let credentials = new Credentials(user)
    let token = encode(credentials)
    res.locals = createGoodResponse(httpCodes.OK, 'Te has logueado correctamente', {user: credentials, token})
    return next()
  })
}

const get = []
const create = []
const update = []
const retrieve = []
const destroy = []
const logIn = [comparePasswords]

export {get, create, update, retrieve, destroy, logIn}
