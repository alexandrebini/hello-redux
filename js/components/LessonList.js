import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import * as HomeActions from '../actions/HomeActions';
import Lesson from './Lesson'

class LessonList extends Component {
  render() {
    const {children} = this.props;
    // const {title, dispatch} = this.props;
    // const actions = bindActionCreators(HomeActions, dispatch);
    return (
        <ul>{children}</ul>
    );
  }
}

LessonList.propTypes = {
  children: PropTypes.node
}

export default LessonList
