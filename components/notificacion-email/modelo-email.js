const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const mySchema = new Schema({
    email: String
});

const model = mongoose.model('email', mySchema);

module.exports = {
    modelo_email: model
}