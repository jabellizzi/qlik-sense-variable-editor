import React from 'react';

export function VariableRow({
  variable,
  editVariable,
  editing,
  saveEdit,
  cancelEdit,
  deleteVariable
}) {
  let input;

  return (
    <tr className={ variable.editing ? "editing" : "" }>
      <td>{ variable.name }</td>
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
              onClick={ () => saveEdit({ id: variable.id, value: input.value }) }
            ><span className="glyphicon glyphicon-floppy-save"></span>
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
        <button 
          type="button" 
          className="btn btn-default btn-sm"
          onClick={ () => deleteVariable(variable.id) }
        ><span className="glyphicon glyphicon-trash"></span>
        </button>
      </td>
    </tr>
  )
}