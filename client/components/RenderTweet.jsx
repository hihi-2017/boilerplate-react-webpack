import React from 'react'

// import index from '../../server/routes/index'

export default ({tweet}) => {
  return (
    <div className="tweet">
      <h1>{tweet.name}</h1>
      <h1>{tweet.text}</h1>
      <h1>{tweet.createdAt}</h1>
      <h1>{tweet.profileImageUrl}</h1>
    </div>
  )

}
