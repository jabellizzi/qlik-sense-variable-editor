import { shareReplay } from 'rxjs/operators';
import { empty } from 'rxjs/observable/empty';

import { connectSession } from 'rxq/connect';

import * as types from './types';

const createSessionEpic = (action$) => {
  return action$.ofType(types.CREATE_SESSION)
    .switchMap(action => connectSession(action.payload).pipe(
      shareReplay(1)
    ))
    .switchMap(() => empty())
};

export { createSessionEpic };