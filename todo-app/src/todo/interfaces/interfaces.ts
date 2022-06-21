// indicamos como queremos que luzca nuestro todo

export interface Todo {
    id: string;
    desc: string;
    completed: boolean;
}

// indicamos como queremos que luzca nuestro todoState

export interface TodoState {
    todoCount: number;
    todos: Todo[],
    completed: number;
    pending: number;
}