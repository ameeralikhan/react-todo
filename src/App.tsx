import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import AddTodoContainer from './add-todo-component/add-todo-component';
import TodoListContainer from './todo-list-component/todo-list-component';
import { Provider } from 'react-redux';
import { store } from "./store/configureStore";

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">TODO List</Link>
                </li>
                <li>
                  <Link to="/add-todo">Add New TODO</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/add-todo" component={AddTodoContainer} />
              <Route path="/" component={TodoListContainer} />
            </Switch>
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
