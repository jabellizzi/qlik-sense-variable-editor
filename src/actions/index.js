export const GET_VARIABLES = 'GET_VARIABLES';
export const SET_VARIABLES = 'SET_VARIABLES';
export const CREATE_NEW = 'CREATE_NEW';
export const EDIT_VARIABLE = 'EDIT_VARIABLE';
export const SAVE_EDIT = 'SAVE_EDIT';
export const SAVED = 'SAVED';
export const CANCEL_EDIT = 'CANCEL_EDIT';
export const DELETE_VARIABLE = 'DELETE_VARIABLE';
export const DELETED = 'DELETED';

// Get Variables
export function getVariables() {
  return {
    type: GET_VARIABLES
  }
}

// Set Variables
export function setVariables(variables) {
  return {
    type: SET_VARIABLES,
    payload: variables
  }
}

// Create New
export function createNew() {
  return {
    type: CREATE_NEW
  }
}

// Edit Variable
export function editVariable(variableId) {
  return {
    type: EDIT_VARIABLE,
    payload: variableId
  }
}

// Save Edit
export function saveEdit(newVariable) {
  return {
    type: SAVE_EDIT,
    payload: newVariable
  }
}

// Saved
export function saved() {
  return {
    type: SAVED
  }
}

// Cancel Edit
export function cancelEdit(variableId) {
  return {
    type: CANCEL_EDIT,
    payload: variableId
  }
}

// Delete Variable
export function deleteVariable(variableId) {
  return {
    type: DELETE_VARIABLE,
    payload: variableId
  }
}

// Deleted
export function deleted() {
  return {
    type: DELETED
  }
}