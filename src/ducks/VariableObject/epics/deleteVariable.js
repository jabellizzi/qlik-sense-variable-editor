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
import { destroyVariableById } from 'rxq/Doc';

// VariableObject Types
import * as types from '../types';
// OpenDoc Epic
import { openDocEpic } from '../../OpenDoc/epics';

/* ===========================
    Delete Variable Epic
=========================== */
const deleteVariableEpic = (action$, state$) => {
  return action$.ofType(types.DELETE_VARIABLE).pipe(
    // Get handle from doc
    withLatestFrom(openDocEpic(action$)),
    map(a => ({ variableId: a[0].payload, handle: a[1].handle })),
    // Destroy
    switchMap(obj => destroyVariableById(obj.handle, obj.variableId)),
    map(() => ({ type: 'DELETED' }))
  )
};

export { deleteVariableEpic };
