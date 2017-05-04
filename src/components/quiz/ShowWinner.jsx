import React, { Component } from 'react'
import UserAvatar from '../UserAvatar'

class ShowWinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }
  
  componentDidMount() {
    fetch('https://dsmbot.herokuapp.com/getParticipantsScore')
    .then(res => res.json())
    .then(res => {
      this.setState({
        users: res.result
      })
    })
  }
  
  render() {
    return (
      <div className="column is-half is-offset-one-quarter">
          {
            this.state.users.map((user, index) => {
              if (index === 0) {
                return (
                  <div className="main-column content has-text-centered" key={index}>
                    <UserAvatar avatar={user.profilePic} />
                    <h1>{user.name}</h1>
                    <p className="has-text-centered">Number of participants : {this.state.users.length}</p>
                  </div>
                )
              }
              return null
            })
          }
      </div>
    );
  }
}

export default ShowWinner;
