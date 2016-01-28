/*@flow*/
'use strict';


type PlayType = {
  name: string;
  author: string;
};

type ActionType = {
  type: string;
};

const playsReducer : Function = (state : Array<PlayType> = [], action : ActionType) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default playsReducer;
