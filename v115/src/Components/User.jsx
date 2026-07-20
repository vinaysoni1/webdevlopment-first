import React from 'react'
import { useParams } from 'react-router'

const User = () => {
    const param = useParams()
  return (
    <div>
      i am user {param.username}
    </div>
  )
}

export default User
