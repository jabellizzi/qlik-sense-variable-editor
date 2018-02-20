// ========= RxJS =========
import { Observable } from 'rxjs';
import {
  shareReplay,
  switchMap,
  startWith
} from 'rxjs/operators';

// ========= RxQ =========
import { connectSession } from 'rxq/connect';
import { openDoc } from 'rxq/Global';
import { 
  createSessionObject,
  getVariableById,
  destroyVariableById
} from 'rxq/Doc';
import { getLayout } from 'rxq/GenericObject';
import { applyPatches } from 'rxq/GenericVariable';

// ========= Redux Observable =========
import { combineEpics } from "redux-observable";

// ========= Actions =========
import { 
  GET_VARIABLES,
  setVariables,
  SAVE_EDIT,
  saved,
  DELETE_VARIABLE,
  deleted,
  CREATE_NEW
} from "../actions";


const config = {
  "host": "172.16.84.84",
  "isSecure": true,
  appname: 'db8433fa-55bd-4420-9bb3-03ca764f5511'
};

// connect session
const session$ = connectSession(config).pipe(
  shareReplay(1)
);

// open doc
const doc$ = session$.pipe(
  switchMap(h => openDoc(h, config.appname)),
  shareReplay(1)
);


// Get Variables Epic
function getVariablesEpic(action$) {
  return action$.ofType(GET_VARIABLES)
    .switchMap(() => doc$.pipe(
      switchMap(h => createSessionObject(h, {
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
      })),
      shareReplay(1),
      switchMap(h => h.invalidated$.pipe(
        startWith(h)
      )),
      switchMap(h => getLayout(h))
    ))
    .map(layout => setVariables(layout.qVariableList.qItems))
}


// Create New Epic
// function createNewEpic(action$) {
//   return action$.ofType(CREATE_NEW)
//     .switchMap(() )
// }


// Save Edit Epic
function saveEditEpic(action$) {
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
    // .map(() => saved());
    .switchMap(() => Observable.of(saved()));
}


// Delete Variable Epic
function deleteVariableEpic(action$) {
  return action$.ofType(DELETE_VARIABLE)
    .switchMap((action) => doc$.pipe(
      switchMap(h => destroyVariableById(h, action.payload))
    ))
    .switchMap(() => Observable.of(deleted()));
}

export const rootEpic = combineEpics(
  getVariablesEpic,
  saveEditEpic,
  deleteVariableEpic
);