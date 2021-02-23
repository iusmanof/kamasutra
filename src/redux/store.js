import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import profileReducer from "./profile-reducer";

// Business logic layer REDUX
let store = {
  _state: {
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
      newPostText: "it",
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
      newMessageBody: "",
    },

    navbarPage: {},
  },

  _callSubcriber() {
    console.log("state was changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubcriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
    this._state.navbarPage = navbarReducer(this._state.navbarPage, action);
    this._callSubcriber(this._state);
  },
};

export default store;
