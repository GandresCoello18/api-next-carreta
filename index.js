const express = require('express');
const bodyParser = require('body-parser');
const router = require('./network/routes');
const data_base = require('./db');
const cors = require('cors');
const { config } = require('./config/index');

data_base();
var app = express();
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json({extended: false}));

//app.use(router);

app.use(express.static('public'));
app.use(express.static('files'));
router(app);

app.use(cors());
app.use('/static', express.static('public'));

app.listen( config.port || 9000);
console.log('La app esta escuchando en el pueto');