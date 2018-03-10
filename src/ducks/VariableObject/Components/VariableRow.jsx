import React from 'react';

import './css/VariableRow.css';

function VariableRow({
  variable,
  editVariable,
  deleteVariable
}) {
  let input;

  return (
    <tr className={ variable.editing ? "editing" : "" }>
      {/* Variable Name */}
      <td>{ variable.name }</td>

      {/* Variable Definition */}
      { variable.editing ?
        // Edit Mode
        <td>
          <div className="edit-container">
          
            {/* Input */}
            <div className="edit-wrapper">
              <input
                type="text"
                ref={ node => { input = node; } }
                defaultValue={ variable.definition }
              />
            </div>

            {/* Save button */}
            <button
              type="button"
              className="btn btn-default btn-sm"
              onClick={ () => console.log('save edit') }
            ><span className="glyphicon glyphicon-floppy-save"></span></button>

            {/* Cancel button */}
            <button
              type="button"
              className="btn btn-default btn-sm"
              onClick={ () => console.log('cancle edit') }
            ><span className="glyphicon glyphicon-remove-circle"></span></button>
          </div>
        </td>

        // Non-edit mode
        : <td>{ variable.definition }</td>
      }

      {/* Variable Tags */}
      <td>Tags</td>

      {/* Edit Button */}
      <td className="button-container">
        <button
          type="button"
          className="btn btn-default btn-sm"
          onClick={ () => editVariable(variable.id) }
        ><span className="glyphicon glyphicon-pencil"></span></button>
      </td>

      {/* Delete Button */}
      <td className="button-container">
        <button
          type="button"
          className="btn btn-default btn-sm"
          onClick={ () => deleteVariable(variable.id) }
        ><span className="glyphicon glyphicon-trash"></span></button>
      </td>
    </tr>
  )
}

export default VariableRow;
