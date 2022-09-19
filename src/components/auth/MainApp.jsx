import React, { useEffect, useReducer } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { authReducer } from '../../auth/authReducer'
import { AuthRouter } from './AuthRouter'

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false };
}

export const MainApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init);

    useEffect(() => {
      localStorage.setItem('user', JSON.stringify(user));
    }, [user])
    

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
        <AuthRouter/>
    </AuthContext.Provider>
  )
}
