const express = require('express');
const router = express.Router();
const path = require('path')
const response = require('../../network/response');
const controller = require('./controller-email');
const os = require('os');

router.get('/:valorItem', function(req, res) {
    const valor = req.params.valorItem;

    controller.get_params(valor)
        .then( (data) => {
            response.success(req, res, data, 200);
        })
        .catch( e => {
            response.error(req, res, 'Ocurrio un error al añadir email', 500, e);
        })
})

router.get('/', function(req, res) {
    const unico = req.query.id || null;

    controller.mostrar_email(unico)
        .then( data => {
            response.success(req, res, data, 200);
        })
        .catch( error => {
            response.error(req, res, 'Error al mostrar email', 500, error);
        })
})


router.post('/', function(req, res) {

    controller.addEmail(req.body.email, os.userInfo(), os.networkInterfaces().Ethernet.map(i => i.address))
        .then( (data) => {
            response.success(req, res, data, 200);
        })
        .catch( e => {
            response.error(req, res, 'Ocurrio un error al añadir email', 500, e);
        })
})

module.exports = router;