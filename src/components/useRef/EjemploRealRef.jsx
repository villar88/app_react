import React, { useState } from 'react'
import { MultipleCustomHooks } from '../ejemplos/MultipleCustomHooks'

export const EjemploRealRef = () => {

    const [show, setShow] = useState(false);    

  return (
    <div>
        <h1>EjemploRealRef</h1>
        <hr />
        { show && <MultipleCustomHooks/> }

        <button
            onClick={() => { setShow(!show) } }
        >Show/Hide</button>
    </div>
  )
}
