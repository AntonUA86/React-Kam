import React from 'react';
// import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/Profileinfo';

const Profile = (props) => {

  return (
    <div >

      <ProfileInfo />

      <MyPosts post={props.profilePage.post} 
                newPostText={props.profilePage.newPostText}
              addPost={props.addPost}
              updateNewPostText={props.updateNewPostText}/>
    </div>
  )
}

export default Profile;