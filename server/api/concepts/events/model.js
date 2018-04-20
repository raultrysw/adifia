const mongoose = require('mongoose')

let schema = new mongoose.Schema({

  title: {

  },

  description: {

  },

  location: {

  },

  time: {

  },

  date: {

  },

  story: {

  },

  createdAt: {
    type: Date,
    default: Date.now
  },

  state: {
    type: Number,
    default: 0
  }

})

class EventClass {}

schema.loadClass(EventClass)

let eventsModel = mongoose.model('Event', schema)

export default eventsModel
