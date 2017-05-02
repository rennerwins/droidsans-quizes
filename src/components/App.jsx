import React, { Component } from 'react'
import Quiz from './quiz/Quiz'
import ParticipantList from './ParticipantList'
import Hero from './Hero'
import ShowWinner from './quiz/ShowWinner'
import AddQuiz from './quiz/AddQuiz'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom' 

class App extends Component {
  render() {
    return (
      <Router>
        <div className="hero is-fullheight background">
          <Route exact path="/" render={() => 
            <Hero
              title="Untitle"
              buttonText="Get Started"/>
          } />

          <Route path="/participants" component={ParticipantList} />

          <Route path="/quiz" component={Quiz} />
          <Route path="/winners" component={ShowWinner} />
          <Route path="/add" component={AddQuiz} /> 
        </div>
      </Router>
    )
  }
}

export default App;