import * as types from './types';

const openDoc = (appId) => ({
  type: types.OPEN_DOC,
  payload: appId
});

const storeAppName = (name) => ({
  type: types.STORE_APP_NAME,
  payload: name
});

export {
  openDoc,
  storeAppName
};
