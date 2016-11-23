module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('index');
	});

	app.get('/card/*', function(req, res) {
		//Обращаемся к базе, получаем данные
		res.render('card', {
			id: req.params[0]
		});
	});

	app.get('*', function(req, res) {
		res.send('404');
	});


};
