/* ===========================
    Import
=========================== */
// ========= RxJS =========
// Operators
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/map';

// Pipe Operators
import {
  shareReplay,
  switchMap,
  startWith,
  map
} from 'rxjs/operators';


// ========= RxQ =========
import { createSessionObject } from 'rxq/Doc';
import { getLayout } from 'rxq/GenericObject';


// VariableObject Types
import * as types from './types';
// OpenDoc Epic
import { openDocEpic } from '../OpenDoc/epics';

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
  return action$.ofType(types.GET_VARIABLES)
    // Use latest doc handle
    .combineLatest(openDocEpic(action$))
    // map doc handle
    .map(([, doc]) => doc.handle)
    // Create Session Object
    .switchMap(h => createSessionObject(h, variableObjectConfig)).pipe(
      shareReplay(1),
      // trigger on invalidated
      switchMap(h => h.invalidated$.pipe(
        startWith(h)
      )),
      // Get object layout
      switchMap(h => getLayout(h)),
      map(obj => obj.qVariableList.qItems)
    )
    /* return
        - VARIABLES_RECEIVED action
        - array of variables
    */
    .map(variableList => ({
      type: types.VARIABLES_RECEIVED,
      payload: variableList
    }));
}

export { getVariablesEpic };
