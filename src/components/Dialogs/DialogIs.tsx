import { type } from "@testing-library/user-event/dist/type";
import React, { FC } from "react";
import { MessageText, MessageUser } from "../../types/types";
import ItemMessage from "./DialogsItem/ItemMessage";
import UserMessage from "./DialogsItem/UserMessage";

import s from "./Dialogs.module.css";

type Props = {
  messageUser: MessageUser[];
  messageText: MessageText[];


};

const Dialogs: FC<Props> = ({ messageUser, messageText }) => {
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

export default Dialogs;
