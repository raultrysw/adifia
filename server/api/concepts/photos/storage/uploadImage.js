const path = require('path')
const multer = require('multer')

const basePath = path.join(__dirname, '../../../../..')
const PATH = path.join(basePath, '/static/img/photos')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, PATH)
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.jpg')
  }
})

let upload = multer({ storage })

export default upload
export const getPathFor = id => path.join(PATH, id + '.jpg')
export const getRawPathFor = pathIncomed => path.join(basePath, pathIncomed)
