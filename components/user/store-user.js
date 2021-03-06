const Model = require('./modelo-user');
const db = require('mongoose');

function addUser(user){
    const myUser = new Model.modelo_user(user);
    return myUser.save();
}

async function listar_user(filtrar_user){
    let filter = {};
    if(filtrar_user !== null){
        filter = { _id: filtrar_user }
    }
    const usuarios = await Model.modelo_user.find(filter);
    return usuarios;
}

async function validar_user(correo, clave){
    const validar_user = await Model.modelo_user.find( { $and: [ {clave: clave}, {correo: correo}] } );
    return validar_user;
}

async function params_user(valor){
    return await Model.modelo_user.find( { correo: valor } );
}

module.exports = {
    add: addUser,
    list: listar_user,
    validar: validar_user,
    parametro: params_user
}