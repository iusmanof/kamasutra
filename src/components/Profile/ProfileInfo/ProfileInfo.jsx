import React from "react";
import style from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <h2 className={`${style.post__title}`}>Main content</h2>
      <img
        className={`${style.post__img}`}
        src="https://st.depositphotos.com/1760224/3660/i/600/depositphotos_36606389-stock-photo-sport-success-on-sunset-background.jpg"
      />
    </div>
  );
};

export default ProfileInfo;
