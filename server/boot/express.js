//boot/express.js
var express = require('express'),
	path = require('path'),
	cookieParser = require('cookie-parser');

module.exports = function(app) {
	app.set('views', path.join(__dirname + "/../..", 'templates'));
	app.set('view engine', 'pug');

	app.use(express.static(path.join(__dirname + "/../..", 'public')));
	app.use(cookieParser());
};
