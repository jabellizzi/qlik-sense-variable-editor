import {
  SET_VARIABLES, 
  EDIT_VARIABLE
} from '../actions/index';

const initialState = {
  variables: [],
  editing: false
};

export function variableReducer(state = initialState, action) {
  switch(action.type) {
    case SET_VARIABLES:
      return {
        ...state,
        variables: action.payload
      }

    case EDIT_VARIABLE:
      return {
        ...state,
        editing: true
      }

    default: return state;
  }
}

export default variableReducer;