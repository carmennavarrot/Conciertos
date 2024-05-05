const mongoose = require('mongoose');
const uri =
  'mongodb+srv://carmennavarrotornay:QAhJlY4w9WGWH2YR@cluster0.1fa4h6p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
  try {
    const db = await mongoose.connect(uri);
    const { name, host } = db.connection;
    console.log(`Nombre de la BD  ${name} host: ${host}`);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { connectDB };
