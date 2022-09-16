import React from 'react'
import Todo from "./Todo";
import TodoAdd from "./TodoAdd";
import { v4 as uuidv4 } from 'uuid';

class TodoCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: []
        }

        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleUpdateStatusClick = this.handleUpdateStatusClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({
            todos: [{
                id: uuidv4(),
                description: 'Add another component to Tailwind Components',
                completed: false
            },{
                id: uuidv4(),
                description: 'Submit Todo App Component to Tailwind Components',
                completed: true
            }]
        })
    }

    handleSubmit(e, description) {
        e.preventDefault()

        const todo = {
            id: uuidv4(),
            description: description,
            completed: false
        }

        this.setState({
            todos: [todo, ...this.state.todos]
        })
    }

    handleUpdateStatusClick(id) {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }

                return todo
            })
        })
    }

    handleDeleteClick(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    render() {
        return (
            <div className="h-100 w-full flex items-center justify-center font-sans">
                <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-xl">
                    <div className="mb-4">
                        <h1 className="text-2xl font-bold text-neutral-900">Todo List</h1>
                        <TodoAdd handleSubmit={this.handleSubmit}/>
                    </div>
                    <div>
                        {this.state.todos.map(todo => {
                            return <Todo key={todo.id} todo={todo} handleUpdateStatusClick={this.handleUpdateStatusClick} handleDeleteClick={this.handleDeleteClick}/>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoCard