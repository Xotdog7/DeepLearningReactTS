import React, { FC } from "react";
import { IUser } from "../types/types";
import "./user.css";

const User: FC<IUser> = ({ name, lastname, dateOrBirth, email, gender }) => {
  return (
    <div className="container">
      <div>
        <h1>
          <span> {name}</span>
          <span>{lastname}</span>
        </h1>
      </div>

      <div className="div__right">
        {dateOrBirth}, {gender}
        <span>{email}</span>
      </div>
    </div>
  );
};

export default User;
