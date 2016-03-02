import React, {Component} from 'react';
import Home from '../components/Home';
import LessonsContainer from './LessonsContainer'

class AppContainer extends Component {
  render() {
    return (
      <main>
        <Home/>
        <LessonsContainer/>
      </main>
    )
  }
}

export default AppContainer
