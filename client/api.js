import request from 'superagent'

function getTweets(callback) {
  request
    .get('/api/v1/tweets')
    .end(function(err, res) {
      callback(res.body)
    })
}

function getTrump(callback) {
  request
    .get('/api/v1/trump')
    .end(function(err, res) {
      callback(res.body)
    })
}

module.exports = {
  getTweets,
  getTrump
}
