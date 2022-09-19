import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    /**
     * Link es la forma de crear un enlace en un menu u otro tipo de enlace.
     * 
     * NavLink da la opcion de poder agregar una clase que lo identifique como activo
     */
  return (
    <nav>
        <ul style={{fontSize:"1rem"}}>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about/hola_mundo'}>About</Link></li>
            <li><Link to={'/login'}>Login</Link></li>
        </ul>
    </nav>
  )
}
