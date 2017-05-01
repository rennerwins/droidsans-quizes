import React from 'react'

const userAvatar = {
  'borderRadius': '50%',
  'height': '80px',
  'width': '80px'
}

const CorrectedUser = ({ users }) => {
  return (
    <div className="columns is-multiline is-mobile has-text-centered">
      {
        users.map((user, index) => {
          return <User key={index} user={user}  />
        })
      }
    </div>
  )
}

const User = ({ user }) => {
  return (
    <div className="column is-4 animated fadeIn" >
      <img src={user.profilePic} alt="user-avatar" style={userAvatar} />
      <p>{user.name}</p>
    </div>
  )
}

export default CorrectedUser
