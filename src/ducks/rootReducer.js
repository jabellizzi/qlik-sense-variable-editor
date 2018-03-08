/* ===========================
    Import
=========================== */
// React/Redux
import { combineReducers } from 'redux';

// SessionWrapper Reducers
import { sessionState } from './SessionWrapper/reducers';
// OpenDoc Reducers
import { documentState } from './OpenDoc/reducers';


/* ===========================
    Reducer
=========================== */
const rootReducer = combineReducers({
  sessionState,
  documentState
});

export default rootReducer;
