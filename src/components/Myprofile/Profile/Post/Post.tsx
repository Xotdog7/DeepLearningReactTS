import React, { FC } from "react";
import { IPosts } from "../../../../types/types";

type Props = {

  post: IPosts;

}


const Post:FC<Props> = ({post}) => {


 
  return (
    <div>
        <li>{post.message}</li>
        <li>{post.likeCount}</li>
    </div>
  );
};

export default Post;
