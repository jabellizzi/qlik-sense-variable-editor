// ========= RxJS =========
import { Observable } from 'rxjs';
import {
  switchMap
} from 'rxjs/operators';

// ========= RxQ =========
import { getVariableById } from 'rxq/Doc';
import { applyPatches } from 'rxq/GenericVariable';

// ========= Actions =========
import {
  SAVE_EDIT,
  saved
} from '../actions/index';

import { doc$ } from './openDoc';

export default function saveEditEpic(action$) {
  return action$.ofType(SAVE_EDIT)
    .switchMap((action) => doc$.pipe(
      switchMap(h => getVariableById(h, action.payload.id)),
      switchMap(h => applyPatches(h, [
        {
          qOp: 'replace',
          qPath: '/qDefinition',
          qValue: `"${action.payload.value}"`
        }
      ]))
    ))
    .switchMap(() => Observable.of(saved()));
}