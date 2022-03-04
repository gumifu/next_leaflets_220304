import React from 'react'
import Post from './Post'


const posts = [
    {
        id: '123',
        username: 'fujisaki',
        userImg: 'https://lookyourbestbeyourbest.files.wordpress.com/2011/11/image-3.jpeg',
        img: 'https://images.unsplash.com/photo-1646339472855-e8228cfb0f15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        caption:'Hello World',

    }
]


const Posts = () => {
  return (
      <div>
          {posts.map(post => (
              <Post key={post.id} id={post.id} username={post.username} userImg={post.userImg} img={post.img} caption={post.caption}/>
          ))}
          {posts.map(post => (
              <Post key={post.id} id={post.id} username={post.username} userImg={post.userImg} img={post.img} caption={post.caption}/>
          ))}
    </div>
  )
}

export default Posts
