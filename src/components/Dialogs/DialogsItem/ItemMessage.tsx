import React, { FC } from "react";
import { MessageText } from "../../../redux/state";

type Props = {
  message: MessageText;
};

const ItemMessage: FC<Props> = ({ message }) => {
  return (
    <div>
      {message.message}
 
    </div>
  );
};

export default ItemMessage;
