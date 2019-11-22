const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller-user');
const bcrypt = require('bcrypt');
const Model = require('./modelo-user');

router.get('/', function(req, res) {
    const filtrar_user = req.query.id || null;
    const correo_valid = req.query.correo || null;
    const clave_valid = req.query.clave || null;
    
    if(correo_valid != null || clave_valid != null){

        Model.modelo_user.find( {correo: correo_valid} )
            .then( valor => {
                console.log(valor.length == 0);
                console.log(valor.length != 0);
                if(valor.length != 0){
console.log('entro');
                    bcrypt.compare(clave_valid, valor[0].clave)
                        .then( confimar => {
                            console.log(confimar);
                            if(confimar == true){
                                controller.validar_user(correo_valid, valor[0].clave)
                                    .then( data => {
                                        response.success(req, res, data, 200);
                                            console.log(data);
                                    })
                                    .catch( e => {
                                        response.error(req, res, 'ocurrio un error al validar user', 500, e);
                                    })
                            }else{
                                res.status(500).send({
                                    error: 'contraseña incorrecta',
                                    body: 'Algo sali mal'
                                });
                            }
                    })
                    .catch(err => console.error(err.message));
                }else{
                    res.status(500).send({
                        error: 'usuario no encontrado',
                        body: 'Algo sali mal'
                    });
                }
            })
    }else{
        controller.getUsuario(filtrar_user)
            .then( data => {
                response.success(req, res, data, 200);
            })
            .catch( e => {
                response.error(req, res, 'ocurrio un error al mostrar user', 500, e);
            });
    }
})


router.post('/', function(req, res) {

        bcrypt
            .hash(req.body.clave, 10)
            .then(hash => {
                controller.addUser(req.body.name, req.body.correo, hash, req.body.telefono)
                    .then( (data) => {
                        response.success(req, res, data, 200);
                    })
                    .catch( e => {
                        response.error(req, res, 'Ocurrio un error', 500, e);
                    })
            })    
})

module.exports = router;