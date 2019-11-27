import React, { Component } from 'react';
import './todo-list-component.scss';
import { TodoService } from "../add-todo-component/add-todo-service";
import { TodoList } from "../add-todo-component/add-todo.interface";
import { AddTodoComponent } from '../add-todo-component/add-todo-component';

interface IProps {
}

interface IState {
    todos?: TodoList[];
}


export class TodoListComponent extends Component<IProps, IState> {

    todoService = new TodoService();
    todos: TodoList[] = [];

    componentWillMount() {
        this.getTodos();
    }

    componentDidMount() { }

    getTodos() {
        this.todos = this.todoService.getTodos();
        this.setState({
            todos: this.todos
        });
    }

    render() {
        return <div className="todo-list-container">
            <AddTodoComponent refreshTodos={this.getTodos.bind(this)}></AddTodoComponent>
            <br />
            <table className="todo-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {!this.state.todos ? "" : this.state.todos.map((listValue, index) => {
                        return (
                            <tr key={index}>
                                <td>{listValue.title}</td>
                                <td>{listValue.description}</td>
                                <td>{listValue.estimatedDate}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    }
}
