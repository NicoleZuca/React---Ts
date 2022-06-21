import { createContext } from "react";
import { TodoState } from "../interfaces/interfaces";

//la función del context es que mi contexto sea capaz de distribuir la información del estado o información que yo quiero que sea compartida por todos 
//mis componentes sin importar que tan anidados estén en otros componentes
export type TodoContextProps = {
    todoState: TodoState,
    toggleTodo: (id:string) => void;
}

// el TodoContext es el que va a terminar alojando toda la información de lo quiero ccompartir a lo largo de mis componentes
export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps); 