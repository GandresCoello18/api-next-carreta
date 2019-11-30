const store = require('./store-pedidos-domicilio');

function addPedidos(usuarios, platos, cantidad, direccion, latitud, longitud){

    if(!usuarios || !platos || !cantidad || !direccion || !latitud || !longitud){
        return Promise.reject('Ocurrio un error, name invalid');
    }
    
    var año = new Date().getFullYear();
    var mes = new Date().getMonth();
    var dia = new Date().getDate();
    var fecha = String(año + '-' + Number(mes + 1) + '-' + dia);

    const pedidos = {
        usuarios,
        platos,
        cantidad,
        direccion,
        latitud,
        longitud,
        fecha
    };
    return store.add(pedidos);
}

function mostrar_pedidos(filtrar_pedidos){
    return new Promise( (resolve, reject) => {
        resolve(store.list(filtrar_pedidos));
    })
}

module.exports = {
    addPedidos,
    mostrar_pedidos,
}