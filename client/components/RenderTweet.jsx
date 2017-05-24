import React from 'react'

export default class RenderTweet extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="tweet">
        <h1>{tweet.name}</h1>
        <h1>{tweet.text}</h1>
        <h1>{tweet.createdAt}</h1>
        <h1>{tweet.profileImageUrl}</h1>
      </div>
    )
  }


}
