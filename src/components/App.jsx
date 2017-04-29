import React, { Component } from 'react'
import Quiz from './quiz/Quiz'
import Hero from './Hero'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isStarted: false }
  }
  
  getStarted() {
    this.setState((state) => {
      return { isStarted: !state.isStarted }
    })
  }
  
  render() {
    return (
      <div className="hero is-info is-fullheight is-bold">
        {
          this.state.isStarted ? 
            <Quiz /> : 
            <Hero 
              title="Untitle"
              buttonText="Get Started"
              getStarted={this.getStarted.bind(this)} />
        }
      </div>
    )
  }
}

export default App;
