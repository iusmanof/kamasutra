import React from "react";
import style from "./users.module.css";

let Users = (props) => {
  if ((props.users.length === 0)) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://images.all-free-download.com/images/graphiclarge/cute_little_mouse_hd_picture_168909.jpg",
        followed: true,
        fullName: "Dima",
        status: "Boss",
        location: { city: "Minsk", country: "Belarus" },
      },
      {
        id: 2,
        photoUrl:
          "https://images.all-free-download.com/images/graphiclarge/cute_little_dog_definition_picture_168910.jpg",
        fullName: "Kolia",
        status: "Manager",
        location: { city: "Moscow", country: "Russia" },
      },
      {
        id: 3,
        photoUrl:
          "https://images.all-free-download.com/images/graphiclarge/burning_ball_of_fire_02_hq_pictures_170601.jpg",
        fullName: "Vlad",
        status: "Deputy",
        location: { city: "Kiev", country: "Ukraine" },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <div>
            <img className={style.userPhoto} src={u.photoUrl} />
            {u.followed ? (
              <button
                onClick={() => {
                  props.unfollow(u.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  props.follow(u.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
          <div>
            <span>{u.fullName}</span>
            <span>{u.status}</span>
            <span>{u.location.country}</span>
            <span>{u.location.city}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
