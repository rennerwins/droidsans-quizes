import React, { Component } from 'react'

const correctedStyle = {
  'padding': '12px',
  'backgroundColor': '#00D1B2',
  'color': 'white',
  'border': 'none',
  'margin': '8px',
  'borderRadius': '3px',
}

const cardStyles = {
  'padding': '12px',
  'borderRadius': '3px',
  'margin': '8px'
}

class QuizItem extends Component {
  render() {
    let choices = (
      this.props.question.choices.map((choice, index) => {
        if (choice === this.props.question.answer && this.props.show) {
          return <div className="card" key={choice} style={correctedStyle}>{choice}</div>
        } else {
          return <div className="card" style={cardStyles} key={choice}>{choice}</div>
        }
      })
    )

    return (
      <div className="content">
        <h1>{this.props.question.question}</h1>
        {choices}
      </div>
    )
  }
}

export default QuizItem
