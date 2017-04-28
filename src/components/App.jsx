import React, { Component } from 'react'
import Quiz from './quiz/Quiz'
import AddQuiz from './quiz/AddQuiz'

class App extends Component {
  render() {
    return (
      <div>
        <AddQuiz />
        <hr/>
        <Quiz />
      </div>
    )
  }
}

export default App;
