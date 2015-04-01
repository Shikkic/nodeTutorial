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

app.get('/music', function(req, res){
	
	request('https://api.spotify.com/v1/search?q=Muse&type=album', function (error, response, body) {
  		if (!error && response.statusCode == 200) {
  			var elements = ['<!doctype html5><html>'];
  			body.albums.items.forEach(function(album) {
  				try {
  				elements.push('<a href="' + album.href + '"><img src="' + album.images[0].url + '"></a>');
  				} catch (err) {
  					console.log(err);
  				}
  			});
  			elements.push('</html>');
    			res.status(200).send(elements.join('')); 
		}
	});
});

app.listen(app.get('port'), function() {
	console.log('Fuck it ship it.');
});
