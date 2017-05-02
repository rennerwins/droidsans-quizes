import React, { Component } from 'react'
import QuizItem from './QuizItem'
import CorrectedUser from './CorrectedUser'
import ShowWinner from './ShowWinner'
import { Link, Redirect } from 'react-router-dom'

const styles = {
  'marginTop': '20px',
  'color': '#333'
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

    fetch('https://dsmbot.herokuapp.com/activateQ?qnumber=1')
    .then(res => res.json())
    .then(res => {
      console.log('first quiz', res)
    })
  }
  
  showTotals() {
    this.setState((state) => {
      return {
        totals: !state.totals
      }
    })
    fetch('https://dsmbot.herokuapp.com/endQuizNow')
    .then(res => res.json())
    .then(res => {
      console.log('quiz ended', res)
    }) 
  }

  nextQuestion() {
    if (this.state.number ===  this.state.questions.length - 1) {
      this.showTotals()
    } else if (this.state.number >= 0 && this.state.number < this.state.questions.length - 1) {
      this.setState((state) => {
        return {
          number: state.number + 1,
          show: false
        }
      })
      fetch(`https://dsmbot.herokuapp.com/activateQ?qnumber=${this.state.number+2}`)
      .then(res => res.json())
      .then(res => {
        console.log(`question number ${this.state.number + 1}`, res)
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

  testKeyDown(e) {
    console.log('hi')
  }
  
  render() {
    let winnerButton, prevButton, nextButton = null
    let { number, questions, totals } = this.state

    // if (number == questions.length) {
      
    //   // winnerButton = <Link to="/winners" style={showWinnerButton} className="button is-info is-pulled-right" onClick={() => this.showTotals()}>Totals</Link>
    //   return <Redirect to="/winners" />
    // }

    if (!totals) {
      return (
        <div className="container animated fadeIn" style={styles} onClick={() => this.nextQuestion()}>
          <div className="bg-container">
            <div className="columns is-mobile">
              <img className="gim-left" src="static/gim-left.png" alt="gim-left" />
                <div className="column main-column">
                  <div className="content">
                    {
                      this.state.questions.map((question, index) => {
                        if (index === number) {
                          return <QuizItem key={index} question={question} show={this.state.show} index={this.state.number} />
                        }
                        return null
                      })
                    }
                </div>          
                <img className="gail-right" src="static/gail-right.png" alt="gail-right" />
              </div>
            </div>
          </div>
        </div>
      )
    }

    return null
  }
}

export default Quiz

// this.state.show ? <CorrectedUser users={this.state.questions[this.state.number].correctedUsers} /> : null


  // <div className= "column is-half is-offset-one-quarter">
  //   <div className="card">
  //     <header className="card-header">
  //       <p className="card-header-title">Question {this.state.number + 1}</p>
  //       {winnerButton}
  //     </header>
  //     <div className="card-content">
        // {
        //   this.state.questions.map((question, index) => {
        //     if (index === number) {
        //       return <QuizItem key={index} question={question} show={this.state.show} index={this.state.number} />
        //     }
        //     return null
        //   })
        // }
  //     </div>

      // <div className="columns is-mobile has-text-centered">
      //   <div className="column is-4">{prevButton}</div>
      //   <div className="column is-4">{showResults}</div>
      //   <div className="column is-4">{nextButton}</div>
      // </div>
  //   </div>
  // </div>