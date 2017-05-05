import React, { Component } from 'react';
import UserAvatar from './UserAvatar'

class Single extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('https://dsmbot.herokuapp.com/getAllSingleUsers')
    .then(res => res.json())
    .then(res => {
      this.setState({
        users: res.singleUsersInfo
      })
    })
  }
  
  
  render() {
    return (
      <div className="main-column content column is-half is-offset-one-quarter scrolling-winner">
        <br/>
        {
          this.state.users.map((user, index) => {
            return <UserAvatar key={user.profilePic} avatar={user.profilePic} />
          })
        }
      </div>
    );
  }
}

export default Single;