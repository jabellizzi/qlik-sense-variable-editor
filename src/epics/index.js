import { combineEpics } from "redux-observable";


import getVariablesEpic from './getVariablesEpic';
import saveEditEpic from './saveEditEpic';
import deleteVariableEpic from './deleteVariableEpic';
import createVariableEpic from './createVariableEpic';


export const rootEpic = combineEpics(
  getVariablesEpic,
  saveEditEpic,
  deleteVariableEpic,
  createVariableEpic
);