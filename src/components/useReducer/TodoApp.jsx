import React, { useEffect, useReducer } from 'react'
import {todoReducer} from './todoReducer'; 

/**
 * Metodo que retorna los registros que han sido almacenados en localstorage, sirve para recuperar data cuando se 
 * recarga el navegador.
 */
const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    /**
     * Forma de crear un reducer, se recomieenda tener el metodo del reducer en un script aparte, [] seria el valor inicial y 
     * init es un metodo que sirve para obtener la informacion que se haya almacenado en localstorage, esto significa que si 
     * recargamos el navegador podemos recuperar la data por este medio.
     */
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    /**
     * Se recomienda usar un useEffect para guardar todos los registros almacenados en un reducer cuando se actualiza el mismo.
     */
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    

    /**
     * Metodo que puede ser accionado por un formulario, para agregar un registro al reducer.
     */
    const handleSubmit = () => {
      //e.preventDefault();

      /**
       * Creando el registro que va a ser almacenado en el reducer.
       */
      const newTodo = {
        id: new Date().getTime(),
        desc: 'Nueva Tarea',
        done: false
      }

      /**
       * Creando la acción para enviar la data al reduce con dispatch
       */
      const action = {
        type: 'add',
        payload: newTodo
      }

      /**
       * El dispatch se puede enviar a componentes hijo a traves de props y estos pueden agregar registros al reducer.
       */
      dispatch(action);
    }

    /**
     * Metodo para manejar la eliminación de un registro en el reducer. 
     */
    const handleDelete = (id) => {
      
      /**
       * Preparando la acción para la eliminación del registro.
       */
      const action = {
        type: 'delete',
        payload: id
      };

      /**
       * Disparando la acción.
       */
      dispatch(action);
    }

    /**
     * Metodo para manejar la actualización de un registro en el reducer. 
     */
    const handleUpdate = (id) => {

      /**
       * Forma corta de hacer un dispatch.
       */
      dispatch({
        type: 'update',
        payload: id
      });
    }

  return (
    <div>
        <h1>TodoApp: ({todos.length})</h1>
        <hr />

        <ul>
          { todos.map((todo, i) => (
            <li key={todo.id} style={{fontSize: "2rem"}}>
              <p 
                onClick={ ()=>{ handleUpdate(todo.id) } } 
                style={{cursor: "pointer"}}
                className={`${ todo.done && 'clase a agregar' }`}
              >{i + 1}. { todo.desc }</p>
              <button onClick={()=>{ handleDelete(todo.id) }}>Borrar</button>
            </li>
          )) }
        </ul>

        <button onClick={handleSubmit}>agregar</button>

    </div>
  )
}
