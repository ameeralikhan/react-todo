import React, { Component } from 'react';
import './todo-list-component.scss';
import { Todo } from '../type/Todo';
import { AppState } from '../store/configureStore';
import { AppActions } from '../type/action';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { startAddTodo, startSetTodos } from '../action/todo';
import { bindActionCreators } from 'redux';
import AddTodoContainer from '../add-todo-component/add-todo-component';

interface AddTodoProps { }

interface AddTodoState { }

type Props = AddTodoProps & LinkStateProps & LinkDispatchProps;

class TodoListComponent extends Component<Props, AddTodoState> {

    todos: Todo[] = [];

    componentWillMount() {
        this.getTodos();
    }

    componentDidMount() { }

    getTodos() {
        this.todos = [];
    }

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
                    {!this.props.todos ? "" : this.props.todos.map((listValue, index) => {
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
interface LinkDispatchProps {
    startSetTodos: (todo: Todo[]) => void;
}

const mapStateToProps = (
    state: AppState,
    ownProps: AddTodoProps
): LinkStateProps => ({
    todos: state.todoReducer.todos
});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: AddTodoProps
): LinkDispatchProps => ({
    startSetTodos: bindActionCreators(startSetTodos, dispatch),
});

const TodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoListComponent);

export default TodoListContainer;