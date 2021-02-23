import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    posts: state.profileReducer.posts,
    newPostText: state.profileReducer.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
