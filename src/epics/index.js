// ========= RxJS =========
import {
  shareReplay,
  switchMap,
} from 'rxjs/operators';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/ignoreElements';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

// ========= RxQ =========
import { connectSession } from 'rxq/connect';
import { openDoc } from 'rxq/Global';
import { 
  createSessionObject
} from 'rxq/Doc';
import { getLayout } from 'rxq/GenericObject';

// ========= Redux Observable =========
import { combineEpics } from "redux-observable";

// ========= Actions =========
import { 
  GET_VARIABLES,
  setVariables
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
      switchMap(h => getLayout(h))
    ))
    .map(layout => setVariables(layout.qVariableList.qItems))
}

export const rootEpic = combineEpics(getVariablesEpic);