import React, { useState } from 'react';
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategorias }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInput = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            /**
             * Forma de alterar un estado para casos de cuando no esta el estado, solo la funcion que la puede alterar, en este caso se está
             * agregando un valor a un array.
             */
            setCategorias(cats => [ inputValue, ...cats ]);
            setInputValue('');
        }
        
    }

  return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={inputValue}
            onChange={handleInput}
        />
    </form>
  )
}
/**
 * Hacer que sea obligatorio enviar una función en las props
 */
AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}
