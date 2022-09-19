import React, { useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    /*const increment = () => {
        setCounter(counter + 1);
    }*/

    /**
     * useCallback es un hook que se utiliza para evitar que se vuelva a generar un componente una vez que se actualiza el estado,
     * en este caso al componente se le envia una función como increment que cuando se hace uso en componente hijo altera el 
     * a la funcion que esta en el padre y como el estado sufre un cambio vuelve y renderiza al componente hijo, es por ello que 
     * se hace uso de useCallback para evitar esa nueva renderización.
     * 
     * Para que esto funcione se debe agregra React.memo o memo para que no se renderice el compoente.
     */
    const increment = useCallback((numero) => {
        setCounter(c => c + numero);
      }, [setCounter] 
    );

    /**
     * En caso de que haya algun useEffect se haria de la siguiente manera, para evitar que el efecto se ejecute cada vez que haya
     * un cambio en el metodo en esta caso increment.
     */

    useEffect(() => {
      console.log('Se ejecuto el efecto');
    }, [increment]);
    
    

  return (
    <div>
        <h1>useCallbackHook: {counter}</h1>
        <hr />

        <ShowIncrement increment={increment}/>
    </div>
  )
}
