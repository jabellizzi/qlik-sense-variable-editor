/* ===========================
    Import
=========================== */
// SessionWrapper Types
import * as types from './types';


/* ===========================
    Reducers
=========================== */
// Initial state
const initialState = {
  connected: false
};

/* Session State
    defines whether session is connected
*/
const sessionState = (state = initialState, action) => {
  switch(action.type) {
    // if SESSION_CONNECTED..
    case types.SESSION_CONNECTED: return {
      connected: true
    };

    default: return state;
  }
};

export {
  sessionState
};
