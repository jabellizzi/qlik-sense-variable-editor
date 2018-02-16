// ========== React ==========
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { 
  getVariables,
  editVariable,
  saveEdit,
  cancelEdit,
  deleteVariable
} from './actions/index';

import { VariableTable } from './components/VariableTable';

import './App.css';


class App extends Component {
  handleEditVariable = (variableId) => {
    this.props.editVariable(variableId);
  };

  handleCancelEdit = (variableId) => {
    this.props.cancelEdit(variableId);
  }

  handleDeleteVariable = (variableId) => {
    this.props.deleteVariable(variableId);
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
        cancelEdit={ this.handleCancelEdit }
        deleteVariable={ this.handleDeleteVariable }
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
    cancelEdit,
    deleteVariable
  }
)(App);