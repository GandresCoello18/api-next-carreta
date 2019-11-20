const store = require('./store');

function addMensaje(chat, user, mensaje){
	return new Promise( (resolve, reject) => {
		if(chat == "" || user == "" || mensaje == ""){
			console.log('Error desde controlador no exite user o mensaje');
			reject('datos incorrectos');
			return false;
		}
		const fullMesaje = {
			chat: chat,
			user: user,
			mensaje: mensaje,
			date: new Date()
		}
		store.add(fullMesaje);
		resolve(fullMesaje);
	});
}

function getMensaje(msm_por_user){
	return new Promise( (resolve, reject) => {
		resolve(store.list(msm_por_user));
	});
}

function updateMessage(id, mensaje){
	return new Promise(async (resolve, reject) => {
		if(!id || !mensaje){
			reject('datos invalidos patch');
			return false;
		}
		const result = await store.update(id, mensaje);
		resolve(result);
	})
}

function deleteMessage(id){
	return new Promise( (resolve, reject) => {
		if(!id){
			reject('Id invalido');
			return false;
		}
		store.remove(id)
			.then( () => {
				resolve();
			})
			.catch( e => {
				reject(e);
			})
	})
}

module.exports = {
	addMensaje,
	getMensaje,
	updateMessage,
	deleteMessage
};