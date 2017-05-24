import React from 'react'
import RenderTweet from './RenderTweet'

import * as api from '../api'

export default class RenderTweets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tweets: []
    }
  }

  componentDidMount() {
    api.getTweets((response) =>
      this.setState({tweets: response})
    )
  }


  renderTweet(tweet){
    return <RenderTweet tweet={tweet}/>
  }

  render() {
    return <div>
      {this.state.tweets.map((tweet) => this.renderTweet(tweet))}
    </div>
  }
}
