import Image from 'next/image'
import React from 'react'

const Story = ({img,username}) => {
  return (
      <div className='w-10 h-10 m-2'>
          <img src={img} alt='' layout='fill'/>
          <p>{username}</p>
    </div>
  )
}

export default Story
