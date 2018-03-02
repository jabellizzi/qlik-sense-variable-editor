// import { combineEpics } from 'redux-observable';

import { BehaviorSubject } from 'rxjs';

// import { openDocEpic } from './OpenAppDuck/epics';
import { createSessionEpic } from './SessionWrapper/epics';

/* Here is where we will implement adding new epics
    asynchronously */

const epic$ = new BehaviorSubject(createSessionEpic);

const rootEpic = (action$, store) => 
	epic$.mergeMap(epic => {
		return epic(action$, store);
	});
    
// const rootEpic = combineEpics(createSession);

export default rootEpic;

export {
	epic$
};