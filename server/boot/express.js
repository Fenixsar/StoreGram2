//boot/express.js
var express = require('express'),
	path = require('path'),
	cookieParser = require('cookie-parser'),
	logger = require('morgan');

module.exports = function(app) {
	app.set('views', path.join(__dirname + "/../..", 'templates'));
	app.set('view engine', 'jade');

	app.use(express.static(path.join(__dirname + "/../..", 'public')));
	app.use(cookieParser());

	app.use(logger('combined'));
};
