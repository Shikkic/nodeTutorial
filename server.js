var express = require('express');
var app = express();
var request = require('request');
var friend = require('port-friends');

app.set('port', (process.env.PORT || 5000));
app.use(express.static('./public'));

app.get('/', function(req, res) {
	res.sendfile('./public/index.html');
});

friend.listen(app);
