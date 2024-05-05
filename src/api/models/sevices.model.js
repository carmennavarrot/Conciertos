const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    type: {
      type: [String]
    },
    characteristics: {
      type: [String]
    },
    additionalServices: {
      type: [String]
    }
  });

  const service = mongoose.model('Service', serviceSchema);
  module.exports = service;
