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
    const lists = []
    for (var i = 0; i < this.state.amount; i++) {
      lists.push(
        <div key={i}>
          <input type="text" /><br />
          - <input type="text" /><br />
          - <input type="text" /><br />
          - <input type="text" /><br />
          <br />
        </div>
      )
    }


    return (
      <div>
        <form>
          <label htmlFor="">Number of quizes</label>
          <input type="number" value={this.state.amount} onChange={(e) => this.handleInput(e)} />
        </form>
        <br/>

        {lists}
      </div>
    )
  }
}

export default AddQuiz