/* ===========================
    Import
=========================== */
// ========= RxJS =========
import { 
  tap, 
  map
} from 'rxjs/operators';

// VariableObject Types
import * as types from '../types';

/* ===========================
    Clear New Variable Epic
=========================== */
const clearNewVariableEpic = (action$, state$) => {
  return action$.ofType(types.CLEAR_NEW_VARIABLE).pipe(
    tap(d => {
      const inputs = [...document.querySelectorAll('.variable-table .create-new-row input')];
      inputs.map(input => input.value = '');
    }),
    map(() => ({ type: 'NEW_VARIABLES_CLEARED' }))
  )
};

export { clearNewVariableEpic };
