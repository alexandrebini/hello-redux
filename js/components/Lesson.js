import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import * as HomeActions from '../actions/HomeActions';

class Lesson extends Component {
  render() {
    const {lesson} = this.props;
    // const {title, dispatch} = this.props;
    // const actions = bindActionCreators(HomeActions, dispatch);
    return (
      <h3>
        <a onClick={this.props.onClicked}>
          {lesson.title}
        </a>
      </h3>
    );
  }
}

Lesson.propTypes = {
  lesson: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  onClicked: PropTypes.func.isRequired
}

export default Lesson
