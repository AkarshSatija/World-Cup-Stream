var twitterAPI = require('node-twitter-api');
var twitter = new twitterAPI({
    consumerKey: 'TntuGFimUNHFao9BeVcrw',
    consumerSecret: 'leL2eUTePDEFCIfNS2BfHTV2j7eWshwBxjZd8fM1y8A',
    callback: 'https://task-wooplr.herokuapp.com/'
});


twitter.statuses("update", {
        status: "Hello world!"
    },
    accessToken,
    accessTokenSecret,
    function(error, data, response) {
        if (error) {
            // something went wrong 
        } else {
            // data contains the data sent by twitter 
        }
    }
);