import { TodoActionTypes } from "../type/action";
import { getTodos } from '../add-todo-component/add-todo-service';

const initialState = {
  todos: getTodos()
};

const todoReducer = (
  state = initialState,
  action: TodoActionTypes
) => {
  let t = null;
  switch (action.type) {
    case "ADD_TODO":
      t = Object.assign({}, {
        ...state,
        todos: getTodos()
      });
      break;
    case "REMOVE_TODO":
      t = Object.assign({}, {
        ...state,
        todos: getTodos()
      });
      break;
    case "EDIT_TODO":
      t = Object.assign({}, {
        ...state,
        todos: getTodos()
      });
      break;
    case "SET_TODOS":
      t = Object.assign({}, {
        ...state,
        todos: getTodos()
      });
      break;
    default:
      t = Object.assign({}, {
        ...state,
        todos: getTodos()
      });
      break;
  }
  return t;
};

export { todoReducer };
