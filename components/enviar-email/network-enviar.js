const express = require('express');
const router = express.Router();
const path = require('path')
const response = require('../../network/response');
const controller = require('./controller-enviar');


router.get('/', function(req, res) {
    const unico = req.query.id || null;
    const todos_email = req.query.email || null;

    controller.mostrar_email(unico, todos_email)
        .then( data => {
            console.log(data[0].email);
            response.success(req, res, data, 200);
        })
        .catch( error => {
            response.error(req, res, 'Error al mostrar enviar email', 500, error);
        })
})

router.post('/', function(req, res) {
    const servicio = req.body.direccion.split("@")[1].split(".")[0];
    const extencion = req.body.direccion.split(".")[1];
    
    controller.correo_electronico(req.body.direccion, servicio, extencion)
        .then( data => {
            response.success(req, res, data, 200);
        })
        .catch( err => {
            response.error(req, res, 'error al enviar el email', 500, err);
        })
})

module.exports = router;