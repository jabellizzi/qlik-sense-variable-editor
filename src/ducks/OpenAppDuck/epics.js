// ========= RxJS =========
import { Observable } from 'rxjs';
import {
  shareReplay,
  switchMap
} from 'rxjs/operators';

// ========= RxQ =========
import { connectSession } from 'rxq/connect';
import { openDoc } from 'rxq/Global';

import * as types from './types';
import * as actions from './actions';

const config = {
  host: '172.16.84.84',
  isSecure: true
};

// const session$ = connectSession(config).pipe(
//   switchMap(h => openDoc(h, 'db8433fa-55bd-4420-9bb3-03ca764f5511')),
//   shareReplay(1)
// )



const openDocEpic = (action$) => {
  return action$.ofType(types.OPEN_APP)
    // .do(x => console.log(x))
    // .ignoreElements()
    .switchMap(action => connectSession(config).pipe(
      switchMap(h => {console.log(h); return openDoc(h, action.payload)}),
      shareReplay(1)
    ))
    .map(h => actions.storeAppHandle(h));
}

export { openDocEpic };