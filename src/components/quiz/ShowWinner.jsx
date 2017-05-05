import React, { Component } from 'react'
import UserAvatar from '../UserAvatar'
import { Redirect } from 'react-router-dom'

class ShowWinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      next: false
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

  toSinglePage = () => {
    this.setState(state => ({ next: !state.next }))
  }
  
  render() {
    if (!this.state.next) {
      return (
        <div className="main-column content column is-half is-offset-one-quarter scrolling-winner" onClick={this.toSinglePage}>
          <h2 className="has-text-centered ">Number of participants : {this.state.users.length}</h2>
          {
            this.state.users.map((user, index) => {
              return <UserAvatar key={user.profilePic} avatar={user.profilePic} />
            })
          }
        </div>
      )
    } else {
      return <Redirect to="/single" />
    } 
  }
}

export default ShowWinner;
