// // ========= RxJS =========
import { Observable } from 'rxjs';
import {
  switchMap
} from 'rxjs/operators';

// // ========= RxQ =========
import { destroyVariableById } from 'rxq/Doc';

// ========= Actions =========
import {
  DELETE_VARIABLE,
  deleted
} from '../actions/index';

import { doc$ } from './openDoc';

export default function deleteVariableEpic(action$) {
  return action$.ofType(DELETE_VARIABLE)
    .switchMap((action) => doc$.pipe(
      switchMap(h => destroyVariableById(h, action.payload))
    ))
    .switchMap(() => Observable.of(deleted()));
}