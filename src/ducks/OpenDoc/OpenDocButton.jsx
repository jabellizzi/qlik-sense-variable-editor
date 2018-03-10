/* ===========================
    Import
=========================== */
// React
import React, { Component } from 'react';
import { connect } from 'react-redux';

// OpenDoc actions
import { openDoc } from './actions';

// CSS
import './OpenDoc.css';


/* ===========================
    OpenDocButton Component
=========================== */
class OpenDocButton extends Component {
  render() {
    return (
      <button 
        type="button" 
        className="btn btn-primary open-doc-button" 
        onClick={ () => this.props.openDoc(this.props.appId) }
      >Open App
      </button>
    )
  }
}


/* ===========================
    Redux
=========================== */
const mapStateToProps = (state) => state;

const mapDispatchToProps = {
  openDoc
};

export default connect(mapStateToProps, mapDispatchToProps)(OpenDocButton);
