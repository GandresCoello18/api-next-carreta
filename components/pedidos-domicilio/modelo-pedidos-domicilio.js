const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const mySchema = new Schema({
    usuarios:{
        type: Schema.ObjectId,
        ref: 'usuarios'
    },
    platos:{
        type: Schema.ObjectId,
        ref: 'platos'
    },
    cantidad: Number,
    direccion: String,
    latitud: String,
    longitud: String,
    fecha: String
});

const model = mongoose.model('pedidos_domicilio', mySchema);

module.exports = {
    modelo_pedidos: model
}