import React, { Component } from 'react';
import './todo-list-component.scss';
import { Todo } from '../type/Todo';
import { AppState } from '../store/configureStore';
import { connect } from 'react-redux';
import AddTodoContainer from '../add-todo-component/add-todo-component';

interface AddTodoProps { }

interface AddTodoState { }

type Props = AddTodoProps & LinkStateProps;

class TodoListComponent extends Component<Props, AddTodoState> {

    todos: Todo[] = [];

    componentWillMount() { }

    componentDidMount() { }

    render() {
        return <div className="todo-list-container">
            <br />
            <AddTodoContainer></AddTodoContainer>
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
                    {!this.props.todos ? "" : this.props.todos.map((listValue: Todo, index: number) => {
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

interface LinkStateProps {
    todos: Todo[];
}

const mapStateToProps = (
    state: AppState,
    ownProps: AddTodoProps
): LinkStateProps => ({
    todos: state.todoReducer ? state.todoReducer.todos : []
});

const TodoListContainer = connect(
    mapStateToProps
)(TodoListComponent);

export default TodoListContainer;