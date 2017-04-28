import React, { Component } from 'react'
import QuizItem from './QuizItem'
import CorrectedUser from './CorrectedUser'

class QuizList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      questions: [],
      index: 0,
      show: false
    }
  }
  componentDidMount() {
    fetch('https://dsmbot.herokuapp.com/getAllQuestions')
    .then(res => res.json())
    .then(res => {
      this.setState({
        questions: res.questions
      })
    })
  }

  nextQuestion() {
    this.setState((state) => {
      return {
        index: ++state.index,
        show: false
      }
    })
  }

  prevQuestion() {
    this.setState((state) => {
      return {
        index: --state.index,
        show: false
      }
    })
  }

  showResults() {
    this.setState((state) => {
      return {
        show: !state.show
      }
    })
  }
  
  render() {
    let nextButton = null
    let prevButton = null

    if (this.state.index >= 0 && this.state.index < this.state.questions.length - 1) {
      nextButton = <button onClick={() => this.nextQuestion()}>Next</button>
    } 
    if (this.state.index !== 0 && this.state.index < this.state.questions.length) {
      prevButton = <button onClick={() => this.prevQuestion()}>Prev</button>
    }

    return (
      <div>
        <h1>Quiz List</h1>
        {prevButton}
        {nextButton}
        {
          this.state.questions.map((question, index) => {
            if (index === this.state.index) {
              return (
                <div key={index}>
                  <QuizItem question={question} show={this.state.show} />
                  <hr />
                  <button onClick={() => this.showResults()}>Results</button>
                  {
                    this.state.show ? <CorrectedUser user={question.correctedUsers} /> : null
                  }
                </div>
              )
            } else {
              return null
            }
          })
        }
      </div>
    )
  }
}

export default QuizList