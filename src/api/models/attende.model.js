const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attendeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    role: {
      type: String,
      default: 'user',
      enum: ['admin', 'user'],
    },
    age: { type: Number, required: true },
    gender: { type: String, enum: ['Masculino', 'Femenino', 'Otro'] },
    concert: { type: Schema.ObjectId, ref: 'concert' }
  },
{
    collection: 'attendee'
}
);
  
  const Attendee = mongoose.model('attendee', attendeeSchema);
  module.exports = Attendee;