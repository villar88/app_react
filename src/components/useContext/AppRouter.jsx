import React from 'react'
import {
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
  /**
   * Forma de crear un router para la navegación en la aplicacion web.
   * NavBar es el componente que tiene el menu.
   * 
   * NavBar no necesariamente debe ir en el router, se puede colocar en otro componente.
   * 
   * Router no necesariamente debe existir uno solo, pueden existir varios en la aplicación.
   */
  return (
    <>
      <NavBar/>
        <Routes>
            <Route path="/" element={<HomeScreen />}/>
            <Route path="about/:id" element={ <AboutScreen/> }/>
            <Route path="login" element={ <LoginScreen/> }/>
            <Route path="*" element={ <Navigate to={ "/" }/> } />
        </Routes>
    </>
  )
}
