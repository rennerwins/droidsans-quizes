import React, { Component } from 'react'

const userAvatar = {
  'borderRadius': '50%'
}

class CorrectedUser extends Component {
  render() {
    return (
      <div className="columns is-mobile has-text-centered">
          {
            this.props.user.map((user, index) => {
              return (
                <div className="column is-4 animated fadeIn" key={index}>
                  <img src={user.profilePic} alt="user-avatar" width="80" style={userAvatar} />
                  <p>{user.name}</p>
                </div>
              )
            })
          }
      </div>
    )
  }
}

export default CorrectedUser
