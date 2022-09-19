import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'

export const Layout = () => {

    const { counter, increment } = useCounter(1);

    const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${counter}` );

    /**
     * !! Forma para convertir un null en un false, con ! convierte el null en un true y con !! se convierte en un false y de
     * esta forma se evita un error.
     */
    const { quote } = !!data && data[0];
    
    const [boxSize, setBoxSize] = useState({});

    const pTag = useRef()

    /**
     * Es muy similar a useEffect, pero se usa en conjunto con ref para poder obtener las medidas y posición de la caja
     * a la cual se le hace referencia.
     */
    useLayoutEffect(() => {
      setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote])

  return (
    <div>
        <h1>BreakingBad Quotes</h1>
        <hr />

        <blockquote>
            <p
                ref={pTag}
            >{quote}</p>
        </blockquote>

        <pre>
            {JSON.stringify(boxSize, null, 3)}
        </pre>

        <button onClick={increment}>Siguiente quote</button>
    </div>
  )
}
