import React, { FC } from "react";
import { MessageText } from "../../../../types/types";

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
