import React from "react"; // no es obligatorio desde la version 17
import ReactDOM from "react-dom/client";
//import PrimerComponente from "./pages/PrimerComponente";
//import "./index.css"

/**
 * Pasos para configurar sass:
 * 1) Instalar sass con el comando npm 'install node-sass'
 * 2) Bajar el servidor 
 * 3) Ejecutar de nuevo la aplicación y de esa forma queda todo listo
 */
import './styles/styles.scss';
import Hooks from "./pages/Hooks";
import { BrowserRouter } from "react-router-dom";

const divRoot = ReactDOM.createRoot(document.querySelector('#app'));

/**
 * saludo es un paramatro que se envia al componente como parte de las props, se pueden enviar tantos como sean necesarios.
 */

/**
 * Para instalar redux se usa el comando: npm install react-redux redux
 */

/**
 * Para configurar middleware de redux se debe instalar redux thunk con el comando: npm install redux-thunk
 * 
 * Tambien se puede hacer una instalación completa de todos los paquetes de redux con el siguiente comando:
 * npm install react-redux redux redux-thunk
 */

/**
 * Para instalar el manejador de firebase se usa el comando npm install firebase
 * Tutorial de firebase: https://www.youtube.com/playlist?list=PLCKuOXG0bPi29EkcAuVCln9ISbExcQk66
 */

/**
 * Instalación de sweetalert2: npm install sweetaler2
 */
divRoot.render(
    //<React.StrictMode>
        /**
         * Primeras clases y parte de hooks
         */
        // <PrimerComponente saludo="Hola, soy Goku"/>
        
        /**
         * Clase de Hooks profundización.
         */
        <BrowserRouter>
            <Hooks/>
        </BrowserRouter>
    //</React.StrictMode>
);

/**
 * Para desplegar aplicación en github pages se realizan los siguientes pasos.
 * 
 * 1) cambiar el nombre de la carpeta de build por docs.
 * 2) el repositorio debe ser publico.
 * 3) Ir a settings, luego ir a pages y por ultimo seleccionar la rama a la que se debe aputar para que se despliegue la pagina.
 */
