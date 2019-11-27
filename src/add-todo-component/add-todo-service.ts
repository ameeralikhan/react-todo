import { AddTodo, TodoList } from "./add-todo.interface";


export class TodoService {

    localStorageKey: string = 'myTodos';

    constructor() { }

    createTodo(newTodo: AddTodo): AddTodo {
        let todos = this.getTodos();
        todos.push(newTodo);
        this.setTodos(todos);
        return newTodo;
    }

    getTodos(): TodoList[] {
        let todos = localStorage.getItem(this.localStorageKey);
        if (!todos) {
            return [] as TodoList[];
        }
        let parsedTodo = JSON.parse(todos) as TodoList[];
        return parsedTodo;
    }

    setTodos(todos: TodoList[]) {
        localStorage.setItem(this.localStorageKey, JSON.stringify(todos));
    }
}