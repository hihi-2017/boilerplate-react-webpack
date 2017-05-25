const express = require('express')
const router = express.Router()

var Twitter = require('twitter')

var client = new Twitter({
  consumer_key: 'wkcgdXqrjReQaPeDOAu95i0F1',
  consumer_secret:'t3yYxelrfQz333weABq8dcMuu7T0qGUt33M9DTCOCtwbmkyNXq',
  access_token_key:'867138631361740800-yPDUSGICXe4cKFkCQHCO3m9uSl9LqDf',
  access_token_secret:'mFIcSfMfWJRtHJE6ubVvmQGnwknhq8uXqFaFQfC11K0NG'
})

router.get('/tweets', (req, res) => {
  client.get('search/tweets', {q:'realDonaldTrump', count: "5", truncated: true}, function(error, tweets, response) {
    let sortedTweets = tweets.statuses.map(tweet => {
      return {
        name: tweet.user.screen_name,
        text: tweet.text,
        createdAt: tweet.created_at,
        profileImageUrl: tweet.user.profile_image_url_https
      }
    })
    res.json(sortedTweets)
  })
})

router.get('/trump', (req, res) => {
  client.get('statuses/user_timeline', {user_id:'25073877', screen_name:'realDonaldTrump', count: '5', }, function(error, tweets, response) {
    let TrumpTweets = tweets.map(tweet => {
      return {
        name: tweet.user.screen_name,
        text: tweet.text,
        createdAt: tweet.created_at,
        profileImageUrl: tweet.user.profile_image_url_https
      }
    })
    res.json(TrumpTweets)
  })
})





module.exports = router
