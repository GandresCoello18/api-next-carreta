const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const mySchema = new Schema({
    fecha: String,
    hora: String,
    personas: String,
    nombre: String,
    telefono: String
});

const model = mongoose.model('reservaciones', mySchema);

module.exports = {
    modelo_reservaciones: model
}