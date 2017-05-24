import React from 'react'


export default class RenderTweets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tweets: []
    }
  }

  setTweets(tweets) {
    this.setState({tweets})
  }

  ComponentDidMount() {
    // api.searchTwitter(this.setTweets.bind(this))
  }


  renderTweet(tweet){
    return <RenderTweet tweet={tweet}/>
  }

  render() {
    return this.state.tweets.map(renderTweet)
  }
}
