import {useState} from "react";
import {add} from "./todoSlice";
import {v4 as uuidv4} from "uuid";
import {useDispatch} from "react-redux";

const TodoAdd = () => {
    const dispatch = useDispatch()

    const [description, setDescription] = useState('')

    function handleDescriptionUpdate(e) {
        setDescription(e.target.value)
    }

    function handleSubmit(e, description) {
        e.preventDefault()

        dispatch(add({
            id: uuidv4(),
            description: description,
            completed: false
        }))

        setDescription('')
    }

    return (
        <form className="flex mt-4" onSubmit={(e) => handleSubmit(e, description)}>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                   placeholder="Add Todo"
                   value={description}
                   onChange={handleDescriptionUpdate}/>
            <input type="submit" className="flex-no-shrink p-2 border-2 rounded text-teal-600 border-teal-600 hover:text-white hover:bg-teal-600" value="Add"/>
        </form>
    )
}

export default TodoAdd