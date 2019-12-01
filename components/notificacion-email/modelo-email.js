const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const mySchema = new Schema({
    email: String,
    info: Object,
    ip: Object
});

const model = mongoose.model('email', mySchema);

module.exports = {
    modelo_email: model
}