var countries = require('./models/countries.json')
var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', indexController.index);

// On Load Countries button click
app.get('/countries', function(req, res){

	res.send(countries);

});

// On Search button click
app.get('/search', function(req, res){

	var search = req.query.data.toLowerCase();

	var filtered = [];

	countries.forEach(function(obj){
		if(obj.name.toLowerCase() === search){
			filtered.push(obj)
		}
	});

	res.send(filtered)

});

var server = app.listen(9021, function() {
	console.log('Express server listening on port ' + server.address().port);
});
