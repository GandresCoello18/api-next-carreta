const Model = require('./modelo-plato');
const db = require('mongoose');

function addPlato(plato){
    const myUser = new Model.modelo_platos(plato);
    return myUser.save();
}

async function listar_plato(filtrar_plato){
    let filter = {};
    if(filtrar_plato !== null){
        filter = { _id: filtrar_plato }
    }
    const usuarios = await Model.modelo_platos.find(filter);
    return usuarios;
}

module.exports = {
    add: addPlato,
    list: listar_plato
}