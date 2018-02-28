// ========== React ==========
import React, { Component } from 'react';
import { connect } from 'react-redux';

// import {
//   getVariables,
//   createVariable,
//   editVariable,
//   saveEdit,
//   cancelEdit,
//   deleteVariable
// } from './actions/index';
// import {
//   openApp
// } from './ducks/OpenAppDuck/actions';

// import { VariableTable } from './components/VariableTable';

import OpenAppButton from './ducks/OpenAppDuck/Component';

import './App.css';


class App extends Component {
  // Render
  render() {
    return (
      <div>
        <OpenAppButton appId='db8433fa-55bd-4420-9bb3-03ca764f5511' />
      </div>
      // <VariableTable appState={ this.props }/>
    );
  }
}

export default App;

// export default connect(
//   state => state, // state
//   { // dispatch
//     // getVariables,
//     // createVariable,
//     // editVariable,
//     // saveEdit,
//     // cancelEdit,
//     // deleteVariable
//     openApp
//   }
// )(App);