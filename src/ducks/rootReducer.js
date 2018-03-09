/* ===========================
    Import
=========================== */
// React/Redux
import { combineReducers } from 'redux';

// Reducers
import { sessionState } from './SessionWrapper/reducers';
import { documentState } from './OpenDoc/reducers';
import { variableObjectState } from './VariableObject/reducers';


/* ===========================
    Reducer
=========================== */
const rootReducer = combineReducers({
  sessionState,
  documentState,
  variableObjectState
});

export default rootReducer;
