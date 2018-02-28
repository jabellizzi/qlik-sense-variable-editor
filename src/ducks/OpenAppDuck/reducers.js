import * as types from './types';

// const openAppReducer = (state = false, action) => {
//   switch(action.type) {
//     case types.OPEN_APP: return true;

//     default: return state;
//   }
// }

const storeAppHandleReducer = (state = null, action) => {
  switch(action.type) {
    case types.STORE_APP_HANDLE: return action.payload;

    default: return state;
  }
}

export {
  storeAppHandleReducer
}
