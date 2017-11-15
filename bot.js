var Twit = require('twit');
var credentials = require('./twitterKeys.js');
var generator = require('./simpleSentence.js');

console.log('Starting bot...')

var T = new Twit({
  consumer_key: credentials.CONSUMER_KEY,
  consumer_secret: credentials.CONSUMER_SECRET,
  access_token: credentials.ACCESS_TOKEN,
  access_token_secret: credentials.ACCESS_SECRET
});

function tweetIt(){
  var tweetContent = generator.simpleSentence();
  var tweet = {status: tweetContent}

  // T.post('statuses/update', tweet, function(err, data, response){
  //   console.log(data.text);
  // });

  console.log(tweetContent);
}

tweetIt();
// setInterval(tweetIt, 1000*60);
