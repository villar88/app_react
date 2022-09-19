import React, { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';


export const MemoHook = () => {

    const { counter, increment } = useCounter( 5000 );
    const [show, setShow] = useState(false);

    /**
     * useMemo es un hook que se usa para evitar que un proceso se ejecute nuevamente cuando se está ejecutando otro proceso
     * que no este relacionado con el proceso actual.
     */
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

  return (
    <div>
        <h1>MemoHook</h1>
        <h3>Counter: <small>{counter}</small></h3>
        <hr />

        <p>{ memoProcesoPesado }</p>

        <button
            onClick={increment}
        >
            +1
        </button>

        <button
            onClick={()=>{ setShow(!show) }}
        >
            Show/Hide { JSON.stringify(show) }
        </button>
    </div>
  )
}
