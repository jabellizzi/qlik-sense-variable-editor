import { combineReducers } from 'redux';

import {
  storeAppNameReducer
} from './OpenAppDuck/reducers';

const rootReducer = combineReducers({
  storeAppNameReducer
});

export default rootReducer;