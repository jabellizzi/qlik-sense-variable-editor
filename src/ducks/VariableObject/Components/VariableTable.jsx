/* ===========================
    Import
=========================== */
// React
import React, { Component } from 'react';
import { connect } from 'react-redux';

// VariableObject Actions
import * as actions from '../actions';
// CreateNewRow Component
import CreateNewRow from './CreateNewRow';

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
    console.log(this.props);
    return (
      <div>
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
            <CreateNewRow />
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
  getVariables: actions.getVariables
};

export default connect(mapStateToProps, mapDispatchToProps)(VariableTable);
