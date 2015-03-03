var Twit = require('twit')
var config=require('./config.js')
var T = new Twit(config.keys)


/*T.get('search/tweets', { q: 'banana since:2011-11-11', count: 100 }, function(err, data, response) {
  console.log(data)
})
*/


var stream = T.stream('statuses/filter', { track: 'Twitter', language: 'en' })

stream.on('tweet', function (tweet) {
  console.log(tweet)
})

