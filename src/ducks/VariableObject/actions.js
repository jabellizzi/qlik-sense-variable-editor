/* ===========================
    Import
=========================== */
import * as types from './types';


/* ===========================
    Actions
=========================== */
// Get variables
const getVariables = () => ({
  type: types.GET_VARIABLES
});


// Create Variable
const createVariable = (newVariable) => ({
  type: types.CREATE_VARIABLE,
  payload: newVariable
});


// Edit Variable
const editVariable = (variableId) => ({
  type: types.EDIT_VARIABLE,
  payload: variableId
});


// Save Edit
const saveEdit = (newVariable) => ({
  type: types.SAVE_EDIT,
  payload: newVariable
});


// Cancel Edit
const cancelEdit = (variableId) => ({
  type: types.CANCEL_EDIT,
  payload: variableId
});


// Delete Variable
const deleteVariable = (variableId) => ({
  type: types.DELETE_VARIABLE,
  payload: variableId
});

export {
  getVariables,
  createVariable,
  editVariable,
  saveEdit,
  cancelEdit,
  deleteVariable
};
