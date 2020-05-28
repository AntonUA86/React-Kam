import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

let postElements = props.post.map(p =><Post messages={p.message} likesCount={p.likesCount}/> )
let newPostElement = React.createRef();
let addPost = () => {
props.addPost();
} 

let onPostChange = () =>{
  props.updateNewPostText();
}

  return (
    <div className={s.postsBlock}>
      My posts
      <div>
        <div>
        <textarea ref={newPostElement} onChange={onPostChange} value={props.NewPostText}></textarea>
        </div>
        <div>
        <button onClick={addPost}>Add post</button>
        </div>

      </div>
      <div className={s.posts}>
       {postElements}
      
      </div>
    </div>
  )

}

export default MyPosts;