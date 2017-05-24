import request from 'superagent'

function getTweets(callback) {
  request
    .get('/api/v1/tweets')
    .end(function(req, res) {
      callback(res)
    })
}

module.exports = {
  getTweets
}
