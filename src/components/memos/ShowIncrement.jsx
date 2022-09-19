import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {
    console.log("Se volvio a generar.")
  return (
    <button onClick={ () => { increment(5) } }>
        Incrementar
    </button>
  )
});
