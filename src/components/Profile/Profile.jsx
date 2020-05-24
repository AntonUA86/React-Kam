import React from 'react';
// import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/Profileinfo';

const Profile = (props) => {

  return (
    <div >

      <ProfileInfo />

      <MyPosts post={props.state.post} />
    </div>
  )
}

export default Profile;