import React, { Component } from 'react'
import QuizItem from './QuizItem'
import CorrectedUser from './CorrectedUser'
import ShowWinner from './ShowWinner'

const styles = {
  'marginTop': '30px',
  // 'color': '#333'
}

const showWinnerButton = {
  'margin': '6px'
}

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      number: 0,
      show: false,
      totals: false
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
  
  showTotals() {
    this.setState((state) => {
      return {
        totals: !state.totals
      }
    })
  }

  nextQuestion() {
    if (this.state.number >= 0 && this.state.number < this.state.questions.length - 1) {
      this.setState((state) => {
        return {
          number: state.number + 1,
          show: false
        }
      })
    }
  }

  prevQuestion() {
    if (this.state.number !== 0 && this.state.number < this.state.questions.length) {
      this.setState((state) => {
        return {
          number: state.number - 1,
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
    let winnerButton, prevButton, nextButton, showResults = null
    const { number, questions, totals } = this.state

    if (number === questions.length - 1) {
      winnerButton = <button style={showWinnerButton} className="button is-info is-pulled-right" onClick={() => this.showTotals()}>Totals</button>
    }
    prevButton = <button className="button is-outlined is-primary" onClick={() => this.prevQuestion()}>Prev</button>
    nextButton = <button className="button is-outlined is-primary" onClick={() => this.nextQuestion()}>Next</button>
    showResults = <button className="button is-outlined is-info" onClick={() => this.showResults()}>Results</button>

    if (!totals) {
      return (
        <div className="container animated fadeIn" style={styles}>
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <div className="card">
                <header className="card-header">
                  <p className="card-header-title">Question {this.state.number + 1}</p>
                  {winnerButton}
                </header>
                <div className="card-content">
                  {
                    this.state.questions.map((question, index) => {
                      if (index === number) {
                        return <QuizItem key={index} question={question} show={this.state.show} index={this.state.number} />
                      }
                      return null
                    })
                  }
                </div>
                
                <div className="columns is-mobile has-text-centered">
                  <div className="column is-4">{prevButton}</div>
                  <div className="column is-4">{showResults}</div>
                  <div className="column is-4">{nextButton}</div>
                </div>

                {
                  this.state.show ? <CorrectedUser users={this.state.questions[this.state.number].correctedUsers} /> : null
                }
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <ShowWinner />
      )
    }
    
  }
}

export default Quiz
