import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import OpenDocButton from '../OpenAppDuck/OpenDocButton';


/* =========================
    React Class
========================= */
class SessionWrapper extends Component {
  componentDidMount() {
    this.props.createSession(this.props.config);
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
  createSession: actions.createSession
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionWrapper);