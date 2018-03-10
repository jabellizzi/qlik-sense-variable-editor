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
  variableList: []
};

/* VariableObject State
    - array of variables
*/
const variableObjectState = (state = initialState, action) => {
  switch(action.type) {
    // when VARIABLES_RECEIVED..
    case types.VARIABLES_RECEIVED: return {
      variableList: action.payload.map(variable => ({
        name: variable.qName,
        definition: variable.qDefinition,
        id: variable.qInfo.qId,
        editing: false
      }))
    }

    default: return state;
  }
};

export {
  variableObjectState
};
