import {
  SET_VARIABLES,
  EDIT_VARIABLE,
  SAVED,
  CANCEL_EDIT,
  CREATED
} from '../actions/index';

const initialState = {
  variables: [],
  appConnected: false,
  editing: false
};

export function variableReducer(state = initialState, action) {
  switch(action.type) {
    /* ================
        Set Variables
    ================ */
    case SET_VARIABLES:
      return {
        ...state,
        // map variables into custom format
        variables: action.payload.map(variable => {
          return {
            name: variable.qName,
            definition: variable.qDefinition,
            id: variable.qInfo.qId,
            editing: false
          }
        }),
        // view is now connected to an app
        appConnected: true
      }


    /* ================
        Edit Variable
    ================ */
    case EDIT_VARIABLE:
      return {
        ...state,
        // for each variable..
        variables: state.variables.map(variable => {
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
        // Set overall editing state to true
        editing: true
      }


    /* ================
        Created Variable
    ================ */
    case CREATED:
      return {
        ...state
      }


    /* ================
        Saved
    ================ */
    case SAVED:
      return {
        ...state,
        /* Once variable has been saved, set the 
            overall editing state to false */
        editing: false
      };


    /* ================
        Cancel Edit
    ================ */
    case CANCEL_EDIT:
      return {
        ...state,
        // for each variable..
        variables: state.variables.map(variable => {
          // if this is the variable we were editing..
          if(action.payload === variable.id) {
            return {
              ...variable,
              // set its edit state to false
              editing: false
            }
          }
          return variable;
        }),
        // set overall edit state to false
        editing: false
      }


    /* ================
        Default
    ================ */
    default: return state;
  }
}

export default variableReducer;