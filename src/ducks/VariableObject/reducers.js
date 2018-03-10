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
  variableList: [],
  editing: false
};

/* VariableObject State
    - array of variables
    - is a variable being edited
*/
const variableObjectState = (state = initialState, action) => {
  switch(action.type) {
    /* VARIABLES_RECEIVED.. */
    case types.VARIABLES_RECEIVED: return {
      ...state,
      
      variableList: action.payload.map(variable => ({
        name: variable.qName,
        definition: variable.qDefinition,
        id: variable.qInfo.qId,
        editing: false
      }))
    }

    /* EDIT_VARIABLE */
    case types.EDIT_VARIABLE: return {
      ...state,
      // for each variable..
      variableList: state.variableList.map(variable => {
        // if this is the variable we are editing..
        if(action.payload === variable.id) {
          // set it's editing state to true
          return {
            ...variable,
            editing: true
          }
        }
        return variable;
      }),
      editing: true
    }

    /* DEFAULT */
    default: return state;
  }
};

export {
  variableObjectState
};
