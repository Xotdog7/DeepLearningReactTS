import { IPosts, MessageText, MessageUser } from "./types";

let changeData: Function = () => {};

export const messageUser: MessageUser[] = [
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
];

export const messageText: MessageText[] = [
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
];

export const posts: IPosts[] = [
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
];

export let newPost: string = "Rustem";

export const addPost = (text: string) => {
  const newPost: IPosts = {
    id: posts.length + 1,
    message: text,
    likeCount: 0,
  };
  posts.push(newPost);
  changeData(posts);
};

export const updatePost = (text: string) => {
  newPost = text;

  changeData(posts);
};

export const subcribe = (callback: Function) => {
  changeData = callback;
};
