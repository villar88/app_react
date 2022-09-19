import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (categoria) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  });

  /**
     * Cunado el useEffect en el segundo parametro no posee ninguna variable o objecto 
     * este se ejecuta una unica vez.
     * 
     * Cuando en el segundo parametro posee una variable, este se ejecuta solo cuando 
     * este sufre algun cambio.
     * 
     * Se reciben los registros y de esta forma se actualiza el estado de en este caso imagenes
     */
   useEffect(() => {
    getGifs(categoria)
      .then(imgs => { // En el then se puede colocar el set de un estado, por ejemplo setState en caso tal de que se espere una estructura igual a la que posee inicialmente.
        setState({
            data: imgs,
            loading: false
        });
      });
  }, [categoria]);

  return state;
}