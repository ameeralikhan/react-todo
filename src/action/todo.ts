import uuid from "uuid";
import { Todo } from "../type/Todo";
import {
    ADD_TODO,
    AppActions,
    REMOVE_TODO,
    EDIT_TODO,
    SET_TODOS
} from "../type/action";
import { Dispatch } from "redux";
import { AppState } from "../store/configureStore";
import { createTodo } from "../add-todo-component/add-todo-service";

export const addTodo = (todo: Todo): AppActions => ({
    type: ADD_TODO,
    todo
});

export const removeTodo = (id: string): AppActions => ({
    type: REMOVE_TODO,
    id
});

export const editTodo = (todo: Todo): AppActions => ({
    type: EDIT_TODO,
    todo
});

export const setTodos = (todos: Todo[]): AppActions => ({
    type: SET_TODOS,
    todos
});

export const startAddTodo = (todoData: Todo) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        const {
            id = uuid(),
            description = '',
            title = '',
            estimatedDate = ''
        } = todoData;
        const todo = { id, description, title, estimatedDate } as Todo;

        createTodo(todo);

        return dispatch(
            addTodo(todo)
        );
    };
};

export const startRemoveTodo = (id: string) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        dispatch(removeTodo(id));
    };
};

export const startEditTodo = (todo: Todo) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        dispatch(editTodo(todo));
    };
};

export const startSetTodos = (todos: Todo[]) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        dispatch(setTodos(todos));
    };
};
