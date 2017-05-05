import React from 'react'

const userAvatar = {
  'borderRadius': '50%',
  'width': '100%',
  'height': 'auto',
  'minWidth': '60px',
  'minHeight': '60px',
  'maxWidth': '100px',
  'marginLeft': '15px',
  'marginRight': '15px'
}

const UserAvatar = ({avatar}) => {
  return (
    <img style={userAvatar} src={avatar} alt="user-avatar" />
  )
}

export default UserAvatar
