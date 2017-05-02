import React from 'react'

const correctedStyle = {
  'padding': '12px',
  'backgroundColor': '#00D1B2',
  'color': 'white',
  'border': 'none',
  'margin': '8px',
  'borderRadius': '3px',
  'whiteSpace': 'pre-line'
}

const cardStyles = {
  'padding': '12px',
  'borderRadius': '3px',
  'margin': '4px',
  'whiteSpace': 'pre-line',
  'color': '#586AC6',
  'fontSize': '40px'
}

const questions = {
  'whiteSpace': 'pre-line',
  'color': '#726658',
  'marginTop': '20px'
}

const QuizItem = ({ question, show, index }) => {
  let choices = (
    question.choices.map(choice => { 
      return <div className="has-text-centered" style={cardStyles} key={choice}>{choice}</div>
    })
  )
  
  return (
    <div className="content">
      <h1 style={questions}>{index + 1}. {question.question}</h1>
      {choices}
    </div>
  )
}


export default QuizItem