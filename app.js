var express = require('express');

var Twit = require('twit')
var config=require('./config.js')

var app = express();


var T = new Twit(config.keys)
var tweets;


//creating API


app.use('/', function(req,res){
	res.setHeader('Content-Type', 'application/json');
	T.get('search/tweets', { q: 'World Cup 2015', count: 20 }, function(err, data, response) {
	   res.send(data.statuses);
	});
});


module.exports = app;

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Listening on ' + port);
});
