import React, { useState } from 'react'
import User from './User'
import Users from './Users'

const UserManage = () => {
    const [user , setUser] =  useState([{ id : 1 , name : 'foysal' },{ id : 2 , name : 'Fahim' }]) 
  return (
    <div  >

          <Users user = {user}></Users>
    </div>
  )
}

export default UserManage