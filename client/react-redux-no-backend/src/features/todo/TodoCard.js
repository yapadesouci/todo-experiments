import {useSelector} from "react-redux";
import TodoAdd from "./TodoAdd";
import Todo from "./Todo";

const TodoCard = () => {

    const todos = useSelector((state) => state.todos.value)

    return (
        <div className="h-100 w-full flex items-center justify-center font-sans">
            <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-xl">
                <div className="mb-4">
                    <h1 className="text-2xl font-bold text-neutral-900">Todo List</h1>
                    <TodoAdd />
                </div>
                <div>
                    {todos.map(todo => {
                        return <Todo key={todo.id} todo={todo}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default TodoCard;