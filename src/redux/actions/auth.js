import { types } from "../types/types";
/**
 * Cuando se necesita ejecutar algo que es necesario, pero lo que se exporta no se dese usar se puede colocar las llaves vacias.
 */
import { } from "../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { uiFinishLoadin, uiStartLoading } from "./ui";
import Swal from "sweetalert2";
import { notesLogout } from "./notes";

/**
 * Definición de una acción del tipo middleware, es decir una acción que se ejecuta de forma asincrona, esto se puede lograr, 
 * teniendo las configuraciones del la libreria de thunk en el store. (ver store.js)
 * 
 * En este tipo de metodos se pueden disparar varios dispatch simultaneamente.
 */

const auth = getAuth();

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(uiStartLoading());
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            
            const { displayName, uid } = userCredential.user;
            dispatch(login(uid, displayName));
            dispatch(uiFinishLoadin());
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            /**
             * Forma de hacer uso de sweetalert.
             */
            Swal.fire('Error', errorMessage, 'error');
            dispatch(uiFinishLoadin());
        });
    }
}

/**
 * Forma de agregar un usuario en firebase.
 */
export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        dispatch(uiStartLoading());
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            updateProfileUser(name);
            const { uid } = user;
            dispatch(login(uid, name));
            dispatch(uiFinishLoadin());
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            dispatch(uiFinishLoadin());
        });
    }
}

/**
 * Metodo para la actualización de perfil de usuario. 
 */
const updateProfileUser = (name) => {
    updateProfile(auth.currentUser, {
        displayName: name
    })
    .then(()=>{
        console.log('Datos actualizados...');
    })
    .catch((error) => {
        console.log(error);
    });
}

/**
 * Metodo para iniciar sesion con una cuenta de google.
 */
export const startGoogleLogin = () => {
    return ( dispatch ) => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then(({ user })=> {
                //const credential = GoogleAuthProvider.credentialFromResult(result);
                //const token = credential.accessToken;
                const { uid, displayName } = user;

                dispatch(login(uid, displayName));
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorCode, errorMessage, email, credential)
            });
    }
}

/**
 * Forma de crear una acción sincrona.
 */
export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});

export const startLogout = () => {
    return (dispatch) => {
        signOut(auth)
            .then(() => {
                dispatch(logout());
                dispatch(notesLogout());
            });
    }
}

export const logout = () => ({
    type: types.logout
})