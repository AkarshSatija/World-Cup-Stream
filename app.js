var express = require('express');
var path = require('path');
var Twit = require('twit')
var config = require('./config.js')

var app = express();
var T = new Twit(config.keys);


// serve static assets from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// look for view html in the views directory
app.set('views', path.join(__dirname, 'views'));

// use ejs to render 
app.set('view engine', 'ejs');


// geting index.ejs
app.use('/', function(req, res) {
    res.render('index', {
        title: 'Angular, Node and Twitter API'
    });
})

//creating JSON API 
app.use('/stream', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    T.get('search/tweets', {
        q: 'World Cup 2015',
        count: 20
    }, function(err, data, response) {
        res.send(data.statuses);
    });
});


module.exports = app;

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('Listening on ' + port);
});
