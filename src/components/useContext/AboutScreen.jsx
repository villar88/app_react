import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from './UserContext';

/**
 * En la estuctura de los scripts de un proyecto de react las paginas es recomendable que el nombre termine con el prefijo Screen
 */
export const AboutScreen = () => {

  const { user, setUser } = useContext(UserContext);

  /**
   * Hook de react-router-dom que nos permite obtener los paramentros de una url, siempre y cuando el route donde se creo este algun
   * indicador por ejemplo /:id. 
   */
  const params = useParams();

  /**
   * useNavigate de react-router-dom nos permite navegar en la aplicacón y se debe usar con useEffect, evento o un metodo asincrono para evitar que se ejecute
   * multiples veces y esto genere errores.
   * 
   * navigate(-1) tiene la funcion de go back o volver.
   */

  const navigate = useNavigate(); 

  console.log(params)

  const handleClick = () => {
    setUser({});
  }

  return (
    <div>
        <h1>AboutScreen</h1>
        <hr />

        <pre>
          { JSON.stringify(user, null, 3) }
        </pre>

        <button onClick={handleClick}>Logout</button>

        <button onClick={()=> navigate(-1) }>Go back</button>
    </div>
  )
}
