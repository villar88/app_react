import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { AddCategory } from '../components/AddCategory';
import { GifGrid } from '../components/GifGrid';

/**
 * rafcp es un comando para generar un componente con proptypes.
 * 
 * Se puede colocar props para recibir el objeto o destructurar como esta en este caso, tambien se puede colocar un 
 * valor por defecto como la variable subtitulo, en caso tal que no se quiera asignar se haria como en el caso de defaultProps
 */
const PrimerComponente = ( { saludo, subtitulo } ) => { 

    //const saludo = props.saludo;
    const [categorias, setCategorias] = useState([]);

    /**
     * Hook de state, sirve para crear un estado.
     */
    const [value, setValue] = useState(0);

    /**
     * Forma de crear un metodo en el componente
     */
    const handleAdd = (e) => {
        //console.log(e);
        setValue(value + 1);

        /**
         * Formas de alterar un array que esta en un estado
         */
        //setCategorias([...categorias, 'Dragon Ball super']);
        //setCategorias( cats => [...cats, 'El rey leon']);

        /**
         * Otra forma de alterar un valor de un estado
         */
        // setValue( (v) => v + 1 );
    }

    return (
        <>
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>

            <h2>{value}</h2>

            <button onClick={ handleAdd }>+1</button>
            <button onClick={ () => setValue(0) }>Reset</button>
            <button onClick={ () => setValue( value - 1) }>-1</button>
            <AddCategory setCategorias={setCategorias}/>
            {/**
             * Para recorrer un array o objeto se debe agrear un key en el elemento para evitar errores y el key debe ser unico
             * y para recorrer objetos o array se usar el .map
             */}
            <ol>
                {   categorias.map( categoria =>( 
                        <GifGrid key={categoria} categoria={categoria} /> 
                    )) }
            </ol>
            
        </>
    );
    /**
     * https://es.reactjs.org/docs/events.html#gatsby-focus-wrapper documentacion de eventos.
     */
}

/**
 * Aqui se definen como van a ser los props que se van a enviar desde el componente padre
 * se pueden definir de que tipo deben ser y si son obligatorios.
 */
PrimerComponente.propTypes = {
    saludo: PropTypes.string.isRequired
}

/**
 * En esta seccion se pueden definir los valores por defecto de las propiedades de una prop
 */
PrimerComponente.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}
export default PrimerComponente;

