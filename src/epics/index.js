import { combineEpics } from "redux-observable";


import getVariablesEpic from './getVariablesEpic';
import saveEditEpic from './saveEditEpic';
import deleteVariableEpic from './deleteVariableEpic';


export const rootEpic = combineEpics(
  getVariablesEpic,
  saveEditEpic,
  deleteVariableEpic
);