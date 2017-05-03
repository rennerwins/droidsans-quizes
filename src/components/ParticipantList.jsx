import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { firebaseApp } from '../firebase'


const userAvatar = {
  'borderRadius': '50%',
  'width': '100%',
  'height': '100%',
  'minWidth': '60px',
  'minHeight': '60px'
}

class ParticipantList extends Component {
  constructor(props) {
    super(props);
    this.matchUser = this.matchUser.bind(this)
    this.state = {
      participants: [],
      users: [],
      players: []
    }
  }

  componentDidMount() {
    firebaseApp.database().ref().child('/users').on('value', snap => {
      this.setState({
        users: snap.val()
      })
      this.getParticipants()
    })
  }

  getParticipants() {
    const participants = []
    firebaseApp.database().ref().child('/participants').on('child_added', snap => {
      participants.push(snap.val())
      this.setState({
        participants
      })
      this.matchUser()
    })
  }

  matchUser() {
    const players = []
    this.state.participants.map(uid => {
      return players.unshift(this.state.users[uid])
    })
    this.setState({
      players
    })
  }

  closeStatus() {
    fetch('https://dsmbot.herokuapp.com/changeEnterStatus?value=close')
    .then(res => res.json())
    .then(res => {
      console.log('close enter status', res)
    })

    fetch('https://dsmbot.herokuapp.com/justStartTheQuiz')
    .then(res => res.json())
    .then(res => {
      console.log('ready to start quiz', res)
    })
  }

  
  render() {
    return (
      <div className="column is-half is-offset-one-quarter main-column">
        <div className="content has-text-centered">
          <h1>Participants</h1>
          <Link to="/quiz" className="button is-primary" onClick={this.closeStatus.bind(this)}>Start Quiz</Link>
        </div>

        <div className="columns is-multiline is-mobile scrolling">
          {
            this.state.players.map(user => {
              return (
                <div className="column is-3 has-text-centered" key={user.createdAt}>
                  <img style={userAvatar} src={user.profilePic} alt="user-avatar" />
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default ParticipantList
