import React from 'react'

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

const QuizItem = ({ question, show }) => {
  let choices = (
    question.choices.map(choice => {
      if (choice === question.answer && show) {
        return <div className="card" key={choice} style={correctedStyle}>{choice}</div>
      } else {
        return <div className="card" style={cardStyles} key={choice}>{choice}</div>
      }
    })
  )
  
  return (
    <div className="content">
      <h1>{question.question}</h1>
      {choices}
    </div>
  )
}


export default QuizItem
