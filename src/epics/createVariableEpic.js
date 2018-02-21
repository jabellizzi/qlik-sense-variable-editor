// ========= RxJS =========
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

// ========= RxQ =========
import { createVariableEx } from "rxq/Doc";

// ========= Actions =========
import { 
  CREATE_VARIABLE,
  created 
} from "../actions";

import { doc$ } from './openDoc';

export default function createVariableEpic(action$) {
  return action$.ofType(CREATE_VARIABLE)
    .switchMap((action) => doc$.pipe(
      switchMap(h => createVariableEx(h, action.payload))
    ))
    .switchMap(() => Observable.of(created()))
}