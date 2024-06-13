const mongoose = require('mongoose');
const { Schema } = mongoose;

const imagenSchema = new Schema({
  breeds:{ type: String },
  id:{ type: String },
  url:{ type: String },
  width:{ type: Number },
  height:{ type: Number },
  });

module.exports = mongoose.model('Imagen', imagenSchema);
