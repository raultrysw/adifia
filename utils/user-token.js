import {LEVELS, secret, userTokenKey} from '../settings'
const jwtSimple = require('jwt-simple')

export const decode = (token) => jwtSimple.decode(token, secret)
export const encode = (objectUser) => jwtSimple.encode(objectUser, secret)

export function recoverUser (req, res, next) {
  const userToken = req.headers[userTokenKey] || req.query.token
  if (userToken) {
    try {
      req.user = decode(userToken)
      req.loginLvl = {
        isAdmin: req.user.pvLvl >= LEVELS.isAdmin,
        isVocal: req.user.pvLvl >= LEVELS.isVocal,
        isPartner: req.user.pvLvl >= LEVELS.isPartner
      }
    } catch (error) {
      console.log('El usuario no se pudo descifrar')
    } finally {
      next()
    }
  } else next()
}
