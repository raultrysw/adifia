import routes from './routes'

export {routes}

export function responseJson (req, res) {
  res.status(res.locals.status || 200).json(res.locals)
}

export function logError (err, req, res, next) {
  console.log(err.message)
  console.log(err)
  if (!res.locals.status) {
    // console.log('Estableciendo error 500', err)
    res.locals = {
      status: 500,
      message: 'Hubo un error interno'
    }
  }
  res.status(res.locals.status).json(res.locals)
}
