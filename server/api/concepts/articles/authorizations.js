export const retrieveAuth = (req, res, next) => next(undefined)
export const getAuth = (req, res, next) => next(undefined)
export const createAuth = (req, res, next) => next(req.user === null)
export const destroyAuth = (req, res, next) => next(undefined)
export const updateAuth = (req, res, next) => next(undefined)
