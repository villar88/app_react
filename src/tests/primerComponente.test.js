import React from 'react';
import { render } from '@testing-library/react';
import PrimerComponente from '../components/PrimerComponente';

/**
 * Documentación https://jestjs.io
 * 
 * Es recomendable que los scripts de las pruebas se llamen igual que el script al que se le va a aplicar el test,
 * con la continuacion de nombre.test.js
 * 
 * Se recomienda agregar un describe para agrupar todos los test que se aplican a un script.
 */

describe('Pruebas en el script PrimerComponente.js', () => {

    /**
     * Test que se aplica en el script
     */
    test('debe de ser iguales los string', () => {  
        /**
         * 1. Inicialización
         */
    
        const mensaje = 'Hola mundo';
    
        /**
         * 2. Estimulo
         */
        const mensaje2 = 'Hola mundo';
    
        /**
         * 3. Observar
         */
        expect(mensaje).toBe(mensaje2);
    })

    /**
     * Test del componente.
     * 
     * Para expandir la funcionalidades de la libreria de jest se debe agregar el script llamado setupTests.js
     */
    test('debe de mostrar el mensaje "Hola, soy Goku"', () => {
        const saludo = 'Hola, soy Goku';

        const { getByText } = render(<PrimerComponente saludo={saludo}/>);

        expect( getByText(saludo) ).toBeInTheDocument();
    })
});