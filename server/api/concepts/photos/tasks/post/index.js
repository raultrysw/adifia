import {getPathFor} from '../../storage/uploadImage'
const {copyFile, unlink} = require('fs')
function tweakPhoto (req, res, next) {
  copyFile(req.file.path, getPathFor(req.locals.photoId), err => {
    if (err) {
      console.log(err)
      throw err
    }
    next()
  })
}

function removeRawPhoto (req, res, next) {
  unlink(req.file.path, err => {
    if (err) {
      console.log(err)
      throw err
    }
    next()
  })
}

const get = []
const create = [tweakPhoto, removeRawPhoto]
const update = []
const retrieve = []
const destroy = []

export {get, create, update, retrieve, destroy}
