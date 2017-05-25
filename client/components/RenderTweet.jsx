import React from 'react'

export default ({tweet}) => {
  console.log(tweet);
  return (
    <div className="tweet">
      <h1>{tweet.name}</h1>
      <h1>{tweet.text}</h1>
      <h1>{tweet.createdAt}</h1>
      <img src={tweet.profileImageUrl}/>
    </div>
  )

}
