/*@flow*/
'use strict';

import { combineReducers } from 'redux';
import plays from './plays-reducer';
import app from './app-reducer';


const letsPlayReducers: Function = combineReducers({
  plays,
  app
});

export default letsPlayReducers;