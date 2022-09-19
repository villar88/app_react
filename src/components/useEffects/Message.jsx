import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({x:0, y:0});

    const {x, y} = coords;

    useEffect(() => {
      /**
       * El codigo que se encuentre en esta parte del efecto se ejecutara una vez se monte el componente o el objeto que esta en los
       * [] sufra algun cambio.
       */

      const mouseMove = (e) => {
        const coords = { x: e.x, y: e.y };
        setCoords(coords);
      }

      window.addEventListener('mousemove', mouseMove );
    
      return () => {
        /**
         * El codigo que se encuentra en esta parte del efecto se ejecutara una vez de desmonte el componente, se puede usar por 
         * ejemplo para limpiar memoria, cache, etc.
         * 
         * Es importante hacer uso de esta sección del codigo porque una vez que se desmonte el componente es muy probable que
         * el codigo que posea este efecto siga en ejecución y la aplicación se haga pesada y los tiempos de respuesta sea los
         * no deseado.
         */

        window.removeEventListener('mousemove', mouseMove );
      }
    }, [])
    

  return (
    <div>
        <h3>Mensaje de texto: {x}, {y} </h3>
    </div>
  )
}
