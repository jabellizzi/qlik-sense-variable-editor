/* ===========================
    Import
=========================== */
// ========= RxJS =========
import {
  withLatestFrom,
  map,
  switchMap
} from 'rxjs/operators';

// ========= RxQ =========
import { createVariableEx } from 'rxq/Doc';

// VariableObject Types
import * as types from '../types';
// OpenDoc Epic
import { openDocEpic } from '../../OpenDoc/epics';

/* ===========================
    Create Variable Epic
=========================== */
const createVariableEpic = (action$, state$) => {
  return action$.ofType(types.CREATE_VARIABLE).pipe(
    // Get handle from doc
    withLatestFrom(openDocEpic(action$)),
    map(a => ({ handle: a[1].handle, variable: a[0].payload })),
    // Create Variable
    switchMap(obj => createVariableEx(obj.handle, obj.variable)),
    // Clear input fields
    map(() => ({ type: types.CLEAR_NEW_VARIABLE }))
  )
};

export { createVariableEpic };
