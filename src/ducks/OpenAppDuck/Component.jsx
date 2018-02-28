import React, { Component } from 'react';

import { connect } from 'react-redux';

import { openApp } from './actions';


class OpenAppButton extends Component {
  render() {
    return (
      <button 
        type="button" 
        className="btn btn-primary" 
        onClick={ () => {console.log('open'); return this.props.openApp('db8433fa-55bd-4420-9bb3-03ca764f5511')} }
      >Open App
      </button>
    )
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = {
  openApp
};

export default connect(mapStateToProps, mapDispatchToProps)(OpenAppButton);
