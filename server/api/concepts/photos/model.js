const mongoose = require('mongoose')

let schema = new mongoose.Schema({
  
    likes: {

    },
  
    title: {

    },
  
    description: {

    },
  
    location: {

    },
  
})

class PhotoClass {}

schema.loadClass(PhotoClass)

let photosModel = mongoose.model('Photo', schema)

export default photosModel
