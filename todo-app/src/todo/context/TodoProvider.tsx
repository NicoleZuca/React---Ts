import { useReducer } from "react"
import { TodoState } from "../interfaces/interfaces"
import { TodoContext } from "./TodoContext"
import { TodoReducer } from "./TodoReducer"

const INITIAL_STATE: TodoState ={
    todoCount: 2,
    todos: [
        {
            id: '1',
            desc: 'Recolectar las gemas del infinito',
            completed:false
        },
        {
            id: '2',
            desc: 'Gema del alma',
            completed:false
        }
    ],
    completed: 0,
    pending: 2
}

interface props {
    children: JSX.Element | JSX.Element[] //esto es un elemento JSX por lo tanto, hay que definirlo, y hay que definir si es uno o varios
}

export const TodoProvider = ({ children }: props) => {
    
    const [todoState, dispatch] = useReducer (TodoReducer, INITIAL_STATE)

    //es la función que se va a ejecutar cada vez que demos doble click
    const toggleTodo = (id: string) =>{
        dispatch({ type: 'toggleTodo', payload: {id}})
    }

    return (
        <TodoContext.Provider value={{
            todoState, 
            toggleTodo
        }}>
            { children } {/* recibe los componentes hijos*/}
        </TodoContext.Provider>
    )
}