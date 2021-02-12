import React from "react";
import { NavLink } from "react-router-dom";
import style from "./DialogName.module.css";

const DialogName = (props) => {
  const path = "/dialogs/" + props.id;
  return (
    <NavLink to={path} className={style.name}>
      {props.name}
    </NavLink>
  );
};

export default DialogName;
