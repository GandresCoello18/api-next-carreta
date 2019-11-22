const express = require('express');
const router = express.Router();
const path = require('path')
const response = require('../../network/response');
const controller = require('./controller-reservaciones');


router.get('/', function(req, res) {
    const unico_reserva = req.query.reservacion || null;

    controller.mostrar_reservaciones(unico_reserva)
        .then( data => {
            response.success(req, res, data, 200);
        })
        .catch( error => {
            response.error(req, res, 'Error al mostrar reservaciones', 500, error);
        })
})


router.post('/', function(req, res) {

    controller.addReservaciones(req.body.fecha, req.body.hora, req.body.personas, req.body.nombre, req.body.telefono)
        .then( (data) => {
            response.success(req, res, data, 200);
        })
        .catch( e => {
            response.error(req, res, 'Ocurrio un error al añadir reservacion', 500, e);
        })
})

module.exports = router;