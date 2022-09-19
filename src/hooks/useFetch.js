import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {
  /**
     * useRef se utiliza para evitar un error que ocurre cuando se intenta desmontar un componente y existe un efecto que 
     * se esta ejecutando
     */
   const isMounted = useRef(true);

  const [state, setState] = useState({ data: null, loading: true, error: null });

  /**
   * El ref creado se puede usar con efecto en la parte del return, para cuando se desmonte un componente que posiblemente este
   * requiriendo data cambia el valor del ref y la peticion cuando finalice no envie data a un componente que ya no esta montado
   * y se pueda generar algun error.
   */
  useEffect(() => {
    
    return () => {
      isMounted.current = false;
    }
  }, [])

  useEffect(() => {

    setState({ data: null, loading: true, error: null });

    fetch( url )
        .then( resp => resp.json() )
        .then( data => {
            /**
             * Usando el ref para validar que el componente esta montado.
             */
            if(isMounted.current){
              setState({
                loading: false,
                error: null,
                data
              });
            }else{
              console.log('SetState no se llamo')
            }
        } )
  }, [url]);

  return state;
  
}
