import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { addPost, newPost, state, subcribe, updatePost } from "./redux/state";

let render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
      <App state={state} newPost ={newPost} addPost={addPost} updatePost={updatePost}  />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};
render();

subcribe(render);
