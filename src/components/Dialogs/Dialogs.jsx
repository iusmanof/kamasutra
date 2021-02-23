import React from "react";
import DialogName from "./DialogName/DialogName.";
import style from "./Dialogs.module.css";
import DialogMessage from "./Message/DialogMessage";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let newMessageBody = state.newMessageBody;

  let dialogsElements = state.names.map((data) => (
    <DialogName name={data.name} key={data.id} id={data.id} />
  ));

  let messages = state.messages.map((data) => (
    <DialogMessage message={data.message} key={data.id} />
  ));

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMassageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={style.wrapper}>
      <h2 className={style.dialogs_title}>Dialogs</h2>
      <section className={style.dialog__items}>
        <article className={style.dialog__names}>{dialogsElements}</article>
        <article className={style.dialog__messages}>
          <div> {messages}</div>
          <div>
            <textarea
              onChange={onNewMassageChange}
              value={newMessageBody}
              placeholder="enter new messagge"
            ></textarea>
            <button onClick={onSendMessageClick}>send</button>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Dialogs;
