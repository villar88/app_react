import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

  const { setUser } = useContext(UserContext);

  return (
    <div>
        <h1>LoginScreen</h1>
        <hr />
        <button onClick={()=>{ setUser({
          id: 12345,
          name: "Francisco Guerrero",
          email: "fguerrero486326@gmail.com"
        }) }}>Login</button>
    </div>
  )
}
