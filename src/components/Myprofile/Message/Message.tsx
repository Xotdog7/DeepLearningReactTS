import { type } from "@testing-library/user-event/dist/type";
import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { MessageText, MessageUser } from "../../../types/types";
import s from "./message.module.css";
import ItemMessage from "./UserMessage/ItemMessage";
import UserMessage from "./UserMessage/UserMessage";

type Props = {
  messageUser: MessageUser[];
  messageText: MessageText[];


};

const Message: FC<Props> = ({ messageUser, messageText }) => {
  const linkUser = messageUser.map((message) => (
    <UserMessage userMessage={message} />
  ));

  const showMessage = messageText.map((message) => {
    return <ItemMessage message={message} />;
  });
  return (
    <div className={s.dialogs}>
      <div className={s.user}>{linkUser}</div>
      <div className={s.user}>
        {showMessage}{" "}
        <div>
          <textarea  ></textarea>
        </div>
        <div>
          <button>Добавить</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
