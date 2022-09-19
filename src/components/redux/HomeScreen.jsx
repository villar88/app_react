import React from 'react'
import { Link } from "react-router-dom";

export const HomeScreen = () => {
  return (
    <div>
      <h1>HomeScreen</h1>
      <hr />
      <Link to={'/login'}>Ir a login</Link>
    </div>
  )
}
