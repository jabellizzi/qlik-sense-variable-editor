import React from 'react';
import { VariableRow } from './VariableRow';

export function VariableTable({ 
  appState,
  variables, 
  getVariables,
  createNew,
  editVariable,
  editing,
  saveEdit,
  cancelEdit,
  deleteVariable
}) {
  return (
    <div className="variable-table">
      <button type="button" className="btn btn-primary" onClick={ getVariables }>Get Variables</button>

      <table className="table table-hover">
        <thead>
          <tr>
            <th>Variable</th>
            <th>Definition</th>
            <th>Tags</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* Create New Row */}
          { appState.appConnected && <tr className="create-new-row">
            {/* Name */}
            <td>
              <input type="text" placeholder="Name" />
            </td>

            {/* Definition */}
            <td>
              <div className="definition-edit-container">
                <input type="text" placeholder="Definition" />
                <button
                  type="button"
                  className="btn btn-default btn-sm"
                ><span className="glyphicon glyphicon-pencil"></span></button>
              </div>
            </td>

            {/* Tags */}
            <td>
              <input type="text" placeholder="Tags" />
            </td>

            {/* Create Button */}
            <td>
              <button
                type="button"
                className="btn btn-default btn-sm"
              ><span className="glyphicon glyphicon-plus"></span>
              </button>
            </td>

            {/* Clear Button */}
            <td>
              <button
                type="button"
                className="btn btn-default btn-sm"
              ><span className="glyphicon glyphicon-remove-sign"></span></button>
            </td>
          </tr> }

          { variables.map(variable => (
            <VariableRow
              key={ variable.id }
              variable={ variable }
              editVariable={ editVariable }
              editing={ editing }
              saveEdit={ saveEdit }
              cancelEdit={ cancelEdit }
              deleteVariable={ deleteVariable }
            />
          ))}
        </tbody>
      </table>

      { false && <div className="modal-background"></div> }
      { false && <div className="create-new-modal">
        <div className="control-panel"></div>
        <div className="variable-form">

          <div className="label">Variable Name:</div>
          <input type="text" />

          <div className="label">Definition:</div>
          <div className="editor-container">
            <div className="textarea-wrapper">
              <textarea 
                className="definition-textarea" 
                type="text" 
                rows="3" 
                maxLength="8192"></textarea>
            </div>
            <button className="edit-expression-button">
              <span className="glyphicon glyphicon-pencil"></span>
            </button>
          </div>

          <div className="label">Description:</div>
          <textarea 
            type="text"
            className="description-textarea"
            maxLength="512"
          ></textarea>

          <div className="label">Tags:</div>
          <input type="text" />
        </div>
      </div> }
    </div>
  )
}