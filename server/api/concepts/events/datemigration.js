let mongoose = require('mongoose')
let events = require('./model')

mongoose.connect('mongodb://localhost/adifiatest')

events.find({}, (err, eventsRecovered) => {
  if (err) return console.log(err)
  eventsRecovered.forEach(event => {
    let datetime = new Date(event.date + ' ' + event.time)
    let $set = {datetime}

    console.log(events)

    events.findByIdAndUpdate(event._id, $set, () => {
      console.log('Evento actualizado')
    })
  })
})
