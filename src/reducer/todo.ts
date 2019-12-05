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
    case "REMOVE_TODO":
      return Object.assign({}, {
        ...state,
        todos: getTodos()
      });
    case "EDIT_TODO":
      Object.assign({}, {
        ...state,
        todos: getTodos()
      });
    // return state.todos.map(todo => {
    //   if (todo.id === action.todo.id) {
    //     return Object.assign({}, {
    //       ...state,
    //       todos: getTodos()
    //     });
    //   } else {
    //     return Object.assign({}, {
    //       ...state,
    //       todos: getTodos()
    //     });
    //   }
    // });
    case "SET_TODOS":
      return Object.assign({}, {
        ...state,
        todos: getTodos()
      });
    default:
      return Object.assign({}, {
        ...state,
        todos: getTodos()
      });
  }
};

export { todoReducer };
