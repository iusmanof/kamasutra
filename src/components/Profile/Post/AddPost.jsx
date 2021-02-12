import React from "react";
import style from "./AddPost.module.css";

let newPostElement = React.createRef();

const AddPost = (props) => {
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost("new post!!!", text);
  };

  return (
    <section className={`${style.addpost}`}>
      <textarea
        ref={newPostElement}
        className={style.textarea}
        name="textarea"
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <button onClick={addPost} className={style.button}>
        Add post
      </button>
    </section>
  );
};

export default AddPost;
