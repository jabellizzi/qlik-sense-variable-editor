/* ===========================
    Import
=========================== */
import * as types from './types';


/* ===========================
    Actions
=========================== */
// Connect session using server config payload
const connectSession = config => ({
  type: types.CONNECT_SESSION,
  payload: config
});

// Session has been connected
const sessionConnected = () => ({
  type: types.SESSION_CONNECTED
});

export {
  connectSession,
  sessionConnected
};
