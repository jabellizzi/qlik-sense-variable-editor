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


// Delete Variable
const deleteVariable = (variableId) => ({
  type: types.DELETE_VARIABLE,
  payload: variableId
});

export {
  getVariables,
  createVariable,
  deleteVariable
};
