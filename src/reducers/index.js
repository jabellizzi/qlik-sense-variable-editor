import {
  SET_VARIABLES, 
  EDIT_VARIABLE,
  SAVED,
  CANCEL_EDIT
} from '../actions/index';

const initialState = {
  variables: [],
  editing: false
};

export function variableReducer(state = initialState, action) {
  switch(action.type) {
    // Set Variables
    case SET_VARIABLES:
      return {
        ...state,
        variables: action.payload.map(variable => {
          return {
            name: variable.qName,
            definition: variable.qDefinition,
            id: variable.qInfo.qId,
            editing: false
          }
        })
      }

    // Edit Variable
    case EDIT_VARIABLE:
      return {
        ...state,
        variables: state.variables.map(variable => {
          if(action.payload === variable.id) {
            return {
              ...variable,
              editing: true
            }
          }
          return variable;
        }),
        editing: true
      }

    // Saved
    case SAVED:
      return state

    // Cancel Edit
    case CANCEL_EDIT:
      return {
        ...state,
        variables: state.variables.map(variable => {
          if(action.payload === variable.id) {
            return {
              ...variable,
              editing: false
            }
          }
          return variable;
        }),
        editing: false
      }

    // Default
    default: return state;
  }
}

export default variableReducer;