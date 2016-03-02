import React, {Component} from 'react';
import LessonList from '../components/LessonList';
import Lesson from '../components/Lesson'
import {connect} from 'react-redux';

class LessonsContainer extends Component {
  render() {
    console.log('render', this.props)
    const { lessons } = this.props
    return (
      <LessonList>
        {lessons.map(lesson =>
          <Lesson
            key={lesson.id}
            {...lesson}
          />
        )}
      </LessonList>
    )
  }
}

export default connect(state => state.Lessons)(LessonsContainer)
