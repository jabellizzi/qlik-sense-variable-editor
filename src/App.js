// ========== React ==========
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { 
  getVariables,
  editVariable,
  saveEdit,
  cancelEdit
} from './actions/index';

import { VariableTable } from './components/VariableTable';

import './App.css';


class App extends Component {
  handleEditVariable = (variableId) => {
    this.props.editVariable(variableId);
  };

  handelCancelEdit = (variableId) => {
    this.props.cancelEdit(variableId);
  }

  // Render
  render() {
    return (
      <VariableTable 
        variables={ this.props.variables }
        getVariables={ this.props.getVariables }
        editVariable={ this.handleEditVariable }
        editing={ this.props.editing }
        saveEdit={ this.props.saveEdit }
        cancelEdit={ this.handelCancelEdit }
      />
    );
  }
}

export default connect(
  state => state, // state
  { // dispatch
    getVariables, 
    editVariable,
    saveEdit,
    cancelEdit
  }
)(App);