import React from 'react';
import { VariableRow } from './VariableRow';

export function VariableTable({ 
  variables, 
  getVariables,
  editVariable,
  editing,
  cancelEdit
}) {
  return (
    <div className="variable-table">
      <button type="button" className="btn btn-primary" onClick={ getVariables }>Get Variables</button>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Variable</th>
            <th>Definition</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { variables.map(variable => (
            <VariableRow
              key={ variable.id }
              variable={ variable }
              editVariable={ editVariable }
              editing={ editing }
              cancelEdit={ cancelEdit }
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}