/* ===========================
    Import
=========================== */
// React
import React, { Component } from 'react';
import { connect } from 'react-redux';

// SessionWrapper actions
import * as actions from './actions';
// OpenDocButton Component
import OpenDocButton from '../OpenDoc/OpenDocButton';


/* =========================
    SessionWrapper Component
========================= */
class SessionWrapper extends Component {
  // when component did mount..
  componentDidMount() {
    // connect to session
    this.props.connectSession(this.props.config);
  }

  render() {
    return (
      <div>
        <OpenDocButton appId="db8433fa-55bd-4420-9bb3-03ca764f5511" />
      </div>
    )
  }
}

/* =========================
    Redux
========================= */
const mapStateToProps = state => state;

const mapDispatchToProps = {
  connectSession: actions.connectSession
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionWrapper);
