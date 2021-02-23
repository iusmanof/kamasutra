import React from "react";
import { NavLink, Route } from "react-router-dom";
import style from "./DialogMessage.module.css";

const DialogMessage = (props) => {
  return (
    <div>
      <Route
        path="/dialogs/1"
        render={() => <div className={style.message}>{props.message}</div>}
      />
      <Route
        path="/dialogs/2"
        render={() => <div className={style.message}>{props.message}</div>}
      />
       <Route
        path="/dialogs/3"
        render={() => <div className={style.message}>3</div>}
      />
    </div>
  );
};

export default DialogMessage;
