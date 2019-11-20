const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const mySchema = new Schema({
    name: String,
    fileUrl: String,
    precio: String,
    ranking: String,
    tipo: String
});

const model = mongoose.model('platos', mySchema);

module.exports = {
    modelo_platos: model
}