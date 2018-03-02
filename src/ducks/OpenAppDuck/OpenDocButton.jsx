import React, { Component } from 'react';

import { connect } from 'react-redux';

import { openDoc } from './actions';


class OpenDocButton extends Component {
  render() {
    return (
      <button 
        type="button" 
        className="btn btn-primary" 
        onClick={ () => this.props.openDoc('db8433fa-55bd-4420-9bb3-03ca764f5511') }
      >Open App
      </button>
    )
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = {
  openDoc
};

export default connect(mapStateToProps, mapDispatchToProps)(OpenDocButton);
