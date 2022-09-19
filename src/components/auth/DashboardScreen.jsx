import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const DashboardScreen = () => {

  const { user, dispatch } = useContext(AuthContext);

  const navigate = useNavigate(); 

  const handleLogout = () => {
    dispatch({
      type: types.logout
    });

    navigate('/login');
  }

  return (
    <div>
        <h1>DashboardScreen: { user.name } </h1>
        <hr />
        <button onClick={handleLogout}>Logout</button>
    </div>

  )
}
