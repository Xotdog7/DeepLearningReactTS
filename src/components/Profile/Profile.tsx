import { type } from "@testing-library/user-event/dist/type";
import React, { FC } from "react";
import { IAction, IPosts } from "../../redux/state";
import Mypost from "./MyPost/MyPost";
import s from "./profile.module.css";
type Props = {
  posts: IPosts[];

  dispatch: (action: IAction) => void;
};

const Profile: FC<Props> = ({ posts, dispatch }) => {
  const postElements = posts.map((post) => {
    return <Mypost post={post} />;
  });

  const text = React.createRef<HTMLTextAreaElement>();

  function showText() {
    const textAlert = "" + text.current?.value;
    dispatch({ type: "ADD_POST", newPost: textAlert });
  }
  function updatePosts() {
    const textAlert = "" + text.current?.value;
    dispatch({ type: "UPDATE_POST", newPost: textAlert });
  }

  return (
    <main className={s.content}>
      <img
        src="https://sammali.com/wp-content/uploads/2017/04/logo-types.jpg"
        alt=""
      />
      <div>
        <div>
          <textarea
            onChange={updatePosts}
            ref={text}
          ></textarea>
        </div>
        <button onClick={showText}>кнопка</button>
      </div>

      {postElements}
    </main>
  );
};

export default Profile;
