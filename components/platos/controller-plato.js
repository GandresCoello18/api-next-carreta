const store = require('./store-plato');

function addPlato(name, file, precio, ranking, tipo, descripcion){

    if(!name || !file || !precio || !ranking || !tipo || !descripcion){
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
        tipo,
        descripcion
    };
    return store.add(plato);
}

function mostrar_platos(filtrar_plato){
    return new Promise( (resolve, reject) => {
        resolve(store.list(filtrar_plato));
    })
}

function mostrar_recomendado(id_omitido){
    return new Promise( ( resolve, reject ) => {
        resolve(store.listar_recomendado(id_omitido))
    })
}

module.exports = {
    addPlato,
    mostrar_platos,
    mostrar_recomendado
}