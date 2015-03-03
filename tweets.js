'use strict'

var Twit = require('twit')
var config=require('./config.js')

var T = new Twit(config.keys)


var tweets;

T.get('search/tweets', { q: 'World Cup 2015', count: 20 }, function(err, data, response) {
   tweets = data.statuses;
});

module.exports = function(){T.get('search/tweets', { q: 'World Cup 2015', count: 20 }, function(err, data, response) {
   return data.statuses;
});};

