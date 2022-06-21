import { TodoState, Todo } from './../interfaces/interfaces';

type TodoAction =
    | { type: 'addTodo', payload: Todo }
    | { type: 'toggleTodo', payload: {id: string} ;}

    //en el reducer siempre hay que devolver un nuevo state 
export const TodoReducer = (state: TodoState, action: TodoAction): TodoState => {

console.log(action)

    //evaluamos el action.type 
    switch (action.type) {
        case 'addTodo':
            return{
                ...state, //regresamos el estado como está 
                todos: [ ...state.todos, action.payload ] //se mandan todos los todos anteriores y se añade el nuevo todo por medio del action.payload
            }
        case 'toggleTodo':
        return{
            ...state,
            todos: state.todos.map( ({...todo}) => {
                if( todo.id === action.payload.id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        }
        default:
            return state;
    }

}