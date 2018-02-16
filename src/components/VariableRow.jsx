import React from 'react';

export function VariableRow({
  variable,
  editVariable,
  editing
}) {
  return (
    <tr key={ variable.qInfo.qId }>
      <td>{ variable.qName }</td>
      <td>{ variable.qDefinition }</td>
      <td className="button-container">
        <button
          type="button"
          className={ "btn btn-default btn-sm " +(editing ? "disabled" : "") }
          onClick={ () => editing ? null : editVariable() }
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