import { type } from "@testing-library/user-event/dist/type";
import React, { FC } from "react";
import { IPosts } from "../../types/types";
import Mypost from "./MyPost/MyPost";
import s from "./profile.module.css";
type Props = {
  posts: IPosts[];
  addPost: (text: string) => void;
  updatePost: (text: string) => void; 
  newPost: string
};

const Profile: FC<Props> = ({ posts, addPost, updatePost, newPost }) => {
  const postElements = posts.map((post) => {
    return <Mypost post={post} />;
  });

  const text = React.createRef<HTMLTextAreaElement>();

  function showText() {
    const textAlert = "" + text.current?.value;
    addPost(textAlert);
  }
  function updatePosts() {
    const textAlert = "" + text.current?.value;
    updatePost(textAlert);
  }

  return (
    <main className={s.content}>
      <img
        src="https://sammali.com/wp-content/uploads/2017/04/logo-types.jpg"
        alt=""
      />
      <div>
        <div>
          <textarea onChange={updatePosts} value={newPost} ref={text}></textarea>
        </div>
        <button onClick={showText}>кнопка</button>
      </div>

      {postElements}
    </main>
  );
};

export default Profile;
