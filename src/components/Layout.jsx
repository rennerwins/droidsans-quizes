import React, { Component } from 'react'
import ParticipantList from './ParticipantList'
import Quiz from './quiz/Quiz'
import ShowWinner from './quiz/ShowWinner'
import './App.css'

class Layout extends Component {
  render() {
    var currentPath = null
    const { pathname } = this.props.location

    if (pathname === '/participants') {
      currentPath = <ParticipantList />
    } else if (pathname === '/quiz') {
      currentPath = <Quiz />
    } else if (pathname === '/winners') {
      currentPath = <ShowWinner />
    }
    return (
      <section>
        <div className="container">
          <div className="columns bg-container">
            <img className="gim-left" src="static/gim-left.png" alt="gim-left" />

              { currentPath }

            <img className="gail-right" src="static/gail-right.png" alt="gail-right" />
          </div>
        </div>
      </section>
    )
  }
}

export default Layout
