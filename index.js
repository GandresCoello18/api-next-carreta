const express = require('express');
const bodyParser = require('body-parser');
const router = require('./network/routes');
const data_base = require('./db');
const cors = require('cors');
const { config } = require('./config/index');

data_base();
var app = express();

//app.use(router);
app.use('/uploads', express.static('uploads'));
app.use('/public', express.static('public/files'));
app.use(bodyParser.json({extended: false}));
router(app);

app.use(cors());
//app.use('/app', express.static('public/otro.php'));
//app.use(express.static(path.join(__dirname, 'public')));

app.listen( config.port || 9000);
console.log('La app esta escuchando en el pueto');