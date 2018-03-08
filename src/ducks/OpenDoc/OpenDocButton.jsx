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
        onClick={ () => this.props.openDoc('db8433fa-55bd-4420-9bb3-03ca764f5511') }
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
