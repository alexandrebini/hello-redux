import api from '../api/index'
import {RECEIVE_LESSONS} from '../constants/ActionTypes';

export function receiveLessons(lessons) {
  return {
    type: RECEIVE_LESSONS,
    lessons: lessons
  }
}

export function getAllLessons() {
  return dispatch => {
    api.getLessons(lessons => {
      dispatch(receiveLessons(lessons))
    })
  }
}
