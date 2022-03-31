import { type } from "os";
import React, { FC } from "react";
import "./app.scss";
import Header from "./components/Header/Header";
import MyProfile from "./components/Myprofile/MyProfile";
import Nav from "./components/Nav/Nav";
import { MessageUser } from "./types/types";


const App = (posts: {}) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <MyProfile />
    </div>
  );
};

export default App;
