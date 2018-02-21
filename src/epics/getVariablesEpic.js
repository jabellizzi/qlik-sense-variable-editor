// ========= RxJS =========
import { 
  switchMap,
  shareReplay,
  startWith
} from 'rxjs/operators';


// ========= RxQ =========
import { createSessionObject } from 'rxq/Doc';
import { getLayout } from 'rxq/GenericObject';


// ========= Actions =========
import { 
  GET_VARIABLES,
  setVariables
} from "../actions";

import { doc$ } from './openDoc';

export default function getVariablesEpic(action$) {
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