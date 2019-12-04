const express = require('express');
const mensaje = require('../components/mensajes/network');
const user = require('../components/user/network-user');
const chat = require('../components/chat/network-chat');
const login = require('../components/login/network-login');
const plato = require('../components/platos/network-plato');
const reservacion_eventos = require('../components/reservaciones/network-reservaciones');
const imagenes = require('../components/imagenes/network-img');
const pedidos = require('../components/pedidos-domicilio/network-pedidos-domicilio');
const email = require('../components/notificacion-email/network-email');
const enviar_email = require('../components/enviar-email/network-enviar');

const route = function(server){
	server.use('/mensaje', mensaje);
	server.use('/user', user);
	server.use('/chat', chat);
	server.use('/login', login);
	server.use('/plato', plato);
	server.use('/reservaciones', reservacion_eventos);
	server.use('/imagenes', imagenes);
	server.use('/pedidos', pedidos);
	server.use('/email', email);
	server.use('/enviar-email', enviar_email);
}

module.exports = route;