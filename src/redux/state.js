import { renderEntireTree } from "../render";

// Business logic layer REDUX
let state = {
  profilePage: {
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
  },

  dialogPage: {
    names: [
      { id: 1, name: "Ihar" },
      { id: 2, name: "Harry" },
      { id: 3, name: "Belatrissa" },
    ],

    messages: [
      { id: 1, message: "Hello" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "I'm fine. And you?" },
    ],
  },
};

export let addPost = (postTitle, postText) => {
  let newPost = {
    id: 5,
    title: postTitle,
    text: postText,
  };

  state.profilePage.posts.push(newPost);
  renderEntireTree(state);
};

export default state;
