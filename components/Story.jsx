import React from 'react'

const Story = ({img,username}) => {
  return (
      <div>
          <img src={img} />
          <p>{username}</p>
    </div>
  )
}

export default Story
