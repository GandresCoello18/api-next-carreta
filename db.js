const db = require('mongoose');
const { config } = require('./config/index');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;
const DB_HOST = config.dbHost;

db.Promise = global.Promise;
async function conectar_db(){
    //const uri = "mongodb+srv://db_user_chat:kBcSkIXWupxBKUnf@cluster0-uwbuv.mongodb.net/chat_node_js";
    const uri = `mongodb+srv://${USER}:${PASSWORD}@${DB_HOST}/${DB_NAME}`;
    await db.connect(uri, {
	    useNewUrlParser: true,
	    useUnifiedTopology: true
    });
    
    console.log('db conectada');
}

module.exports = conectar_db;