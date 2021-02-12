import React from "react";
import AddPost from "./Post/AddPost";
import Post from "./Post/Post";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  let posts = props.posts.map((data) => {
    return <Post id={data.id} title={data.title} text={data.text} />;
  });
  return (
   
    <section className={`${style.post__content}`}>
      <ProfileInfo />
      <AddPost addPost={props.addPost} />
      {posts}
    </section>
  );
};

export default Profile;
