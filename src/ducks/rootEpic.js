import { combineEpics } from 'redux-observable';

import { openDocEpic } from './OpenAppDuck/epics';

const rootEpic = combineEpics(openDocEpic);

export default rootEpic;