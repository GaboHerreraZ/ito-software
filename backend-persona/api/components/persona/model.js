const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schemaPersona = new Schema({
    nombre:String,
    apellido: String,
    tipoDocumento: String,
    numeroDocumento: Number,
    genero: String
});

const model = mongoose.model('persona', schemaPersona);

module.exports = model;