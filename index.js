var express = require('express');
var app = express();
var request = require('request');
app.set('port', (process.env.PORT || 5000));
app.use(express.static('./public'));
/*
app.post('/api/test', function(req, res) {
	req.on('data', function(data) {
		var bodyObj = JSON.parse(data);
		var name = bodyObj.name;
		console.log(name);
	});
	req.on('end', function() {
		console.log("Completed.");
	});
	res.status(200).send({status: "Recieved, bruh"});
});
*/


app.get('/', function(req, res) {
	res.sendfile('./index.html');
});

app.listen(app.get('port'), function() {
	console.log('Fuck it ship it.');
});
