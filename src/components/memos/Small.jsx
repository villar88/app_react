import React, { memo } from 'react'

/**
 * memo, es una funcion de react que se usa para caso de cuando un estado del componente padre sufre un cambio, entonces 
 * se hace uso de memo para evitar que este componente se vuelva a cargar y en caso de que haya una peticion a una api se
 * evita que el usuario gaste de forma innecesaria datos y/o la aplicacion se relentice, solo se va a cargar de nuevo cuando
 * cambie el valor que se recibe por medio de la prop, en este caso value. 
 */
export const Small = memo(({ value }) => {
    console.log('Llamando componente...')
  return (
    <small>{ value }</small>
  )
});
