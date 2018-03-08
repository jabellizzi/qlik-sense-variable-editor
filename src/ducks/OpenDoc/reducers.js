/* ===========================
    Import
=========================== */
// OpenDoc Types
import * as types from './types';


/* ===========================
    Reducers
=========================== */
// Initial state
const initialState = {
  open: false,
  name: null
}

/* Document State
    is doc opened?
    doc name
*/
const documentState = (state = initialState, action) => {
  switch(action.type) {
    // if DOC_OPENED..
    case types.DOC_OPENED: return {
      open: true,
      name: action.payload
    }

    default: return state;
  }
}

export {
  documentState
}
