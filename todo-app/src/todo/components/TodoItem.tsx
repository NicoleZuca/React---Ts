//import { useContext } from "react";
//import { TodoContext } from "../context/TodoContext";
import { Todo } from "../interfaces/interfaces";
import { useTodos } from '../hooks/useTodos';

interface props { 
    todo: Todo
}
export const TodoItem = ({todo}: props) => {

    //const {toggleTodo} = useContext(TodoContext)
    const { toggleTodo } = useTodos();

  return (
    <li style={{
        cursor: 'pointer',
        textDecoration: todo.completed ? 'line-through' : '', //si el todo.completed está en true aparece tachado sino aparece vacío
    }}
        onDoubleClick={ () => toggleTodo (todo.id) }>
        { todo.desc }
    </li>
  )
}

function useTodo(): { toggleTodo: any; } {
    throw new Error("Function not implemented.");
}

