// ========== React ==========
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { 
  getVariables,
  createVariable,
  editVariable,
  saveEdit,
  cancelEdit,
  deleteVariable
} from './actions/index';

import { VariableTable } from './components/VariableTable';

import './App.css';


class App extends Component {
  // Render
  render() {
    return (
      <VariableTable appState={ this.props }/>
    );
  }
}

export default connect(
  state => state, // state
  { // dispatch
    getVariables,
    createVariable,
    editVariable,
    saveEdit,
    cancelEdit,
    deleteVariable
  }
)(App);