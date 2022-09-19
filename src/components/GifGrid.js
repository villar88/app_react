import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

export const GifGrid = ({categoria}) => {
  /**
   * Forma para dar un alias a una variable : la data se pasa a imagenes
   */
  const { loading, data: imagenes } = useFetchGifs( categoria );
    

  return (
    <div>
        <h3>{ categoria }</h3>
          {
            /**
             * Forma de enviar propiedades a un componente hijo.
             */
            loading ? 'Cargando' : imagenes.map(img => (
              <GifGridItem 
                key={img.id}
                { ...img } 
              />
            ))
          }
    </div>
  )
}
