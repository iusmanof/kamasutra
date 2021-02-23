import React from "react";
import MyPostsContainer from "./Post/MyPostsContainer";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <section className={`${style.post__content}`}>
      <ProfileInfo />
      <MyPostsContainer />
    </section>
  );
};

export default Profile;
