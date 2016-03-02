import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import * as HomeActions from '../actions/HomeActions';

class Lesson extends Component {
  render() {
    const {title} = this.props;
    // const {title, dispatch} = this.props;
    // const actions = bindActionCreators(HomeActions, dispatch);
    return (
        <h3>{title}</h3>
    );
  }
}

export default Lesson
