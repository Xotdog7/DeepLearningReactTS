export interface State {
  messageUser: MessageUser[];
  messageText: MessageText[];
  posts: IPosts[];
}

export interface MessageUser {
  id: number;
  name: string;
}
export interface MessageText {
  id: number;
  message: string;
}

export interface IPosts {
  id: number;
  message: string;
  likeCount: number;
}

export interface IAction {
  type: string;
  newPost: string;
}

export interface IStore {
  _state: State;
  _changeData: Function;
  getState: () => State;
  subcribe: (callback: Function) => void;
  dispatch: (action: IAction) => void;
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


  dispatch(action) {
    if (action.type === "ADD_POST") {
      const newPost: IPosts = {
        id: this._state.posts.length + 1,
        message: action.newPost,
        likeCount: 0,
      };
      this._state.posts.push(newPost);
      this._changeData();
    } 
    else if (action.type === "UPDATE_POST") {
      this._changeData();
    }
  },

  subcribe(callback) {
    this._changeData = callback;
  },
};
