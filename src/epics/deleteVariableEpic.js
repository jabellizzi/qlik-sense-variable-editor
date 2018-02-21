// ========= RxJS =========
import { switchMap } from 'rxjs/operators';
import { empty } from 'rxjs/observable/empty';

// ========= RxQ =========
import { destroyVariableById } from 'rxq/Doc';

// ========= Actions =========
import { DELETE_VARIABLE } from '../actions/index';

import { doc$ } from './openDoc';

export default function deleteVariableEpic(action$) {
  return action$.ofType(DELETE_VARIABLE)
    .switchMap((action) => doc$.pipe(
      switchMap(h => destroyVariableById(h, action.payload))
    ))
    .switchMap(() => empty())
}