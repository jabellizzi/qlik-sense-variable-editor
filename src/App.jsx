/* ===========================
    Import
=========================== */
// ========== React ==========
import React, { Component } from 'react';

// Server Config
import serverConfig from './config/server.config.json';
// SessionWrapper component
import SessionWrapper from './ducks/SessionWrapper/SessionWrapper';
// CSS
import './App.css';


/* ===========================
    App Component
=========================== */
class App extends Component {
  // Render
  render() {
    return (
      <SessionWrapper config={ serverConfig } />
    );
  }
}

export default App;
