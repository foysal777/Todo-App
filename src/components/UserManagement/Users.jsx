import React from 'react'
import User from './User'

const Users = ({user}) => {
    const {id , name} = user
    console.log(user)
  return (
    <div>
        {user.map(user => <User  user= {user} > </User> )}
    </div>
  )
}

export default Users