// ========= RxJS =========
import {
  shareReplay,
  switchMap
} from 'rxjs/operators';

// ========= RxQ =========
import { connectSession } from 'rxq/connect';
import { openDoc } from 'rxq/Global';


const config = {
  host: "172.16.84.84",
  isSecure: true,
  appname: 'db8433fa-55bd-4420-9bb3-03ca764f5511'
};

const session$ = connectSession(config).pipe(
  shareReplay(1)
);

// open doc
export const doc$ = session$.pipe(
  switchMap(h => openDoc(h, config.appname)),
  shareReplay(1)
);