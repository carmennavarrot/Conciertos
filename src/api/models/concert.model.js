const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const concertSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    date: { type: Date},
    style: { type: String },
    services: {type: Schema.ObjectId, ref: 'services'}
  },
  {
    collection: 'concert'
  }
);

const Concert = mongoose.model('Concert', concertSchema);
module.exports = Concert;