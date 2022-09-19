import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    const { loading, data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${counter}` );

    /**
     * !! Forma para convertir un null en un false, con ! convierte el null en un true y con !! se convierte en un false y de
     * esta forma se evita un error.
     */
    const { author, quote } = !!data && data[0];

  return (
    <div>
        <h1>BreakingBad Quotes</h1>
        <hr />

        {
            loading 
            ? 
                (
                    <div>
                        Loading...
                    </div>
                )
            :
                (
                    <blockquote>
                        <p>{quote}</p>
                        <footer>{author}</footer>
                    </blockquote>
                )
        }

        <button onClick={increment}>Siguiente quote</button>
    </div>
  )
}
