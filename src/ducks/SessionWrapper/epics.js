/* ===========================
    Import
=========================== */
// ========= RxJS =========
// Operators
import { shareReplay } from 'rxjs/operators';

// Pipe Operators
import 'rxjs/add/operator/switchMap';


// ========= RxQ =========
import { connectSession } from 'rxq/connect';


// SessionWrapper Types
import * as types from './types';


/* ===========================
    Connect Session Epic
=========================== */
const connectSessionEpic = (action$) => {
  return action$.ofType(types.CONNECT_SESSION)
    // Use server config to connect to session
    .switchMap(action => connectSession(action.payload).pipe(
      shareReplay(1)
    ))
    /* return
        - SESSION_CONNECTED action
        - session handle
    */
    .map(h => ({ 
      type: types.SESSION_CONNECTED, 
      handle: h 
    }));
};


export { connectSessionEpic };
