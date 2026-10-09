import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {username} = useParams()
  return (
    <div>
      i am {username}
    </div>
  )
}

export default User
