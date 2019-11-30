const express = require('express');
const router = express.Router();
const path = require('path')
const response = require('../../network/response');
const controller = require('./controller-pedidos-domicilio');


router.get('/', function(req, res) {
    const unico_pedido = req.query.id || null;

    controller.mostrar_pedidos(unico_pedido)
        .then( data => {
            response.success(req, res, data, 200);
        })
        .catch( error => {
            response.error(req, res, 'Error al mostrar pedidos a domicilio', 500, error);
        })
})


router.post('/', function(req, res) {

    controller.addPedidos(req.body.usuario, req.body.cantidad, req.body.direccion, req.body.latitud, req.body.longitud)
        .then( (data) => {
            response.success(req, res, data, 200);
        })
        .catch( e => {
            response.error(req, res, 'Ocurrio un error al añadir pedidos a domicilio', 500, e);
        })
})

module.exports = router;