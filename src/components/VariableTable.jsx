import React from 'react';
import { VariableRow } from './VariableRow';
import { CreateNewRow } from './CreateNewRow';

export function VariableTable({ appState }) {
  return (
    <div className="variable-table">
      <button type="button" className="btn btn-primary" onClick={ appState.getVariables }>Get Variables</button>

      <table className="table table-hover">
        {/* Head */}
        <thead>
          <tr>
            <th>Variable</th>
            <th>Definition</th>
            <th>Tags</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {/* Create New Row */}
          { appState.appConnected && <CreateNewRow /> }

          { appState.variables.map(variable => (
            <VariableRow
              key={ variable.id }
              variable={ variable }
              appState={ appState }
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}