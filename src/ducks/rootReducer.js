import { combineReducers } from 'redux';

import {
  openAppReducer,
  storeAppHandleReducer
} from './OpenAppDuck/reducers';

const rootReducer = combineReducers({
  openAppReducer,
  storeAppHandleReducer
});

export default rootReducer;