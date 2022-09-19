import { getSaludo } from '../../base/02-template-string';
/**
 * Forma para realizar pruebas a metodos de algún componente.
 */
describe('Pruebas en 02-template-string.js', () => {
    /**
     * Se pueden realizar pruebas para evaluar que se retornen objetos, array... entre otros.
     */
    test('getSaludo debe retornar Hola Francisco', () => {
        
        const nombre = 'Francisco';

        const saludo = getSaludo(nombre);
        /**
         * toBe sirve para verificar que lo que se obtiene es igual a lo esperado.
         * 
         * toEqual sirve para analizar objetos.
         */
        expect( saludo ).toBe( `Hola ${nombre}` );
    })


})