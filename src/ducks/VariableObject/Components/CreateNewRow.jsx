/* ===========================
    Import
=========================== */
// React
import React, { Component } from 'react';
import { connect } from 'react-redux';

// VariableObject Actions
import { createVariable } from '../actions';

// CSS
import './css/CreateNewRow.css';


/* ===========================
    CreateNewRow Component
=========================== */
class CreateNewRow extends Component {
  render() {
    let nameInput, definitionInput;

    return (
      <tr className="create-new-row">
        {/* Name */}
        <td>
          <input 
            type="text"
            ref={ node => { nameInput = node; } }
            placeholder="Name"
          />
        </td>

        {/* Definition */}
        <td>
          <div className="definition-edit-container">
            <input 
              type="text"
              ref={ node => { definitionInput = node; } }
              placeholder="Definition"
            />
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
            onClick={ () => this.props.createVariable({
              qInfo: {
                qType: "variable"
              },
              qName: nameInput.value,
              qDefinition: definitionInput.value
            }) }
          ><span className="glyphicon glyphicon-plus"></span></button>
        </td>

        {/* Clear Button */}
        <td>
          <button
            type="button"
            className="btn btn-default btn-sm"
            onClick={ () => console.log('cancel') }
          ><span className="glyphicon glyphicon-remove-sign"></span></button>
        </td>
      </tr>
    )
  }
}


/* ===========================
    Redux
=========================== */
const mapStateToProps = state => state;

const mapDispatchToProps = {
  createVariable
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewRow);
