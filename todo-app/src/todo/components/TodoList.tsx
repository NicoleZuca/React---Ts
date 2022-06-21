//import { useContext } from "react"
//import { TodoContext } from "../context/TodoContext"
import { useTodos } from "../hooks/useTodos";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {

    //const {todoState} = useContext(TodoContext)
    //const {todos} = todoState;
    const {todos} = useTodos(); //Cuando quiera hacer interacciones con el context puedo hacerlo a través de mi custom hooks y así mis componentes quedan muchos más limpios y fáciles de leer

  return (
    <ul>
        { todos.map( todo => <TodoItem key={todo.id} todo={todo}/>)} 
    </ul>
  )
}

