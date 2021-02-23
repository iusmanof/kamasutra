const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    {
      id: 1,
      title: "Post about animals",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo expedita voluptatem",
    },
    {
      id: 2,
      title: "News about economy",
      text: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 3,
      title: "Article ...",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
  ],
  newPostText: "it",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        title: state.newPostText,
        likesCount: 0,
      };
      let stateCopy = {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
      return stateCopy;
    }

    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.text };
    }
    default:
      return state;
  }
};

export let addPostActionCreator = (text) => {
  return {
    type: ADD_POST,
    title: "Title",
    text: text,
  };
};

export let updateNewPostActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, text: text };
};

export default profileReducer;
