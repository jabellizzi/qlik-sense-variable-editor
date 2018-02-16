export const GET_VARIABLES = 'GET_VARIABLES';
export const SET_VARIABLES = 'SET_VARIABLES';
export const EDIT_VARIABLE = 'EDIT_VARIABLE';

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

export function editVariable() {
  return {
    type: EDIT_VARIABLE
  }
}