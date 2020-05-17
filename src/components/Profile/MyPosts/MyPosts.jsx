import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let post = [
    {id:1 , message:"Hi, how", likesCount:12},
    {id:2 , message:"Hi, my friend ",likesCount:15},
]
let postElements = post.map(p =><Post messages={p.message} likesCount={p.likesCount}/> )
  return (
    <div className={s.postsBlock}>
      My posts
      <div>
        <div>
        <textarea></textarea>
        </div>
        <div>
        <button>Add post</button>
        </div>

      </div>
      <div className={s.posts}>
       {postElements}
      
      </div>
    </div>
  )

}

export default MyPosts;