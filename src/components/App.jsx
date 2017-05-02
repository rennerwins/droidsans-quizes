import React, { Component } from 'react'
import Hero from './Hero'
import Layout from './Layout'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom' 

class App extends Component {
  render() {
    return (
      <Router>
        <div className="hero is-fullheight background">
          <Route exact path="/" component={Hero} />
          <Route path="/participants" component={Layout} />
          <Route path="/quiz" component={Layout} />
          <Route path="/winners" component={Layout} />
          <Route path="/add" component={Layout} /> 
        </div>
      </Router>
    )
  }
}

export default App;
