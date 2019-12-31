import { Todo } from "../type/Todo";
import { TodoActionTypes } from "../type/action";
import { getTodos } from '../add-todo-component/add-todo-service';

const initialState = {
  todos: getTodos()
};

const todoReducer = (
  state = initialState,
  action: TodoActionTypes
) => {
  switch (action.type) {
    case "ADD_TODO":
      return Object.assign({}, {
        ...state,
        todos: getTodos()
      });
      break;
    case "REMOVE_TODO":
      return Object.assign({}, {
        ...state,
        todos: getTodos()
      });
      break;
    case "EDIT_TODO":
      Object.assign({}, {
        ...state,
        todos: getTodos()
      });
      break;
    case "SET_TODOS":
      return Object.assign({}, {
        ...state,
        todos: getTodos()
      });
      break;
    default:
      return Object.assign({}, {
        ...state,
        todos: getTodos()
      });
      break;
  }
};

export { todoReducer };
