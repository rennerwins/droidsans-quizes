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
  componentWillMount() {
    fetch('https://dsmbot.herokuapp.com/getAllQuestions')
    .then(res => res.json())
    .then(res => {
      this.setState({
        questions: res.questions
      })
    })
  }

  nextQuestion() {
    if (this.state.index >= 0 && this.state.index < this.state.questions.length - 1) {
      this.setState((state) => {
        return {
          index: state.index + 1,
          show: false
        }
      })
    }
  }

  prevQuestion() {
    if (this.state.index !== 0 && this.state.index < this.state.questions.length) {
      this.setState((state) => {
        return {
          index: state.index - 1,
          show: false
        }
      })
    }
  }

  showResults() {
    this.setState((state) => {
      return {
        show: !state.show
      }
    })
  }
  
  render() {
    let prevButton = <a className="card-footer-item" onClick={() => this.prevQuestion()}>Prev</a>
    let nextButton = <a className="card-footer-item" onClick={() => this.nextQuestion()}>Next</a>
    let showResults = <a className="card-footer-item" onClick={() => this.showResults()}>Results</a>

    return (
      <div>
        {
          this.state.questions.map((question, index) => {
            if (index === this.state.index) {
              return (
                <div key={index} className="card">
                  <header className="card-header">
                    <p className="card-header-title">Question {index + 1}</p>
                  </header>
                  <div className="card-content">
                    <QuizItem question={question} show={this.state.show}  />
                  </div>
                  
                  <footer className="card-footer">
                    {prevButton}
                    {showResults}
                    {nextButton}
                  </footer>
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
