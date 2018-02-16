// ========== React ==========
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { 
  getVariables,
  editVariable
} from './actions/index';

import { VariableTable } from './components/VariableTable';

import './App.css';


class App extends Component {
  handleEditVariable = () => {
    this.props.editVariable();
  };

  // Render
  render() {
    return (
      <VariableTable 
        variables={ this.props.variables }
        getVariables={ this.props.getVariables }
        editVariable={ this.handleEditVariable }
        editing={ this.props.editing }
      />
    );
  }
}

export default connect(
  state => state, // state
  { // dispatch
    getVariables, 
    editVariable 
  }
)(App);