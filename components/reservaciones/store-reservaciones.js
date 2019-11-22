const Model = require('./modelo-reservaciones');
const db = require('mongoose');

function addReservaciones(reservacion){
    const myUser = new Model.modelo_reservaciones(reservacion);
    return myUser.save();
}

async function listar_reservaciones(filtrar_reservacion){
    let filter = {};
    if(filtrar_reservacion !== null){
        filter = { _id: filtrar_reservacion }
    }
    const reserva = await Model.modelo_reservaciones.find(filter);
    return reserva;
}

module.exports = {
    add: addReservaciones,
    list: listar_reservaciones
}