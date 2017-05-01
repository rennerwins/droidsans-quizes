import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
    this.state = {
      participants: []
    }
  }

  componentDidMount() {
    fetch('https://dsmbot.herokuapp.com/getAllParticipantsInfo')
    .then(res => res.json())
    .then(res => {
      this.setState({
        participants: res.usersInfo
      })
    })
  }
  
  render() {
    return (
      <div className="container" style={styles}>
        <div className="box">
          <div className="columns ">
            <div className="column content has-text-centered">
              <h1>Participants</h1>
              <Link to="/quiz" className="button is-primary">Start Quiz</Link>
            </div>
          </div>
          <div className="columns is-multiline is-tablet">
            {
              this.state.participants.map(user => {
                return (
                  <div className="column is-4 has-text-centered" key={user.id}>
                    <img style={userAvatar} src={user.profilePic} alt="user-avatar" />
                    <p style={{'color': '#333'}}>{user.name}</p>
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