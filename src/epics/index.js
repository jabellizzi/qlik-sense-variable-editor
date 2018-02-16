// ========= RxJS =========
import {
  shareReplay,
  switchMap,
  startWith
} from 'rxjs/operators';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/ignoreElements';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

// ========= RxQ =========
import { connectSession } from 'rxq/connect';
import { openDoc } from 'rxq/Global';
import { 
  createSessionObject,
  getVariableById
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
  saved
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
    .map(() => saved())
}

export const rootEpic = combineEpics(
  getVariablesEpic,
  saveEditEpic
);