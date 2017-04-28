import React, { Component } from 'react'
// import { firebaseApp } from '../../firebase'

class AddQuiz extends Component {
  constructor() {
    super()

    this.state = {
      amount: 0
    }
  }

  handleInput(e) {
    this.setState({
      amount: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="">Number of quizes</label>
          <input type="number" value={this.state.amount} onChange={(e) => this.handleInput(e)} />
        </form>

        { lists }
      </div>
    )
  }
}

export default AddQuiz