/* ===========================
    Import
=========================== */
// ========= RxJS =========
// Operators
import {
  combineLatest,
  map,
  switchMap,
  shareReplay,
  startWith
} from 'rxjs/operators';


// ========= RxQ =========
import { createSessionObject } from 'rxq/Doc';
import { getLayout } from 'rxq/GenericObject';


// VariableObject Types
import * as types from '../types';
// OpenDoc Epic
import { openDocEpic } from '../../OpenDoc/epics';

// Variable Session Object config
const variableObjectConfig = {
  qInfo: {
    qId: 'VariableList',
    qType: 'VariableList'
  },
  qVariableListDef: {
    qType: 'variable',
    qData: {
      tags: '/tags'
    },
    qShowConfig: true,
    qShowReserved: false
  }
}

/* ===========================
    Get Variables Epic
=========================== */
const getVariablesEpic = (action$, state$) => {
  return action$.ofType(types.GET_VARIABLES).pipe(
    combineLatest(openDocEpic(action$)),
    map(([, doc]) => doc.handle),
    // Create Session Object
    switchMap(h => createSessionObject(h, variableObjectConfig)),
    shareReplay(1),
    // trigger on invalidated
    switchMap(h => h.invalidated$.pipe(
      startWith(h)
    )),
    // Get object layout
    switchMap(h => getLayout(h)),
    map(layout => layout.qVariableList.qItems),
    /* return
        - VARIABLES_RECEIVED action
        - array of variables
    */
    map(variableList => ({
      type: types.VARIABLES_RECEIVED,
      payload: variableList
    }))
  )
};

export { getVariablesEpic };
