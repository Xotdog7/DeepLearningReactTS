import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Message from "./Message/Message";
import Music from "./Music/Music";
import News from "./News/News";
import Profile from "./Profile/Profile";
import Settings from "./Settings/Settings";
import "../../app.scss";
import { addPost, messageText, messageUser, newPost, posts, updatePost } from "../../types/data";

const MyProfile = () => {
  return (
    <div className="content">
      <Routes>
        <Route
          path="/profile"
          element={<Profile posts={posts} addPost={addPost} updatePost = {updatePost} newPost ={newPost} />}
        />
        <Route
          path="/dialogs/*"
          element={
            <Message messageUser={messageUser} messageText={messageText} /> //Элемент получает нужную ссылку и переходит Элемент
          }
        />
        <Route path="/settings" element={<Settings />} />
        <Route path="/music" element={<Music />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
};

export default MyProfile;
