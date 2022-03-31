import React from "react";
import s from "./Header.module.css"
const Header = () => {
  return (
    <div>
      <header className={s.logo_header}>
        <img
          src="https://www.adobe.com/express/create/media_127a4cd0c28c2753638768caf8967503d38d01e4c.jpeg?width=400&format=jpeg&optimize=medium"
          alt=""
        />
      </header>
    </div>
  );
};

export default Header;
