const store = require('./store-plato');

function addPlato(name, imagen, precio, ranking, tipo){

    if(!name || !imagen || !precio || !ranking || !tipo){
        return Promise.reject('Ocurrio un error, name invalid');
    }

    let fileUrl = '';
    if(imagen){
        fileUrl = 'https://api-carreta.now.sh/upload/'+ imagen.filename;
    }

    const plato = {
        name,
        fileUrl,
        precio,
        ranking,
        tipo
    };
    return store.add(plato);
}

function mostrar_platos(filtrar_plato){
    return new Promise( (resolve, reject) => {
        resolve(store.list(filtrar_plato));
    })
}

module.exports = {
    addPlato,
    mostrar_platos,
}