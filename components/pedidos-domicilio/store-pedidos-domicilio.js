const Model = require('./modelo-pedidos-domicilio');
const db = require('mongoose');

function addPedidos(pedido){
    const obj = new Model.modelo_pedidos(pedido);
    return obj.save();
}

async function listar_pedidos(filtrar_pedido){
    return new Promise( (resolve, reject) => {
        let filter = {};
        if(filtrar_pedido !== null){
            filter = { _id: filtrar_pedido }
        }
        Model.modelo_pedidos.find(filter)
            .populate('usuarios')
            .exec( ( err, populatedata ) => {
                if(err){ 
                    reject(err); 
                    return false;
                }
                resolve(populatedata);
            })
    })
}

module.exports = {
    add: addPedidos,
    list: listar_pedidos
}