import React from 'react'
import { useNavigate } from 'react-router-dom';

export const UsersScreen = () => {
    const navigate = useNavigate(); 
  
    const handleLogout = () => {
  
      navigate('/login');
    }

  return (
    <div>
        <h1>UsersScreen: </h1>
        <hr />
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
