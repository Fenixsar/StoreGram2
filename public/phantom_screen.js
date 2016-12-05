var page = require('webpage').create(),
	system = require('system'),
	url;

url='http://localhost:3123/bot_stat'; //screenshot site
page.open(url, function(status) {
	
	var title = page.evaluate(function() {
    return document.title;
	});

	page.render(title +'.png');

	phantom.exit();

});

