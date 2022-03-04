import Image from 'next/image'
import React from 'react'

const Story = ({img,username}) => {
  return (
      <div>
          <img src={img} alt='' layout='fill'/>
          <p>{username}</p>
    </div>
  )
}

export default Story
