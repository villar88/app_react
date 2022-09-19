import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {
  
  const [user, setUser] = useState({});

  /**
   * Forma de usar un context en una aplicación, este debe encerrar al router y de esta forma podemos enviar información 
   * necesaria en entre componente que no poseen ninguna realción por ejemplo padre e hijo.
   * 
   * Todos los componente que esten asociados al router van a poder tener acceso a la información que se agregue al context en
   * este caso el objeto user.
   * 
   * El atributo value solo se puede agregar una variable, constante o objecto para casos de enviar varias propiedades.
   */
  return (
    <UserContext.Provider value={{
      user,
      setUser
    }}>
      <AppRouter/>
    </UserContext.Provider>
  )
}
