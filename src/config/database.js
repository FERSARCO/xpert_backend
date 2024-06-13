const mongoose = require('mongoose');

const dbURI = 'mongodb://127.0.0.1:27017/xpert_prueba'; // Reemplaza con tu URI

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI);
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;