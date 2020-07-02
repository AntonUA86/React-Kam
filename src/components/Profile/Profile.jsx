import React from "react";
// import s from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
// import Preloader from "../Common/Preloader/Preloader";

const Profile = (props) => {
  // if (!props.profile) {
  //   return <Preloader />;
  // }
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
