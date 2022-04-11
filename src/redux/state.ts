import { IPosts, MessageText, MessageUser } from "../types/types";

export interface IStore {
  _state: State;
  getState: () => State;
  _changeData: Function;
  newPost: string;
  addPost: (text: string) => void;
  updatePost: (text: string) => void;
  subcribe: (callback: Function) => void;
}

export interface State {
  messageUser: MessageUser[];
  messageText: MessageText[];
  posts: IPosts[];
}

export const store: IStore = {
  _state: {
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
  },
  _changeData() {},
  getState() {
    return this._state;
  },
  newPost: "Rustem",

  addPost(text) {

    debugger;
    const newPost: IPosts = {
      id: this._state.posts.length + 1,
      message: text,
      likeCount: 0,
    };
    this._state.posts.push(newPost);
    this._changeData();
  },
  updatePost(text) {
    this.newPost = text;
    this._changeData();
  },
  subcribe(callback) {
    this._changeData = callback;
  },
};
