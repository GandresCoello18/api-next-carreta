const Model = require('./modelo-email');
const db = require('mongoose');

function addEmail(anadir){
    const correo = new Model.modelo_email(anadir);
    return correo.save();
}

async function listar_email(filtrar_email){
    let filter = {};
    if(filtrar_email !== null){
        filter = { _id: filtrar_email }
    }
    const correo = await Model.modelo_email.find(filter);
    return correo;
}

module.exports = {
    add: addEmail,
    list: listar_email
}