import React, { Component } from 'react'
import QuizItem from './QuizItem'
import CorrectedUser from './CorrectedUser'
import ShowWinner from './ShowWinner'

const showWinnerButton = {
  'margin': '6px'
}

class QuizList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      questions: [],
      index: 0,
      show: false,
      totals: false
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

  showTotals() {
    this.setState((state) => {
      return {
        totals: !state.totals
      }
    })
  }
  
  render() {
    let prevButton = <button className="button is-outlined is-primary" onClick={() => this.prevQuestion()}>Prev</button>
    let nextButton = <button className="button is-outlined is-primary" onClick={() => this.nextQuestion()}>Next</button>
    let showResults = <button className="button is-outlined is-info" onClick={() => this.showResults()}>Results</button>

    if (!this.state.totals) {
      return (
        <div>
          {
            this.state.questions.map((question, index) => {
              if (index === this.state.index) {
                return (
                  <div key={index} className="card">
                    <header className="card-header">
                      <p className="card-header-title">Question {index + 1}</p>
                      {
                        (this.state.index === (this.state.questions.length - 1)) ? <button style={showWinnerButton} className="button is-info is-pulled-right" onClick={() => this.showTotals()}>Totals</button> : null
                      }
                    </header>
                    <div className="card-content">
                      <QuizItem question={question} show={this.state.show}  />
                    </div>
                    <div className="columns is-mobile has-text-centered">
                      <div className="column is-4">{prevButton}</div>
                      <div className="column is-4">{showResults}</div>
                      <div className="column is-4">{nextButton}</div>
                    </div>
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
    } else {
      return (
        <ShowWinner />
      )
    }
  }
}

export default QuizList
