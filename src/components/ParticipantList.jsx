import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { firebaseApp } from '../firebase'

const styles = {
  'marginTop': '20px',
  'color': '#333'
}

const userAvatar = {
  'borderRadius': '50%',
  'width': '100px',
  'maxHeight': '100px'
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
      return players.push(this.state.users[uid])
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
      <div className="container" style={styles}>
        <div className="box">
          <div className="columns ">
            <div className="column content has-text-centered">
              <h1>Participants</h1>
              <Link to="/quiz" className="button is-primary" onClick={this.closeStatus.bind(this)}>Start Quiz</Link>
            </div>
          </div>
          <div className="columns is-multiline is-tablet">
            {
              this.state.players.map(user => {
                return (
                  <div className="column is-4 has-text-centered" key={user.createdAt}>
                    <img style={userAvatar} src={user.profilePic} alt="user-avatar" />
                    <p style={{'color': '#333'}}>{user.firstName} {user.lastName}</p>
                  </div>  
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default ParticipantList