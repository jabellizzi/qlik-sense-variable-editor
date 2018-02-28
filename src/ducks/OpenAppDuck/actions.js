import * as types from './types';

const openApp = (appId) => ({
  type: types.OPEN_APP
});

const storeAppHandle = (handle) => ({
  type: types.STORE_APP_HANDLE,
  payload: handle
})

export {
  openApp,
  storeAppHandle
}