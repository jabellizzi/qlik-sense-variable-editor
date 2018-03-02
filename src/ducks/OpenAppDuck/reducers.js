import * as types from './types';


const storeAppNameReducer = (state = null, action) => {
  switch(action.type) {
    case types.STORE_APP_NAME: return action.payload;

    default: return state;
  }
}

export {
  storeAppNameReducer
}
