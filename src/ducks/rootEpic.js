/* ===========================
    Import
=========================== */
// React/Redux
import { combineEpics } from "redux-observable";

// SessionWrapper Epic
import { connectSessionEpic } from './SessionWrapper/epics';
// OpenDoc Epic
import { openDocEpic } from './OpenDoc/epics';


/* ===========================
    Epic
=========================== */
const rootEpic = combineEpics(
	connectSessionEpic,
	openDocEpic
);

export default rootEpic;
