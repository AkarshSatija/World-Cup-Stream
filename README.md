# World-Cup-Stream
Using Node and angular

## Dependencies and Installation
- NodeJS and npm should be installed
- Run "npm install"
```sh
$ npm install
```
- Empower it if needed :P i.e. Run "sudo npm install"
```sh
$ sudo npm install
```

- Setup config file using config.sample.js file i.e. Add twitter app details in it. 

```sh

module.exports = {
    "keys": {
        consumer_key: '..',
        consumer_secret: '..',
        access_token: '..',
        access_token_secret: '..'
    }
};

```
- Run "npm start" to start the app @ localhost:3000
```sh
$ npm start
```



## Scope of Improvemennts
- Reversing the view to feel like real stream. Right now its loading new tweets at the bottom
- Can embed Twitters' tweet UI for better look and other functionalities like favourite, retweet etc
- Can implement ajax long polling
- Load on scroll instead of buttons
- use socket for streaming


License
----

MIT


**Free Software, Hell Yeah! Hail FOSS :P **
