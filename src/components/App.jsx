import React, { Component } from 'react'
import Quiz from './quiz/Quiz'
import ParticipantList from './ParticipantList'
import Hero from './Hero'
import ShowWinner from './quiz/ShowWinner'
import { BrowserRouter as Router, Route } from 'react-router-dom' 

class App extends Component {
  render() {
    return (
      <Router>
        <div className="hero is-info is-fullheight is-bold">
          <Route exact path="/" render={() => 
            <Hero
              title="Untitle"
              buttonText="Get Started"/>
          } />

          <Route path="/participants" component={ParticipantList} />

          <Route path="/quiz" component={Quiz} />
          <Route path="/winners" component={ShowWinner} />
        </div>
      </Router>
    )
  }
}

export default App;