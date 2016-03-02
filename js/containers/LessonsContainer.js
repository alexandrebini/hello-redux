import React, {Component} from 'react';
import LessonList from '../components/LessonList';
import Lesson from '../components/Lesson'
import {connect} from 'react-redux';
import * as LessonActions from '../actions/LessonActions';
import {bindActionCreators} from 'redux';

class LessonsContainer extends Component {
  render() {
    const {lessons, dispatch} = this.props;
    const actions = bindActionCreators(LessonActions, dispatch);

    return (
      <LessonList>
        {lessons.map(lesson =>
          <Lesson
            key={lesson.id}
            lesson={lesson}
            onClicked={() => actions.openLesson(lesson)}
          />
        )}
      </LessonList>
    )
  }
}

export default connect(state => state.Lessons)(LessonsContainer)
