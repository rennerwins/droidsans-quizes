import React, { Component } from 'react'
import QuizList from './QuizList'

const styles = {
  'marginTop': '30px',
  'color': '#333'
}

class Quiz extends Component {
  render() {
    return (
      <div className="container animated fadeIn">
        <div className="columns" style={styles}>
          <div className="column is-half is-offset-one-quarter">
            <QuizList />
          </div>
        </div>
      </div>
    )
  }
}

export default Quiz
