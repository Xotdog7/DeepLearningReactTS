import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import "./app.scss";
import Dialogs from "./components/Dialogs/DialogIs";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";

import Profile from "./components/Profile/Profile";
import { IAction, State } from "./redux/state";

type props = {
  state: State;
  dispatch: (action: IAction) => void;
};

const App: FC<props> = ({ state, dispatch }) => {
  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="content">
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                posts={state.posts}
                dispatch={dispatch}
              />
            }
          />
          <Route
            path="/dialogs/*"
            element={
              <Dialogs
                messageUser={state.messageUser}
                messageText={state.messageText}
              />
            }
          />
          <Route path="/music" element={<Music />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
