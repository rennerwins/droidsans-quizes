import React, { Component } from 'react';

const userAvatar = {
  'borderRadius': '50%'
}

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
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">Show Winner</p>
        </header>
        <div className="card-content">
          {
            this.state.users.map((user, index) => {
              if (index === 0) {
                return (
                  <div className="content has-text-centered" key={index}>
                    <img style={userAvatar} src={user.profilePic} alt="user-avatar" width="150" />
                    <h1>{user.name}</h1>
                  </div>
                )
              } else {
                return null
              }
            })
          }
        </div>
        <div className="card-footer-item">
          <p>Number of participants : {this.state.users.length}</p>
        </div>
      </div>
    );
  }
}

export default ShowWinner;
