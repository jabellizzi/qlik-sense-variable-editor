export const GET_VARIABLES = 'GET_VARIABLES';
export const SET_VARIABLES = 'SET_VARIABLES';
export const EDIT_VARIABLE = 'EDIT_VARIABLE';
export const SAVE_EDIT = 'SAVE_EDIT';
export const SAVED = 'SAVED';
export const CANCEL_EDIT = 'CANCEL_EDIT';

export function getVariables() {
  return {
    type: GET_VARIABLES
  }
}

export function setVariables(variables) {
  return {
    type: SET_VARIABLES,
    payload: variables
  }
}

export function editVariable(variableId) {
  return {
    type: EDIT_VARIABLE,
    payload: variableId
  }
}

export function saveEdit(newVariable) {
  return {
    type: SAVE_EDIT,
    payload: newVariable
  }
}

export function saved() {
  return {
    type: SAVED
  }
}

export function cancelEdit(variableId) {
  return {
    type: CANCEL_EDIT,
    payload: variableId
  }
}