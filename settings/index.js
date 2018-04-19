const developing = process.env.NODE_ENV !== 'production'

const dbs = {
  test: 'mongodb://localhost/adifiatest',
  prod: 'mongodb://localhost/adifia'
}

export const PORT = process.env.PORT || 3000
export const HOST = process.env.HOST || 'localhost'
export const DB = developing ? dbs.test : dbs.prod

export const ROLS = ['Socio', 'Vocal', 'Secretario', 'Tesorero', 'Presidente']

export const LEVELS = (function () {
  const levels = {}
  for (let rolIndex = 0; rolIndex < ROLS.length; rolIndex++) {
    const rol = ROLS[rolIndex]
    levels[rol] = rolIndex
  }
  return levels
})()

export const secret = ':q91dMHPT*;"WX^0%ih'
export const userTokenKey = 'jwt-user-token'
