const store = require('./store-plato');

function addPlato(name, file, precio, ranking, tipo){

    if(!name || !file || !precio || !ranking || !tipo){
        return Promise.reject('Ocurrio un error, name invalid');
    }

    let fileUrl = '';
    if(file){
        fileUrl = 'https://api-carreta-kwhs9h0ye.now.sh/imagenes/'+ imagen.filename;
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