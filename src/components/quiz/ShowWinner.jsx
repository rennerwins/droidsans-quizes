import React, { Component } from 'react'
import UserAvatar from '../UserAvatar'
import { Redirect } from 'react-router-dom'

class ShowWinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }
  
  componentDidMount() {
    fetch('https://dsmbot.herokuapp.com/getParticipantsScore?winner=true')
    .then(res => res.json())
    .then(res => {
      this.setState({
        users: res.result
      })
    })
  }

  render() {
    return (
      <div className="main-column content column is-half is-offset-one-quarter scrolling-winner">
        <h2 className="has-text-centered ">WINNERS!!</h2>
        {
          this.state.users.map((user, index) => {
            return <UserAvatar key={user.profilePic} avatar={user.profilePic} />
          })
        }
      </div>
    )
  }
}

export default ShowWinner;
