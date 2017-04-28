import React, { Component } from 'react'

class CorrectedUser extends Component {
  render() {
    return (
      <div>
        <ul>
          {
            this.props.user.map((user, index) => {
              return (
                <li key={index}>{user.name}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default CorrectedUser