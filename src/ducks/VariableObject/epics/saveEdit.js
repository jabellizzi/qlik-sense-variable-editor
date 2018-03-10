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
import { getVariableById } from 'rxq/Doc';
import { applyPatches } from 'rxq/GenericVariable';

// VariableObject Types
import * as types from '../types';
// OpenDoc Epic
import { openDocEpic } from '../../OpenDoc/epics';


/* ===========================
    Save Edit Epic
=========================== */
const saveEditEpic = (action$, state$) => {
  return action$.ofType(types.SAVE_EDIT).pipe(
    // Get doc handle
    withLatestFrom(openDocEpic(action$)),
    map(a => ({ newVariable: a[0].payload, handle: a[1].handle })),

    // Get Variable
    switchMap(obj => getVariableById(obj.handle, obj.newVariable.id).pipe(
      switchMap(h => applyPatches(h, [{
          qOp: 'replace',
          qPath: '/qDefinition',
          qValue: `"${obj.newVariable.value}"`
      }]))
    )),
    map(() => ({ type: 'VARIABLE_SAVED' }))
  )
};

export { saveEditEpic };
