const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const jwt = require('jsonwebtoken');

router.get('/', function(req, res) {
    res.json({
        text: 'api function'
    });
})


router.post('/', function(req, res) {
    const  respuesta  = {
        id: req.body.id,
        name: req.body.name,
        correo: req.body.correo,
        clave: req.body.clave,
        telefono: req.body.telefono
    };

    const token = jwt.sign({respuesta}, 'My-Key-Secret');
    res.send({
        key: token
    });
    console.log(token);
})

router.get('/protected', ensureToken,(req, res) => {
    jwt.verify(req.token, 'My-Key-Secret', (err , data) => {
        if(err){
            res.sendStatus(403);
        }else{
            res.send({
                text: 'protegido',
                data
            });
        }
    })
})

function ensureToken(req, res, next){
    const cabezera = req.headers['authorization'];
    if(typeof cabezera !== 'undefined'){
        const bearer = cabezera.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        console.log(bearerToken);
        next();
    }else{
        res.sendStatus(403);
    }
}



module.exports = router;