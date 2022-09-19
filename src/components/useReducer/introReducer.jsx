
/**
 * Forma de crear un estado inicial, en un reducer existe un estado inicial y mayormente seria un array.
 */
const inicialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

/**
 * El metodo de de un reducer se caracteriza por ser una funcion pura sin efectos secundarios, siempre va a recibir un estado inicial
 * y un efecto que va a servir para alterar el estado inicial y siempre va a retornar un nuevo estado.
 * @returns stare
 */
const todoReducer = (state = inicialState, action) => {

    switch (action?.type) {
        case 'agregar':
            state = [...state, action.payload]
            break;
    
        default:
            break;
    }

    return state;
}

/**
 * Forma de obtener un estado inicial o iniciar el reducer
 */
let todos = todoReducer();

/**
 * Nuevo registro que deseamos agregar al reducer.
 */
const newTodo = {
    id: 2,
    todo: 'Comprar Cereal',
    done: false
};

/**
 * Forma para crear una acción que se desea ejecutar en un reducer para poder alterar el estado que se obtuvo inicialmente.
 */
const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
};

/**
 * Forma para llama a un reducer y de esta forma poder alterar el estado inicial y obtener un nuevo estado.
 */
todos = todoReducer(todos, agregarTodoAction);

console.log(todos)