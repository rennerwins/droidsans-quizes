import React, { Component } from 'react'
import QuizItem from './QuizItem'
import { Redirect } from 'react-router-dom'

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
      console.log('question number 1', res)
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
  
  render() {
    let { number, totals } = this.state
    return (
      !totals ? 
        (
          <div className="column is-half is-offset-one-quarter main-column" onClick={this.nextQuestion.bind(this)}>
            <div className="content has-text-centered">
              {
                this.state.questions.map((question, index) => {
                  if (index === number) {
                    return <QuizItem key={index} question={question} show={this.state.show} index={this.state.number} />
                  }
                  return null
                })
              }
            </div>          
          </div>
        ) : <Redirect to="/winners" />
    )
  }
}

export default Quiz
