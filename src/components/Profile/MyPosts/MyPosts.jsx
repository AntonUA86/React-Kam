import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>

      </div>
      <div className={s.posts}>
        <Post messages="Hi, how"  likesCount='0'/>
        <Post messages="Hi, my friend" likesCount='23'/>
      
      </div>
    </div>
  )

}

export default MyPosts;