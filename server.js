var express = require('express');
var app = express();
var request = require('request');
app.set('port', (process.env.PORT || 5000));
app.use(express.static('./public'));

app.get('/', function(req, res) {
	res.sendfile('./public/index.html');
});

app.get('/storytime', function(req, res) {
	res.send("<p> Hey " + req.query.name + " nice to meet you! I think like to "+ req.query.verb + 
	" this has been an awesome story of "+ req.query.adjective + " , you're totally welcome </p>");
});

app.listen(app.get('port'), function() {
	console.log('Fuck it ship it.');
});
