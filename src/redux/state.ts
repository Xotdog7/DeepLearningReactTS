import { IPosts, MessageText, MessageUser } from "../types/types";

export interface State {
  messageUser: MessageUser[];
  messageText: MessageText[];
  posts: IPosts[];
}

let changeData: Function = () => {};

export const state: State = {
  messageUser: [
    {
      name: "Rustem",
      id: 1,
    },

    {
      name: "Seil",
      id: 2,
    },
    {
      name: "Gabby",
      id: 3,
    },
  ],
  messageText: [
    {
      id: 1,
      message: "Hello world",
    },
    {
      id: 2,
      message: "Хеллоу Ворлд",
    },
    {
      id: 1,
      message: "Привет мир",
    },
  ],
  posts: [
    {
      id: 1,
      message: "hello world",
      likeCount: 1,
    },
    {
      id: 2,
      message: "Здравья",
      likeCount: 3,
    },
    {
      id: 3,
      message: "Хеллоу ворлд",
      likeCount: 10,
    },
  ],
};

export let newPost: string = "Rustem";

export const addPost = (text: string) => {
  const newPost: IPosts = {
    id: state.posts.length + 1,
    message: text,
    likeCount: 0,
  };
  state.posts.push(newPost);
  changeData();
};

export const updatePost = (text: string) => {
  newPost = text;
  changeData();
};

export const    subcribe = (callback: Function) => {
  changeData = callback;
};
