import React from "react";
import { NavLink } from "react-router-dom";
import DialogName from "./DialogName/DialogName.";
import style from "./Dialogs.module.css";
import DialogMessage from "./Message/DialogMessage";

const Dialogs = (props) => {

  let dialogsElements = props.names.map((data) => (
    <DialogName name={data.name} id={data.id} />
  ));
  let messages = props.messages.map((data) => (
    <DialogMessage message={data.message} />
  ));

  return (
    <div className={style.wrapper}>
      <h2 className={style.dialogs_title}>Dialogs</h2>
      <section className={style.dialog__items}>
        <article className={style.dialog__names}>{dialogsElements}</article>
        <article className={style.dialog__messages}>{messages}</article>
      </section>
    </div>
  );
};

export default Dialogs;
