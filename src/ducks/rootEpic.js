/* ===========================
    Import
=========================== */
// React/Redux
import { combineEpics } from "redux-observable";

// Epics
import { connectSessionEpic } from './SessionWrapper/epics';
import { openDocEpic } from './OpenDoc/epics';
import { getVariablesEpic } from './VariableObject/epics/getVariables';
import { createVariableEpic } from './VariableObject/epics/createVariable';
import { clearNewVariableEpic } from './VariableObject/epics/clearNewVariable';
import { saveEditEpic } from './VariableObject/epics/saveEdit';
import { deleteVariableEpic } from './VariableObject/epics/deleteVariable';


/* ===========================
    Epic
=========================== */
const rootEpic = combineEpics(
	connectSessionEpic,
    openDocEpic,
    getVariablesEpic,
    createVariableEpic,
    clearNewVariableEpic,
    saveEditEpic,
    deleteVariableEpic
);

export default rootEpic;
