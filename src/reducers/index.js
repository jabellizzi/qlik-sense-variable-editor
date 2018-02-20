import {
  SET_VARIABLES,
  CREATE_NEW,
  EDIT_VARIABLE,
  SAVED,
  CANCEL_EDIT,
  DELETED
} from '../actions/index';

const initialState = {
  variables: [],
  appConnected: false,
  editing: false,
  creating: false
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
        }),
        appConnected: true
      }

    case CREATE_NEW:
      return {
        ...state,
        creating: true
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
      return {
        ...state,
        editing: false
      };

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

    // Deleted
    case DELETED:
      return state;

    // Default
    default: return state;
  }
}

export default variableReducer;