import { type } from "@testing-library/user-event/dist/type";
import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { MessageUser } from "../../../redux/state";

type Props = {
    userMessage: MessageUser
}

const UserMessage:FC<Props> = ({userMessage}) => {
  return (
    <div>
        <NavLink to={`/dialogs/${userMessage.id}`}>{userMessage.name}</NavLink>
    </div>
  );
};

export default UserMessage;
