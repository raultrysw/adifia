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
  
})

class EventClass {}

schema.loadClass(EventClass)

let eventsModel = mongoose.model('Event', schema)

export default eventsModel
