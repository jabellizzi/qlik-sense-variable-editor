import React from 'react';

export function VariableRow({
  variable,
  appState
}) {
  let input;

  return (
    <tr className={ variable.editing ? "editing" : "" }>
      {/* Variable Name */}
      <td>{ variable.name }</td>

      {/* Variable Definition */}
      { variable.editing ? 
        <td>
          <div className="edit-container">
            <div className="edit-wrapper">
              <input
                type="text"
                ref={ node => { input = node; } }
                defaultValue={ variable.definition }
              />
            </div>
            <button
              type="button" 
              className="btn btn-default btn-sm"
              onClick={ () => appState.saveEdit({ id: variable.id, value: input.value }) }
            ><span className="glyphicon glyphicon-floppy-save"></span>
            </button>
            <button 
              type="button" 
              className="btn btn-default btn-sm"
              onClick={ () => appState.cancelEdit(variable.id) }
            ><span className="glyphicon glyphicon-remove-circle"></span>
            </button>
          </div>
        </td>
        : <td>{ variable.definition }</td>
      }

      {/* Variable Tags */}
      <td>
        Tags
      </td>

      {/* Edit Button */}
      <td className="button-container">
        <button
          type="button"
          className={ "btn btn-default btn-sm " +(appState.editing ? "disabled" : "") }
          onClick={ () => appState.editing ? null : appState.editVariable(variable.id) }
        ><span className="glyphicon glyphicon-pencil"></span>
        </button>
      </td>

      {/* Delete Button */}
      <td className="button-container">
        <button 
          type="button" 
          className="btn btn-default btn-sm"
          onClick={ () => appState.deleteVariable(variable.id) }
        ><span className="glyphicon glyphicon-trash"></span>
        </button>
      </td>
    </tr>
  )
}