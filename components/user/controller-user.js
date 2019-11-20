const store = require('./store-user');

function addUser(name, correo, clave, telefono){

    if(!name || !correo || !clave || !telefono){
        return Promise.reject('Ocurrio un error, name invalid');
    }

    var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    var f=new Date();
    var fecha = f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear();

    const user = {
        name,
        correo,
        clave,
        fecha,
        telefono
    };
    return store.add(user);
}

function getUsuario(filtrar_user){
    return new Promise( (resolve, reject) => {
        resolve(store.list(filtrar_user));
    })
}

function validar_user(correo, clave){
    return new Promise( (resolve, reject) => {
        resolve(store.validar(correo, clave));
    })
}

module.exports = {
    addUser,
    getUsuario, 
    validar_user
}