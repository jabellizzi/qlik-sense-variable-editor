import React from 'react';

export function VariableRow({
  variable,
  editVariable,
  editing,
  cancelEdit
}) {
  return (
    <tr className={ variable.editing ? "editing" : "" }>
      <td>{ variable.name }</td>
      { variable.editing ? 
        <td>
          <div className="edit-container">
            <div className="edit-wrapper">
              <input
                type="text"
                defaultValue={ variable.definition }
              />
            </div>
            <button type="button" className="btn btn-default btn-sm">
              <span className="glyphicon glyphicon-floppy-save"></span>
            </button>
            <button 
              type="button" 
              className="btn btn-default btn-sm"
              onClick={ () => cancelEdit(variable.id) }
            ><span className="glyphicon glyphicon-remove-circle"></span>
            </button>
          </div>
        </td>
        : <td>{ variable.definition }</td>
      }
      <td className="button-container">
        <button
          type="button"
          className={ "btn btn-default btn-sm " +(editing ? "disabled" : "") }
          onClick={ () => editing ? null : editVariable(variable.id) }
        ><span className="glyphicon glyphicon-pencil"></span>
        </button>
      </td>
      <td className="button-container">
        <button type="button" className="btn btn-default btn-sm">
          <span className="glyphicon glyphicon-trash"></span>
        </button>
      </td>
    </tr>
  )
}