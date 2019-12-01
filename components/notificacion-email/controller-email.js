const store = require('./store-email');

function addEmail(email, info, ip){

    if(!email || !info || !ip){
        return Promise.reject('Ocurrio un error, name invalid');
    }

    const notificaciones = {
        email,
        info,
        ip
    };
    return store.add(notificaciones);
}

function mostrar_email(filtrar_email){
    return new Promise( (resolve, reject) => {
        resolve(store.list(filtrar_email));
    })
}

function get_params(valor){
    return new Promise( (resolve, reject) => {
        resolve(store.parametros(valor));
    })
}

module.exports = {
    addEmail,
    mostrar_email,
    get_params
}