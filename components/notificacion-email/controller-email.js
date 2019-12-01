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

module.exports = {
    addEmail,
    mostrar_email
}