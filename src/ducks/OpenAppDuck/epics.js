// ========= RxJS =========
import {
  shareReplay,
  switchMap
} from 'rxjs/operators';

// ========= RxQ =========
import { connectSession } from 'rxq/connect';
import { openDoc } from 'rxq/Global';

import * as types from './types';
import * as actions from './actions';
import { epic$ } from '../rootEpic';


const openDocEpic = (action$) => {
  return action$.ofType(types.OPEN_DOC)
    .do(x => console.log(x))
    .ignoreElements()
    // .switchMap(action => connectSession(config).pipe(
    //   switchMap(h => {console.log(h); return openDoc(h, action.payload)}),
    //   shareReplay(1)
    // ))
    // .map(h => actions.storeAppHandle(h));
}

epic$.next(openDocEpic);

export { openDocEpic };