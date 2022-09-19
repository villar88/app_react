import { app } from "../../firebase/firebaseConfig";
import { getFirestore, collection, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { types } from "../types/types";
import { loadNotes } from "../../helpers/loadNotes";
import { fileUpload } from "../../helpers/fileUpload";

const db = getFirestore(app);

/**
 * En firebase se debe modificar la regla para que solo los usuarios logueados puedan gentionar en la base de datos.
 * 
 * Antes
 *  rules_version = '2';
    service cloud.firestore {
        match /databases/{database}/documents {
            match /{document=**} {
            allow read, write: if true;
            }
        }
    }

    Despues
    rules_version = '2';
    service cloud.firestore {
        match /databases/{database}/documents {
            match /{document=**} {
            allow read, write: if request.auth != null;
            }
        }
    }

    solo pueden gestionar los usuario que esten autentificados.
 */

export const startNewNote = () => {
    return async ( dispatch, getState ) => {
        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            url: ''
        };
        /**
         * Forma para agregar un documento a una colección, en caso tal que no exista la colección esta se crea
         * uid es el nombre de la colección.
         * journal es el nombre del documento.
         * notes es el nombre de la colección interna.
         * new Note es la data que se va a ingresar al documento.
         */
        try{
            const docRef = await addDoc(collection(db, `${uid}/journal/notes`), newNote);

            dispatch(activeNote(docRef.id, newNote));
            dispatch(addNewNote(docRef.id, newNote));
        }catch(e){
            console.log(e);
        }        
    }
}

export const activeNote = ( id, note ) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
});

export const addNewNote = ( id, note ) => ({
    type: types.notesAddNew,
    payload: {
        id, ...note
    }
});

export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid);

        dispatch(setNotes(notes));
    }
}

export const setNotes = ( notes ) => ({
    type: types.notesLoad,
    payload: notes
});

/**
 * metodo de actualización de una nota.
 * @param {*} note nota a guardar
 */
export const startSaveNote = (note) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        
        const noteToFirestore = { ...note };
        delete noteToFirestore.id;

        const noteRef = doc(db, uid, 'journal', 'notes', note.id);

        await updateDoc(noteRef, noteToFirestore);

        dispatch(refreshNotes( note.id, noteToFirestore ));

        alert('Registro actualizado...');
    }
}

export const refreshNotes = ( id, note ) => ({
    type: types.notesUpdated,
    payload: {
        id, 
        note: {
            id,
            ...note
        }
    }
});

/**
 * Metodo para subida de archivos, este casi imagenes.
 */
export const startUploading = (file) => {
    return async (dispatch, getState) => {
        const { active: activeNote } = getState().notes;
        /**
         * Aqui podemos colocar un sweet alert que nos indique que la imagen se esta cargando.
         */
        const fileUrl = await fileUpload( file );

        activeNote.url = fileUrl;

        dispatch( startSaveNote( activeNote ) );
    }
}

export const startDeleting = ( id ) => {
    return async ( dispatch, getState ) => {
        const uid = getState().auth.uid;

        const noteRef = doc(db, uid, 'journal', 'notes', id);

        await deleteDoc(noteRef);

        dispatch( deleteNote(id) );

        alert('Nota eliminada correctamente...');
    }
}

export const deleteNote = (id) => ({
    type: types.notesDelete,
    payload: id
});

export const notesLogout = () => ({
    type: types.notesLogoutCleaning
});