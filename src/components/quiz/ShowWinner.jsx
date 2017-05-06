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
    fetch('https://dsmbot.herokuapp.com/getParticipantsScore?winner=true')
    .then(res => res.json())
    .then(res => {
      this.setState({
        users: res.result
      })
      console.log(this.state.users)
    })
  }

  render() {
    return (
      <div className="main-column content column is-half is-offset-one-quarter ">
        <h2 className="has-text-centered ">WINNERS!!</h2>
        <div className="columns is-multiline scrolling-winner">
          {
            this.state.users.map((user, index) => {
              return (
                <div className="column is-4 has-text-centered" key={user.name}>
                  <UserAvatar avatar={user.profilePic} />
                  <p>{user.name}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default ShowWinner;
