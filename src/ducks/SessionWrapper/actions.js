import * as types from './types';

const createSession = config => ({
  type: types.CREATE_SESSION,
  payload: config
});

export {
  createSession
};