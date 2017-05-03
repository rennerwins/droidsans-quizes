import React from 'react'

const cardStyles = {
  'borderRadius': '3px',
  'margin': '4px',
  'whiteSpace': 'pre-line',
  'color': '#586AC6',
  'fontSize': '30px'
}

const questions = {
  'whiteSpace': 'pre-line',
  'color': '#726658',
  'marginBottom': '20px',
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
      <h2 style={questions}>{index + 1}. {question.question}</h2>
      <br />

      {choices}
    </div>
  )
}


export default QuizItem
