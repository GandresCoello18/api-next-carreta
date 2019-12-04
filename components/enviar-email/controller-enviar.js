const store = require('./store-enviar');
const enviar = require('./index');

function correo_electronico(direccion, servicio, extencion){
    return new Promise( (resolve, reject) => {
        resolve( enviar.sendEmail(direccion, servicio, extencion) );
    })
}


function mostrar_email(unico, email){
    return new Promise( (resolve, reject) => {
        resolve(store.list(unico, email));
    })
}

module.exports = {
    correo_electronico,
    mostrar_email
}