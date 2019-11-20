const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const mySchema = new Schema({
    name: String,
    correo: String,
    clave: String,
    fecha: String,
    telefono: String
});

const model = mongoose.model('usuarios', mySchema);

module.exports = {
    modelo_user: model
}