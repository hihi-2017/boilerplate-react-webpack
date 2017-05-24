var Twitter = require('twitter')

var client = new Twitter({
  consumer_key: 'wkcgdXqrjReQaPeDOAu95i0F1',
  consumer_secret:'t3yYxelrfQz333weABq8dcMuu7T0qGUt33M9DTCOCtwbmkyNXq',
  access_token_key:'867138631361740800-yPDUSGICXe4cKFkCQHCO3m9uSl9LqDf',
  access_token_secret:'mFIcSfMfWJRtHJE6ubVvmQGnwknhq8uXqFaFQfC11K0NG'
})



searchTwitter = (callback) => {
  // client.get('search/tweets', {q:'trump', count: "20"}, function(error, tweets, response) {
  //   let sortedTweets = tweets.statuses.map(tweet => {
  //     return {
  //       name: tweet.user.screen_name,
  //       text: tweet.text,
  //       createdAt: tweet.created_at,
  //       profileImageUrl: tweet.profile_image_url
  //     }
  //   })
  let sortedTweets = []
    callback(sortedTweets)
  // })
}


module.exports = {
  searchTwitter
}
