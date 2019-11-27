import React, { Component } from 'react';
import './add-todo-component.scss';
import {
    FormBuilder,
    FieldGroup,
    FieldControl,
    Validators,
} from "react-reactive-form";
import { TodoService } from "./add-todo-service";

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

type TodoListProps = {
    refreshTodos?: any
}

export class AddTodoComponent extends Component<TodoListProps> {

    todoService = new TodoService();

    loginForm = FormBuilder.group({
        title: ["", Validators.required],
        description: ["", Validators.required],
        estimatedDate: ["", Validators.required]
    });

    handleReset = () => {
        this.loginForm.reset();
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        this.todoService.createTodo(this.loginForm.value);
        this.props.refreshTodos();
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
