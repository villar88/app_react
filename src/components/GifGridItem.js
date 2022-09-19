import React from 'react'

/**
 * Forma de desestructurar propiedades enviadas desde un componente padre.
 */
const GifGridItem = ({ title, url }) => {
    //console.log(id, title, url);
  return (
    <div>
        <img src={url} alt={title}/>
    </div>
  )
}

export default GifGridItem