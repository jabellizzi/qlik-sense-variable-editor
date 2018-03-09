/* ===========================
    Import
=========================== */
// ========= RxJS =========
// import { Observable } from 'rxjs';
// Operators
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/ignoreElements';
import 'rxjs/add/operator/map';

// Pipe Operators
import {
  shareReplay,
  map
} from 'rxjs/operators';


// ========= RxQ =========
import { openDoc } from 'rxq/Global';
import { getAppProperties } from 'rxq/Doc';


// OpenDoc Types
import * as types from './types';
// SessionWrapper Epic
import { connectSessionEpic } from '../SessionWrapper/epics';


/* ===========================
    Open Doc Epic
=========================== */
const openDocEpic = (action$, state$) => {
  return action$.ofType(types.OPEN_DOC)
    // Use latest Session handle
    .withLatestFrom(connectSessionEpic(action$))
    // payload contains docId, handle contains session handle
    .map(m => ({ payload: m[0].payload, handle: m[1].handle }))
    // openDoc using session handle and docId
    .switchMap(obj => openDoc(obj.handle, obj.payload).pipe(
      shareReplay(1)
    ))
    // getAppProperties()
    .switchMap(h => getAppProperties(h).pipe(
      // map to return docName and doc handle
      map(props => ({
        name: props.qTitle,
        handle: h
      })),
      shareReplay(1)
    ))
    /* return
        - DOC_OPENED action
        - docName
        - doc handle
    */
    .map(doc => ({ 
      type: types.DOC_OPENED,
      payload: doc.name,
      handle: doc.handle
    }))
}

export { openDocEpic };
