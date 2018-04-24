import Members from './model'
import httpCodes from '../../../http-codes'

import {encode} from '../../../../utils/user-token'

export function logIn (req, res, next) {
  const {createBadResponse} = req
  Members.findOne({email: req.body.email}, (err, user) => {
    if (err) {
      res.locals = createBadResponse(httpCodes.INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    if (user === null) {
      res.locals = createBadResponse(httpCodes.NOT_FOUND, 'No se encontró el usuario', {errors: ['El email no existe']})
      return next(res.locals)
    }
    console.log(user)
    req.locals = {hash: user.password, user}
    return next()
  })
}
