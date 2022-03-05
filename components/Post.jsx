import React from 'react'
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
// import { async } from '@firebase/util';
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, setDoc,doc} from 'firebase/firestore';
import { db } from '../firebase';
import Moment from 'react-moment';

const Post = ({id,username,userImg,img,caption}) => {
    const { data: session } = useSession();
    const [comment, setComment] = useState([]);
    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState([]);

    useEffect(() => onSnapshot(query(collection(db, 'posts', id, 'comments'), orderBy('timestamp', 'desc')), snapshot => setComments(snapshot.docs)), [db]);
    useEffect(() => onSnapshot(collection(db, 'posts', id, 'likes'), snapshot => setLikes(snapshot.docs)), [db, id]);

    const likePost = async () => {
        await setDoc(doc(db, "posts", id, 'likes', session.user.uid), {
            accountName:session.user.name,
        })
    }

    const sendComment = async (e) => {
        e.preventDefault();

        const commentToSend = comment;
        setComment('');

        await addDoc(collection(db, 'posts', id, 'comments'), {
            comment: commentToSend,
            accountName: session.user.name,
            userImage: session.user.image,
            timestamp: serverTimestamp(),
        })
    }

    console.log(comments);

  return (
    <div className="bg-white my-7 boder rounded-sm shadow-md">
      {/* Header */}
      <div className="flex items-center p-5">
        <img
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          src={userImg}
          alt=""
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      {/* img */}
      <img src={img} className="object-cover w-full" layout="fill" />

      {/* Button */}
      {session && (
        <div className=" flex justify-between px-4 pt-4">
          <div className="flex space-x-4 ">
            <HeartIcon onClick={likePost} className="btn" />
            <ChatIcon className="btn" />
            <PaperAirplaneIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}

      {/* caption */}
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{username}</span>
        {caption}
      </p>

      {/* comments */}
      {comments.length > 0 && (
          <div className='ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin'>
              {comments.map((comment)=>(
                  <div key={comment.id} className='flex items-center space-x-2 mb-3'>
                      <img src={comment.data().userImage} alt='' className='h-7 rounded-full' />
                      <p className='h-7 flex-1'>
                          <span className='font-bold'>
                            {comment.data().accountName}
                          </span>{" "}
                          {comment.data().comment}
                      </p>
                      <Moment fromNow className='pr-5 text-xs'>
                          {comment.data().timestamp?.toDate()}
                      </Moment>
                  </div>
              ))}
          </div>
      )}

      {/* inputbox */}
      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input
            type="text"
            value={comment}
            onChange={e=>setComment(e.target.value)}
            placeholder="コメント..."
            className="border-none flex-1 focus:right-0 outline-none"
                  />
                  {/* comment.trim()? */}
          <button type='submit' disabled={!comment} onClick={sendComment} className=" font-semibold text-blue-500">送信</button>
        </form>
      )}
    </div>
  )
}

export default Post
