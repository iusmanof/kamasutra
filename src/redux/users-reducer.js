const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users:
   [
    // {
    //   id: 1,
    //   photoUrl:
    //     "https://images.all-free-download.com/images/graphiclarge/cute_little_mouse_hd_picture_168909.jpg",
    //   followed: true,
    //   fullName: "Dima",
    //   status: "Boss",
    //   location: { city: "Minsk", country: "Belarus" },
    // },
    // {
    //   id: 2,
    //   photoUrl:
    //     "https://images.all-free-download.com/images/graphiclarge/cute_little_dog_definition_picture_168910.jpg",
    //   fullName: "Kolia",
    //   status: "Manager",
    //   location: { city: "Moscow", country: "Russia" },
    // },
    // {
    //   id: 3,
    //   photoUrl:
    //     "https://images.all-free-download.com/images/graphiclarge/burning_ball_of_fire_02_hq_pictures_170601.jpg",
    //   fullName: "Vlad",
    //   status: "Deputy",
    //   location: { city: "Kiev", country: "Ukraine" },
    // },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        // users : [...state.users],
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }

    default:
      return state;
  }
};

export let followAC = (userId) => {
  return { type: FOLLOW, userId };
};
export let unfollowAC = (userId) => {
  return { type: UNFOLLOW, userId };
};
export let setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
