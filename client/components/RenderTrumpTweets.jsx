import React from 'react'
import RenderTweet from './RenderTweet'

import * as api from '../api'

export default class RenderTweets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      trump: [],
    }
  }

  componentDidMount() {
    api.getTrump((response) =>
      this.setState({trump: response})
    )
  }


  renderTweet(tweet){
    return <RenderTweet tweet={tweet}/>
  }

  render() {
    return <div>
      {this.state.trump.map((tweet) => this.renderTweet(tweet))}
    </div>
  }
}
