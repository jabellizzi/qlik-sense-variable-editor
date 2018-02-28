// ========= RxJS =========
import { switchMap } from 'rxjs/operators';
import { empty } from 'rxjs/observable/empty';

// ========= RxQ =========
import { createVariableEx } from "rxq/Doc";

// ========= Actions =========
import { CREATE_VARIABLE } from "../actions";

import { doc$ } from './openDoc';

export default function createVariableEpic(action$) {
  return action$.ofType(CREATE_VARIABLE)
    .switchMap((action) => doc$.pipe(
      switchMap(h => createVariableEx(h, action.payload))
    ))
    .switchMap(() => empty())
}