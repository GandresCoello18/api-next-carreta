const express = require('express');
const mensaje = require('../components/mensajes/network');
const user = require('../components/user/network-user');
const chat = require('../components/chat/network-chat');
const login = require('../components/login/network-login');
const plato = require('../components/platos/network-plato');

const route = function(server){
	server.use('/mensaje', mensaje);
	server.use('/user', user);
	server.use('/chat', chat);
	server.use('/login', login);
	server.use('/plato', plato);
}

module.exports = route;