import { Todo } from "../type/Todo";

const localStorageKey: string = 'myTodos';


function createTodo(newTodo: Todo): Todo {
    let todos = getTodos();
    todos.push(newTodo);
    setTodos(todos);
    return newTodo;
}

function getTodos(): Todo[] {
    let todos = localStorage.getItem(localStorageKey);
    if (!todos) {
        return [] as Todo[];
    }
    let parsedTodo = JSON.parse(todos) as Todo[];
    return parsedTodo;
}

function setTodos(todos: Todo[]) {
    localStorage.setItem(localStorageKey, JSON.stringify(todos));
}

export {
    createTodo,
    getTodos,
    setTodos
}