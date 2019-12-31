import { Todo } from "./Todo";

// action strings
export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const SET_TODOS = "SET_TODOS";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";

export interface SetTodoAction {
  type: typeof SET_TODOS;
  todos: Todo[];
}

export interface EditTodoAction {
  type: typeof EDIT_TODO;
  todo: Todo;
}

export interface RemoveTodoAction {
  type: typeof REMOVE_TODO;
  id: string;
}

export interface AddTodoAction {
  type: typeof ADD_TODO;
  todo: Todo;
}

export interface AddTodoSuccessAction {
  type: typeof ADD_TODO_SUCCESS;
  todo: Todo;
}

export type TodoActionTypes =
  | SetTodoAction
  | EditTodoAction
  | RemoveTodoAction
  | AddTodoAction
  | AddTodoSuccessAction;

export type AppActions = TodoActionTypes;
