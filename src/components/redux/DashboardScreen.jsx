import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../redux/actions/auth';
import { activeNote, startNewNote } from '../../redux/actions/notes';
import { AddEditNote } from './AddEditNote';

export const DashboardScreen = () => {

  const { name } = useSelector(state => state.auth);
  const { active: noteActive, notes } = useSelector(state => state.notes);
  const dispatch = useDispatch();
  /**
   * Para manejo de fechas se puede usar la libreria moment.js
   */
  
  /**
   * Metodo de cierre de sesión.
   */
  const handleLogout = () => {
    dispatch(startLogout());
  }

  /**
   * Metodo de creación de nueva nota.
   */
  const handleAddNew = () => {
    dispatch(startNewNote());
  }

  /**
   * Metodo de seleccionar una nota activa y se realiza un dispatch para elegir una nota activa.
   * @param {*} id es el identificador de la nota, este es unico
   */
  const handleNoteActive = (id) => {
    const { date, body, title, url } = notes.find(note => note.id === id);

    dispatch(activeNote(id, { date, title, body, url, id }));
  }

  return (
    <div>
        <h1>DashboardScreen: { name }</h1>
        <hr />
        <button onClick={handleLogout}>Logout</button>
        <hr />
        <button onClick={handleAddNew}>Crear una nota</button>
        <hr />
        <h2>Crud de redux y firebase</h2>
        { noteActive && <p>{ noteActive.title }: { noteActive.body }</p> }
        { notes && 
          <ul>
            { 
              notes.map( note => 
                (
                  <li 
                    onClick={ () => handleNoteActive(note.id) } 
                    key={ note.id } 
                    style={{cursor: "pointer"}}
                  >{ note.title }: { note.body }</li>
                )
              ) }
          </ul> 
        }
        {
          noteActive && <AddEditNote noteActive={noteActive}/>
        }
    </div>

  )
}
