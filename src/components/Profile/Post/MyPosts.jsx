import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post";
let newPostElement = React.createRef();

const MyPosts = (props) => {
  let postElements = props.posts.map((data) => {
    return <Post id={data.id} key={data.id} title={data.title} text={data.text} />;
  });

  let onAddPost = () => {
    // let text = newPostElement.current.value;
    props.addPost();
    // props.dispatch(addPostActionCreator(text));
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
    // props.dispatch(updateNewPostActionCreator(text));
  };
  return (
    <section className={`${style.addpost}`}>
      {postElements}
      <textarea
        ref={newPostElement}
        className={style.textarea}
        name="textarea"
        id=""
        cols="30"
        rows="10"
        value={props.newPostText}
        onChange={onPostChange}
      />
      <button onClick={onAddPost} className={style.button}>
        Add post
      </button>
    </section>
  );
};

export default MyPosts;
