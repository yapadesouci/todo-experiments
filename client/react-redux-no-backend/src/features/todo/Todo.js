import {remove, updateStatus} from "./todoSlice";
import {useDispatch} from "react-redux";

const Todo = ({
    todo: {id, description, completed}
}) => {
    const dispatch = useDispatch()

    return (
        <div className="flex mb-4 items-center">
            <p className={`w-full ${completed ? 'line-through text-green-600' : 'text-neutral-900'}`}>{description}</p>
            {completed &&
                <button
                    className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-neutral-600 border-neutral-600 hover:bg-neutral-600"
                    onClick={() => dispatch(updateStatus(id))}>Not Done</button>
            }
            {!completed &&
                <button
                    className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-600 border-green-600 hover:bg-green-600"
                    onClick={() => dispatch(updateStatus(id))}>Done</button>
            }
            <button
                className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-600 border-red-600 hover:text-white hover:bg-red-600"
                onClick={() => dispatch(remove(id))}>Remove
            </button>
        </div>
    )
}

export default Todo