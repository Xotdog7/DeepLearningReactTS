import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { addPost, posts, subcribe } from "./types/data";

let render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App  />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};
render()

subcribe(render);
