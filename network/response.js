exports.success = function(req, res, mensajes, status){
	res.status(status || 200).send({
		error: '',
		body: mensajes
	});
}

exports.error = function(req, res, mensajes, status, detalles){
	console.log(detalles);
	res.status(status || 500).send({
		error: mensajes,
		body: 'Algo sali mal'
	});
}