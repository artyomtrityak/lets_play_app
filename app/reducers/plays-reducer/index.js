/*@flow*/
'use strict';

import { PlayType, ActionType } from './plays-reducer.types';


const playsReducer = (state: Array<PlayType> = [], action: ActionType): Array<PlayType> => {
  switch (action.type) {
    default:
      return state;
  }
};

export default playsReducer;
