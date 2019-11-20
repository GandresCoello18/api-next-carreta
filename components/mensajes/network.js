const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', function( req, res){
	const msm_por_user = req.query.user || null;
	controller.getMensaje(msm_por_user)
		.then( (mensajeList) => {
			response.success(req, res, mensajeList, 200);
		})
		.catch( e => {
			response.error(req, res, 'error simulado', 500, "es solo una simulacion de errores");
		})
});
router.post('/', function( req, res){
	controller.addMensaje(req.body.chat, req.body.user, req.body.messaje)
		.then( (fullMesaje) => {
			response.success(req, res, fullMesaje, 200);	
		})
		.catch(e => {
			response.error(req, res, 'error simulado', 500, "es solo una simulacion de errores");
		});
});
router.patch('/:id', function(req, res){
	console.log(req.params.id);
	controller.updateMessage(req.params.id, req.body.mensaje)
		.then((data) => {
			response.success(req, res, data, 200);
		})
		.catch(e => {
			response.error(req, res, "error del patch", 500, e);
		})
});
router.delete('/:id', function(req, res) {
	controller.deleteMessage(req.params.id)
		.then( () => {
			response.success(req, res, `usuario ${req.params.id} eliminado`);
		})
		.catch( e => {
			response.error(req, res, 'Error interno', 500, e);
		}) 
});

module.exports = router;