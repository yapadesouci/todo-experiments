import Todo from "./Todo";
import TodoAdd from "./TodoAdd";
import { v4 as uuidv4 } from 'uuid';
import {useEffect, useState} from "react";

const TodoCard = () => {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        setTodos([{
            id: uuidv4(),
            description: 'Add another component to Tailwind Components',
            completed: false
        },{
            id: uuidv4(),
            description: 'Submit Todo App Component to Tailwind Components',
            completed: true
        }])
    }, [])

    function handleSubmit(e, description) {
        e.preventDefault()

        const todo = {
            id: uuidv4(),
            description: description,
            completed: false
        }

        setTodos([todo, ...todos])
    }

    function handleUpdateStatusClick(id) {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }

            return todo
        }))
    }

    function handleDeleteClick(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <div className="h-100 w-full flex items-center justify-center font-sans">
            <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-xl">
                <div className="mb-4">
                    <h1 className="text-2xl font-bold text-neutral-900">Todo List</h1>
                    <TodoAdd handleSubmit={handleSubmit}/>
                </div>
                <div>
                    {todos.map(todo => {
                        return <Todo key={todo.id} todo={todo} handleUpdateStatusClick={handleUpdateStatusClick} handleDeleteClick={handleDeleteClick}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default TodoCard