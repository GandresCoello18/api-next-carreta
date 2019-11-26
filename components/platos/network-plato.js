const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path')
const response = require('../../network/response');
const controller = require('./controller-plato');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, 'public/files/'))
    },
    filename: function (req, file, cb) {
      cb(null, new Date().getTime() + '-' + file.originalname) //Appending extension
    }
  })

  const fileFilter = (req, file, cb) => {
    // reject a file
    if ( file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };

const upload = multer({
    storage: storage,
    limits: {fileSize: 1024 * 1024 * 5},
    fileFilter: fileFilter
});

router.get('/', function(req, res) {
    const unico_plato = req.query.plato || null;

    controller.mostrar_platos(unico_plato)
        .then( data => {
            response.success(req, res, data, 200);
        })
        .catch( error => {
            response.error(req, res, 'Error al ingresar plato', 500, error);
        })
})


router.post('/', upload.single('file'), function(req, res) {
    
    console.log(req.body.name + ' ' + req.file + ' ' + req.body.precio + ' ' + req.body.ranking + ' ' + req.body.tipo);
    
    controller.addPlato(req.body.name, req.file, req.body.precio, req.body.ranking, req.body.tipo)
        .then( (data) => {
            response.success(req, res, data, 200);
        })
        .catch( e => {
            response.error(req, res, 'Ocurrio un error al añadir plato', 500, e);
        })
})

module.exports = router;