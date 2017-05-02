import React, { Component } from 'react'
import { firebaseApp } from '../../firebase'

class AddQuiz extends Component {
  constructor() {
    super()

    this.state = {
      amount: 1,
      questions: [],
      answers: [],
      language: "th"
    }
  }

  handleInput(e) {
    this.setState({
      amount: e.target.value
    })
  }
  
  handleQuestion(e) {
  }

  render() {
    const lists = []
    for (var i = 0; i < this.state.amount; i++) {
      lists.push(
        <div className="field" key={i}>
          <form>
            <label htmlFor="" className="label">Question {i+1}</label>
            <p className="control">
              <input className="input" onChange={(e) => this.handleQuestion(e)} value={this.state.questions[i]} type="text" /><br />
            </p>
            <br />
          </form>
        </div>
      )
    }

    return (
      <div className="container" style={{marginTop: '20px'}}>
        <div className="columns is-multiline">
          <div className="column is-half is-offset-one-quarter">
            <form>
              <label className="label">Number of quizes</label>
              <p className="control">
                <input className="input" type="number" value={this.state.amount} onChange={(e) => this.handleInput(e)} />
              </p>
            </form>
            <br/>

            {lists}
          </div>
        </div>
        <br/>

        
      </div>
    )
  }
}

export default AddQuiz