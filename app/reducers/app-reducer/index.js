/*@flow*/
'use strict';

import { AppStateType, ActionType } from './app-reducer.types';


const defaultAppState: AppStateType = {
  activeTab: 'plays',
  loading: false
};

const appReducer = (state: AppStateType = defaultAppState, action: ActionType): AppStateType => {
  switch (action.type) {
    default:
      return state;
  }
};

export default appReducer;
