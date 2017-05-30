import React from 'react'
import RenderTweets from './renderTweets'
import RenderTrumpTweets from './RenderTrumpTweets'

const App = () => {
  return (
    <div className= 'container'>
      <div className= 'DonaldTweets'>
        <RenderTrumpTweets/>
      </div>
      <div className= 'NormalTweets'>
        <RenderTweets/>
      </div>
  </div>
  )
}

export default App
