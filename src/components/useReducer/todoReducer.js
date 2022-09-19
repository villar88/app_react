
export const todoReducer = (state = [], action) => {
    switch (action.type) {
        /**
         * Agregar un registro al reducer.
         */
        case 'add':
            return [...state, action.payload];
        
        /**
         * Eliminar un registro al reducer.
         */
        case 'delete': 
            return state.filter(todo => todo.id !== action.payload);

        /**
         * Actualizar un registro al reducer.
         */
        case 'update': 
            return state.map( todo =>
                (todo.id === action.payload)
                    ? { ...todo, done: !todo.done }
                    : todo
            );

            /**
             * Forma larga
             */
            /*return state.map(todo => {
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }else{
                    return todo;
                }
            });*/
        default:
            return state;
    }
}