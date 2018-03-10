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


/* ===========================
    Epic
=========================== */
const rootEpic = combineEpics(
	connectSessionEpic,
    openDocEpic,
    getVariablesEpic,
    createVariableEpic
);

export default rootEpic;
