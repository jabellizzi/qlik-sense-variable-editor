import React from 'react';

export function CreateNewRow() {
  return (
    <tr className="create-new-row">
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
    </tr>
  )
}