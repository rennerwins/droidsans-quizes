import React, { Component } from 'react'

const styles = {
  'color': 'red'
}

class QuizItem extends Component {
  render() {
    let choices = (
      this.props.question.choices.map((choice, index) => {
        // return <li key={choice}>{choice}</li>
        if (choice === this.props.question.answer && this.props.show) {
          return <li key={choice} style={styles}>{choice}</li>
        } else {
          return <li key={choice}>{choice}</li>
        }
      })
    )

    return (
      <div>
        <h1>{this.props.question.question}</h1>
        <ul>
          {choices}
        </ul>
      </div>
    )
  }
}

export default QuizItem