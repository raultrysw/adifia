const mongoose = require('mongoose')

let schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El nombre es obligatorio']
  },
  surname: {
    type: String,
    required: [true, 'Los apellidos son obligatios']
  },
  articles: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Article'
  }],
  email: {
    type: String,
    required: [true, 'El correo electrónico es obligatorio'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'La contraseña es obligatoria']
  },
  pvLvl: {
    type: Number,
    default: 0
  },
  registeredAt: {
    type: Date,
    default: Date.now
  }
})

class MemberClass {}

schema.loadClass(MemberClass)

let membersModel = mongoose.model('Member', schema)

export default membersModel
