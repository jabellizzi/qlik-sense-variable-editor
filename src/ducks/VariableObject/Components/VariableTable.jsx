/* ===========================
    Import
=========================== */
// React
import React, { Component } from 'react';
import { connect } from 'react-redux';

// VariableObject Actions
import * as actions from '../actions';
// Components
import CreateNewRow from './CreateNewRow';
import VariableRow from './VariableRow';

// CSS
import './css/VariableTable.css';

/* ===========================
    VariableTable Component
=========================== */
class VariableTable extends Component {
  // When component mounts..
  componentDidMount() {
    // Get doc variables
    this.props.getVariables();
  }
  render() {
    return (
      <div>
        <table className="variable-table table table-hover">
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
            <CreateNewRow />

            { this.props.variableObjectState.variableList.map(variable => (
              <VariableRow
                key={ variable.id }
                variable={ variable }
                editVariable={ this.props.editVariable }
                deleteVariable={ this.props.deleteVariable }
              />
            )) }
          </tbody>
        </table>
      </div>
    )
  }
}


/* ===========================
    Redux
=========================== */
const mapStateToProps = state => state;

const mapDispatchToProps = {
  getVariables: actions.getVariables,
  editVariable: actions.editVariable,
  deleteVariable: actions.deleteVariable
};

export default connect(mapStateToProps, mapDispatchToProps)(VariableTable);
