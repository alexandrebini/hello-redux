import * as ActionTypes from '../constants/ActionTypes';

let defaultState = {
  lessons: []
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.RECEIVE_LESSONS:
      return {...state, lessons: action.lessons};
    default:
      return state;
  }
}
