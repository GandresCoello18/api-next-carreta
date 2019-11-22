const store = require('./store-reservaciones');

function addReservaciones(fecha, hora, personas, nombre, telefono){

    if(!fecha || !hora || !personas || !nombre || !telefono){
        return Promise.reject('Ocurrio un error, name invalid');
    }

    const reservacion = {
        fecha,
        hora,
        personas,
        nombre,
        telefono
    };
    return store.add(reservacion);
}

function mostrar_reservaciones(filtrar_reserva){
    return new Promise( (resolve, reject) => {
        resolve(store.list(filtrar_reserva));
    })
}

module.exports = {
    addReservaciones,
    mostrar_reservaciones,
}