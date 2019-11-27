import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import { AddTodoComponent } from './add-todo-component/add-todo-component';
import { TodoListComponent } from './todo-list-component/todo-list-component';

const App: React.FC = () => {
  return (
    <div className="App">
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
            <Route path="/add-todo">
              <AddTodoComponent></AddTodoComponent>
            </Route>
            <Route path="/">
              <TodoListComponent></TodoListComponent>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
