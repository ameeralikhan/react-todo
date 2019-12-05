import React, { Component } from 'react';
import './add-todo-component.scss';
import {
    FormBuilder,
    FieldGroup,
    FieldControl,
    Validators,
} from "react-reactive-form";
import { Todo } from '../type/Todo';
import { AppState } from '../store/configureStore';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../type/action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { startEditTodo, startAddTodo } from '../action/todo';
import { createTodo } from './add-todo-service';
const TextInput = (fieldProps: any) => (
    <div>
        <input type={`${fieldProps.meta.type || 'text'}`} placeholder={`Enter ${fieldProps.meta.label}`} {...fieldProps.handler()} />
        <span>
            {fieldProps.touched
                && fieldProps.hasError("required")
                && `${fieldProps.meta.label} is required`}
        </span>
    </div>
)

interface AddTodoProps { }

interface AddTodoState { }

type Props = AddTodoProps & LinkStateProps & LinkDispatchProps;

class AddTodoComponent extends Component<Props, AddTodoState> {

    loginForm = FormBuilder.group({
        title: ["", Validators.required],
        description: ["", Validators.required],
        estimatedDate: ["", Validators.required]
    });

    handleReset = () => {
        this.loginForm.reset();
    }

    onEdit = (todo: Todo) => {
        this.props.startEditTodo(todo);
    };

    onAdd = (todo: Todo) => {
        createTodo(todo);
        this.props.startAddTodo(todo);
    };

    handleSubmit = (e: any) => {
        e.preventDefault();
        this.onAdd(this.loginForm.value as Todo);
    }

    componentWillMount() { }

    componentDidMount() { }

    render() {
        return <div>
            <FieldGroup
                control={this.loginForm}
                render={({ get, invalid }) => (
                    <form onSubmit={this.handleSubmit}>

                        <FieldControl
                            name="title"
                            render={TextInput}
                            meta={{ type: 'text', label: "Title" }}
                        />

                        <FieldControl
                            name="description"
                            render={TextInput}
                            meta={{ type: 'text', label: "Description" }}
                        />

                        <FieldControl
                            name="estimatedDate"
                            render={TextInput}
                            meta={{ type: "date", label: 'Estimated Date' }}
                        />

                        <button
                            type="button"
                            onClick={this.handleReset}>
                            Reset
                        </button>
                        <button
                            type="submit"
                            disabled={invalid}>
                            Submit
                        </button>
                    </form>
                )}
            />
        </div>
    }
}

interface LinkStateProps {
    todos: Todo[];
}
interface LinkDispatchProps {
    startAddTodo: (todo: Todo) => void;
    startEditTodo: (todo: Todo) => void;
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
    startAddTodo: bindActionCreators(startAddTodo, dispatch),
    startEditTodo: bindActionCreators(startEditTodo, dispatch)
});

const AddTodoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodoComponent);

export default AddTodoContainer;

