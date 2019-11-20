const Model = require('./model');


function addMensaje(message){
	const myMessage = new Model(message);
	myMessage.save();
}

async function getMensaje(msm_por_user){
	return new Promise( (resolve, reject) => {
		let filtrar = {};
		if(msm_por_user !== null){
			filtrar = { user: msm_por_user };
		}
		Model.find(filtrar)
			.populate('user')
			.exec( (error, populated) => {
				if(error){
					reject(error);
					return false;
				}
				return resolve(populated);
		})
	})
}

async function updatext(id, mensaje){
	const sms = await Model.findOne({
		_id: id
	});
	sms.mensaje = mensaje;
	const new_sms = await sms.save();
	return new_sms;
}

function removeMensaje(id){
	return Model.deleteOne({
		_id: id
	})
}

module.exports = {
	add: addMensaje,
	list: getMensaje,
	update: updatext,
	remove: removeMensaje
}