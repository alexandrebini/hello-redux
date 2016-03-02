import React from 'react';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
// import LessonsContainer from './LessonsContainer';
import AppContainer from './AppContainer';
import {getAllLessons} from '../actions/LessonListActions'

const store = configureStore();
store.dispatch(getAllLessons())

export default React.createClass({
  render() {
    return (
      <div>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </div>
    );
  }
});
