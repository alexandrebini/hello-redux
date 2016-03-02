import {OPEN_LESSON} from '../constants/ActionTypes';

// export function receiveLessons(lessons) {
//   return {
//     type: OPEN_LESSON,
//     lessons: lessons
//   }
// }

export function openLesson(lesson) {
  return dispatch => {
    console.log('open lesson', lesson)
  }
}
