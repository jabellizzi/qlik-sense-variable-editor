/* ===========================
    Import
=========================== */
import * as types from './types';


/* ===========================
    Actions
=========================== */
// Open doc using appId payload
const openDoc = (appId) => ({
  type: types.OPEN_DOC,
  payload: appId
});

/* Doc has been opened
    pass doc name as payload */
const docOpened = (name) => ({
  type: types.DOC_OPENED,
  payload: name
});

export {
  openDoc,
  docOpened
};
