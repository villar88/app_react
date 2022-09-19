import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const LoginScreen = () => {
  
  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate(); 
  const lastPath = localStorage.getItem('lastPath') || '/dashboard';

  const handleLogin = () => {
    dispatch({
      type: types.login,
      payload: {
        name: 'Francisco'
      }
    });

    navigate(lastPath);
  }

  return (
    <div>
        <h1>LoginScreen</h1>
        <hr />
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}
