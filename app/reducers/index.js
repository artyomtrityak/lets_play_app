/*@flow*/
'use strict';

import { combineReducers } from 'redux';
import plays from './plays.reducer';


const letsPlayReducers : Function = combineReducers({
  plays
});

export default letsPlayReducers;