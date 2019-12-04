const Model_user = require('../user/modelo-user');
const Model_correo = require('../notificacion-email/modelo-email');

async function listar_email(unico, email){
    let filter = {};
    if(unico !== null){
        filter = { _id: unico }
    }
    //return Model_user.modelo_user.find(filter);
     
    if(email != null && unico == null){
        return Model_correo.modelo_email.find();
    }
    
    if(Object.keys( await Model_user.modelo_user.find(filter).then()).length > 0){
        return Model_user.modelo_user.find(filter);
    }else if(Object.keys( await Model_correo.modelo_email.find(filter).then()).length > 0){
        return Model_correo.modelo_email.find(filter);
    }else{
        return false;
    }
}


module.exports = {
    list: listar_email
}