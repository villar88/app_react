import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { activeNote, startDeleting, startSaveNote, startUploading } from '../../redux/actions/notes';

export const AddEditNote = ({ noteActive }) => {

  const dispatch = useDispatch();
  const { active: note } = useSelector(state => state.notes);
  /**
   * En este caso se hacer uso de un formulario, pero este se actualiza cuando este componente 
   * se ejecuta, pero si se selecciona una nota este no se va a modificar, entonces para ello
   * se debe agregar useEffect para que cambie el estado del formulario y se puedan hacer las 
   * modificaciones de un registro sin problemas.
   * 
   * Tambien se debe hacer uso de useRef para evitar que ocurra un ciclo infinito y la aplicación
   * se haga muy pesada.
   */
  const [ formValues, handleInputChange, reset ] = useForm(noteActive);
  const { body, title, url, id } = formValues;

  const activeId = useRef(noteActive);

  useEffect(() => {
    if(noteActive.id !== activeId.current) {
      reset(noteActive);
      activeId.current = noteActive.id;
    }
  }, [noteActive, reset]);

  /**
   * Efecto para actualizar con redux los campos de una nota ya sea que se este creando como nueva o se este editando.
   */
  useEffect(() => {
    dispatch(activeNote( formValues.id, { ...formValues } ))
  }, [formValues, dispatch])

  const handleEditNote = (e) => {
    e.preventDefault();

    dispatch(startSaveNote(note));
  }

  const handlePictureClick = () => {
    document.getElementById("fileSelector").click();
  } 

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if(file){
      dispatch(startUploading(file));
    }
  }

  const handleDeleteNoteActive = () => {
    dispatch( startDeleting(id) );
  }

  return (
    <div>
        <h1>Agregar o editar nota.</h1>
        <form onSubmit={handleEditNote}>
          <input type="text" name="title" value={title} onChange={handleInputChange} placeholder="Agregar un titulo para la nota"/>
          <input type="text" name="body" value={body} onChange={handleInputChange} placeholder="Agregar un contenido para la nota"/>
          <input type="file" name="file" id="fileSelector" onChange={ handleFileChange } style={{display: "none"}} />
          <button type="button" onClick={ handlePictureClick }>Agregar imagen</button>
          <input type="submit" value="Guardar" />
          <img src={url} alt="imagen" />
          <button type="button" onClick={handleDeleteNoteActive}>Delete</button>
        </form>
    </div>
  )
}
